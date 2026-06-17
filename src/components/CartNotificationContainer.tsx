'use client'

import React from 'react'
import { useCartNotification } from '@/contexts/CartNotificationContext'
import CartNotification from './CartNotification'

const CartNotificationContainer: React.FC = () => {
  const { notifications, hideNotification } = useCartNotification()

  return (
    <div role="status" aria-live="polite" className="fixed top-20 right-4 z-[90] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
      {notifications.map((notification) => (
        <CartNotification
          key={notification.id}
          message={notification.message}
          productName={notification.productName}
          productImage={notification.productImage}
          onClose={() => hideNotification(notification.id)}
        />
      ))}
    </div>
  )
}

export default CartNotificationContainer
