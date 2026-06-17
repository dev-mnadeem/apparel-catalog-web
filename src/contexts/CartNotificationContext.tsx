'use client'

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

export const CART_NOTIFICATION_MS = 4000

interface CartNotification {
  id: number
  message: string
  productName: string
  productImage: string
}

interface CartNotificationContextType {
  notifications: CartNotification[]
  showNotification: (productName: string, productImage: string) => void
  hideNotification: (id: number) => void
}

const CartNotificationContext = createContext<CartNotificationContextType | null>(null)

export function CartNotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<CartNotification[]>([])
  // A counter, not Date.now(): two adds in the same millisecond must not share a key.
  const nextId = useRef(0)
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>())

  const hideNotification = useCallback((id: number) => {
    clearTimeout(timers.current.get(id))
    timers.current.delete(id)
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }, [])

  const showNotification = useCallback((productName: string, productImage: string) => {
    const id = ++nextId.current
    setNotifications(prev => [...prev.slice(-2), { id, message: 'Added to your bag', productName, productImage }])
    timers.current.set(id, setTimeout(() => hideNotification(id), CART_NOTIFICATION_MS))
  }, [hideNotification])

  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach(clearTimeout)
  }, [])

  return (
    <CartNotificationContext.Provider value={{ notifications, showNotification, hideNotification }}>
      {children}
    </CartNotificationContext.Provider>
  )
}

export function useCartNotification() {
  const context = useContext(CartNotificationContext)
  if (!context) {
    throw new Error('useCartNotification must be used within a CartNotificationProvider')
  }
  return context
}
