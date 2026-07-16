'use client'

import React, { useState, useEffect } from 'react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface CartNotificationProps {
  message: string
  productName: string
  productImage: string
  isVisible: boolean
  onClose: () => void
}

const CartNotification: React.FC<CartNotificationProps> = ({
  message,
  productName,
  productImage,
  isVisible,
  onClose
}) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      // Auto-hide after 4 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-[90] max-w-sm w-full">
      <div className={`
        bg-white rounded-lg shadow-lg border border-gray-200 p-4 transform transition-all duration-300 ease-in-out
        ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        <div className="flex items-start space-x-3">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img 
              src={productImage} 
              alt={productName}
              className="w-12 h-12 rounded-lg object-cover border border-gray-200"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-sm font-medium text-gray-900">{message}</p>
            </div>
            <p className="text-sm text-gray-600 truncate">{productName}</p>
          </div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div className="bg-green-500 h-1 rounded-full animate-pulse" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default CartNotification

