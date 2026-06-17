'use client'


import Link from 'next/link'
import { ArrowLeftIcon, MinusIcon, PlusIcon, TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { storeContact } from '@/lib/store'
import { productImage } from '@/lib/image-mapping'
import BagLoading from '@/components/BagLoading'

export default function CartPage() {
  const { state, isHydrated, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const handleUpdateQuantity = (id: number, newQuantity: number, designId?: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id, designId)
    } else {
      updateQuantity(id, newQuantity, designId)
    }
  }

  if (!isHydrated) return <BagLoading />

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-madder-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-8">
              <ShoppingBagIcon className="h-12 w-12 text-stone-400" />
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">Your cart is empty</h1>
            <p className="text-stone-600 mb-8">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-stone-800 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-madder-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <p className="text-stone-600 mt-1">
              {state.totalItems} {state.totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 text-madder-600 hover:text-madder-800 hover:bg-madder-50 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Clear Cart
            </button>
            <Link
              href="/categories"
              className="flex items-center text-stone-600 hover:text-black transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={`${item.id}-${item.selectedDesign?.id || 'standard'}`} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={productImage(item.selectedDesign?.image || item.image)}
                      alt={item.name}
                      className="w-24 h-24 object-contain rounded-lg bg-stone-50"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-stone-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-stone-600 mb-2">{item.category}</p>

                    {/* Custom Design Selection */}
                    {item.selectedDesign && (
                      <div className="mb-3">
                        <p className="text-sm text-peacock-600 font-medium">
                          Custom Design: {item.selectedDesign.name}
                        </p>
                        <p className="text-xs text-stone-500">
                          Selected pocket square design for custom scarf
                        </p>
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold text-black">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-stone-500 line-through">{item.originalPrice}</span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.selectedDesign?.id)}
                          className="p-2 rounded-full border border-stone-300 hover:bg-stone-50 transition-colors duration-200"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.selectedDesign?.id)}
                          className="p-2 rounded-full border border-stone-300 hover:bg-stone-50 transition-colors duration-200"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedDesign?.id)}
                        className="p-2 text-madder-500 hover:text-madder-700 hover:bg-madder-50 rounded-full transition-colors duration-200"
                        aria-label="Remove item"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal ({state.totalItems} items)</span>
                  <span>{getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">
                    {state.totalPrice >= 3000 ? 'FREE' : 'Rs.250'}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-black">
                    <span>Total</span>
                                      <span>
                    Rs.{(state.totalPrice + (state.totalPrice >= 3000 ? 0 : 250)).toLocaleString()}
                  </span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Banner */}
              {state.totalPrice < 3000 && (
                <div className="bg-madder-50 border border-madder-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-madder-800">
                    Add <strong>Rs.{(3000 - state.totalPrice).toLocaleString()}</strong> more to get free shipping!
                  </p>
                  <div className="mt-2 bg-madder-200 rounded-full h-2">
                    <div
                      className="bg-madder-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((state.totalPrice / 3000) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="w-full py-3 px-4 rounded-lg font-medium text-lg transition-all duration-200 bg-black text-white hover:bg-stone-800 text-center block"
              >
                Proceed to Checkout
              </Link>

              {/* Security Notice */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-xs text-stone-500">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">🔒</span>
                    <span>Secure checkout</span>
                  </div>
                  <span className="text-stone-300">•</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-peacock-600">📞</span>
                    <span>Call us at <strong>{storeContact.phoneDisplay}</strong></span>
                  </div>
                </div>
              </div>

              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className="w-full mt-4 py-2 px-4 border border-madder-300 text-madder-600 rounded-lg hover:bg-madder-50 transition-colors duration-200 text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample recommended products */}
            {[
              { id: 1, name: 'ELEGANT TEXTURED POCKET SQUARE', price: 'Rs.1,199', image: '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png' },
              { id: 24, name: 'RHINE STONE SCARF', price: 'Rs.1,800', image: '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png' },
              { id: 25, name: 'WILD SCARF', price: 'Rs.1,800', image: '/images/products/9dc9df6d-201f-452d-8036-3b0bc149f800.png' },
              { id: 31, name: 'CUSTOM SCARF', price: 'Rs.1,800', image: '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png' }
            ].map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="aspect-square bg-stone-50">
                  <img
                    src={productImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-stone-900 text-sm mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-black">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
