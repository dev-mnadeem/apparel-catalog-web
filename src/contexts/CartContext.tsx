'use client'

import React, { createContext, useContext, useReducer, useEffect, useState, useCallback } from 'react'

import { cartReducer, parseStoredCart } from '@/lib/cart'
import type { CartItem, CartState, CartAction } from '@/lib/cart'
export type { CartItem } from '@/lib/cart'

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number, designId?: number) => void
  updateQuantity: (id: number, quantity: number, designId?: number) => void
  clearCart: () => void
  getCartTotal: () => string
  refreshCartPrices: () => void
  setNotificationHandler: (callback: (productName: string, productImage: string) => void) => void
  hasItems: boolean
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0,
    totalPrice: 0
  })

  // Notification callback - will be set by the notification provider
  const [notificationCallback, setNotificationCallback] = useState<((productName: string, productImage: string) => void) | null>(null)

  // Method to set notification callback from notification provider
  const setNotificationHandler = useCallback((callback: (productName: string, productImage: string) => void) => {
    setNotificationCallback(() => callback)
  }, [])

  // Check if cart has items
  const hasItems = state.items.length > 0

  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('shopping-cart')
      if (savedCart) dispatch({ type: 'LOAD_CART', payload: parseStoredCart(JSON.parse(savedCart)) })
    } catch { /* Invalid or unavailable storage starts with an empty cart. */ }
    setHydrated(true)
  }, [])
  useEffect(() => {
    if (!hydrated) return
    try { localStorage.setItem('shopping-cart', JSON.stringify(state.items)) } catch { /* The in-memory basket remains usable. */ }
  }, [state.items, hydrated])

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item })

    // Show notification if callback is available
    if (notificationCallback) {
      notificationCallback(item.name, item.image)
    }
  }

  const removeFromCart = (id: number, designId?: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, designId } })
  }

  const updateQuantity = (id: number, quantity: number, designId?: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, designId } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getCartTotal = (): string => {
    return `Rs.${state.totalPrice.toLocaleString()}`
  }

  const refreshCartPrices = () => {
    dispatch({ type: 'LOAD_CART', payload: state.items })
  }

  return (
    <CartContext.Provider value={{
      state,
      dispatch,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      refreshCartPrices,
      setNotificationHandler,
      hasItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
