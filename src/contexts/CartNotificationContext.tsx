'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

interface CartNotification {
  id: string
  message: string
  productName: string
  productImage: string
  isVisible: boolean
}

interface CartNotificationContextType {
  notifications: CartNotification[]
  showNotification: (productName: string, productImage: string) => void
  hideNotification: (id: string) => void
}

const CartNotificationContext = createContext<CartNotificationContextType | null>(null)

export function CartNotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<CartNotification[]>([])

  const showNotification = useCallback((productName: string, productImage: string) => {
    const id = Date.now().toString()
    const newNotification: CartNotification = {
      id,
      message: 'Added to cart successfully!',
      productName,
      productImage,
      isVisible: true
    }

    setNotifications(prev => [...prev, newNotification])

    // Auto-hide after 4 seconds
    setTimeout(() => {
      hideNotification(id)
    }, 4000)
  }, [])

  const hideNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }, [])

  return (
    <CartNotificationContext.Provider value={{
      notifications,
      showNotification,
      hideNotification
    }}>
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




