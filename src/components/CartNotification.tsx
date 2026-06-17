'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { productImage as resolveImage } from '@/lib/image-mapping'

interface CartNotificationProps {
  message: string
  productName: string
  productImage: string
  onClose: () => void
}

const CartNotification: React.FC<CartNotificationProps> = ({ message, productName, productImage, onClose }) => (
  <div className="animate-slide-in-right rounded-lg border border-stone-200 bg-white p-4 shadow-lg">
    <div className="flex items-start gap-3">
      <img
        src={resolveImage(productImage)}
        alt=""
        className="h-12 w-12 flex-shrink-0 rounded-lg border border-stone-200 object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-sm font-medium text-stone-900">
          <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
          {message}
        </p>
        <p className="truncate text-sm text-stone-600">{productName}</p>
        <Link href="/cart" className="mt-1 inline-block text-sm font-medium underline underline-offset-2">
          View bag
        </Link>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="flex-shrink-0 rounded p-1 text-stone-500 transition-colors hover:text-stone-800"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  </div>
)

export default CartNotification
