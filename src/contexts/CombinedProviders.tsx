'use client'

import React, { useEffect } from 'react'
import { CartProvider, useCart } from './CartContext'
import { CartNotificationProvider, useCartNotification } from './CartNotificationContext'

// Component to connect the two contexts
const ContextConnector: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setNotificationHandler } = useCart()
  const { showNotification } = useCartNotification()

  useEffect(() => {
    // Connect the cart context to the notification context
    setNotificationHandler(showNotification)
  }, [setNotificationHandler, showNotification])

  return <>{children}</>
}

export function CombinedProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <CartNotificationProvider>
        <ContextConnector>
          {children}
        </ContextConnector>
      </CartNotificationProvider>
    </CartProvider>
  )
}




