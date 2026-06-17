'use client'

import React from 'react'
import { useCartNotification } from '@/contexts/CartNotificationContext'
import CartNotification from './CartNotification'

const CartNotificationContainer: React.FC = () => {
  const { notifications, hideNotification } = useCartNotification()

  return (
    <>
      {notifications.map((notification) => (
        <CartNotification
          key={notification.id}
          message={notification.message}
          productName={notification.productName}
          productImage={notification.productImage}
          isVisible={notification.isVisible}
          onClose={() => hideNotification(notification.id)}
        />
      ))}
    </>
  )
}

export default CartNotificationContainer




