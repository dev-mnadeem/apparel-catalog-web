'use client'

import React, { createContext, useContext, useReducer, useEffect, useState, useCallback } from 'react'

export interface CartItem {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  quantity: number
  category: string
  selectedDesign?: {
    id: number
    name: string
    image: string
  }
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => string
  refreshCartPrices: () => void
  setNotificationHandler: (callback: (productName: string, productImage: string) => void) => void
  hasItems: boolean
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        JSON.stringify(item.selectedDesign) === JSON.stringify(action.payload.selectedDesign)
      )
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id && 
          JSON.stringify(item.selectedDesign) === JSON.stringify(action.payload.selectedDesign)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: calculateTotalPrice(updatedItems)
        }
      } else {
        const newItem = { ...action.payload, quantity: 1 }
        const updatedItems = [...state.items, newItem]
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: calculateTotalPrice(updatedItems)
        }
      }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload)
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: calculateTotalPrice(updatedItems)
      }
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: action.payload.id })
      }
      
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: calculateTotalPrice(updatedItems)
      }
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0
      }
    
    case 'LOAD_CART': {
      const totalItems = action.payload.reduce((sum, item) => sum + item.quantity, 0)
      return {
        items: action.payload,
        totalItems,
        totalPrice: calculateTotalPrice(action.payload)
      }
    }
    
    default:
      return state
  }
}

function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const price = parseFloat(item.price.replace('Rs.', '').replace(',', ''))
    return total + (price * item.quantity)
  }, 0)
}

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

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart')
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: cartData })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(state.items))
  }, [state.items])

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
    
    // Show notification if callback is available
    if (notificationCallback) {
      notificationCallback(item.name, item.image)
    }
  }

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
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
