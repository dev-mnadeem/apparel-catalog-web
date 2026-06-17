'use client'

import { useCart } from '@/contexts/CartContext'
import { 
  ShoppingBagIcon, 
  ArrowRightIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { productImage } from '@/lib/image-mapping'
import BagLoading from '@/components/BagLoading'

export default function CheckoutPage() {
  const { state, isHydrated, getCartTotal, removeFromCart, updateQuantity } = useCart()

  const handleQuantityChange = (itemId: number, newQuantity: number, designId?: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, designId)
    } else {
      updateQuantity(itemId, newQuantity, designId)
    }
  }

  if (!isHydrated) return <BagLoading />

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 py-16">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBagIcon className="h-10 w-10 text-stone-400" />
            </div>
            <h1 className="text-2xl font-bold text-stone-900 mb-3">Your cart is empty</h1>
            <p className="text-stone-600 mb-8">Add some items to your cart before checkout.</p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-madder-500 to-madder-600 text-white font-semibold rounded-xl hover:from-madder-600 hover:to-madder-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ArrowRightIcon className="h-5 w-5 mr-2 rotate-180" />
              Back to Shopping
            </Link>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-madder-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-xs text-stone-600 mt-1">Order Summary</p>
                </div>
                <div className="w-8 h-1 bg-stone-300 rounded-full"></div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-stone-300 text-stone-600 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-xs text-stone-600 mt-1">Contact Info</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-900 mb-3">Review Your Order</h1>
            <p className="text-lg text-stone-600">Step 1 of 2: Review your items before proceeding to checkout</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary - Left Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center">
                  <ShoppingBagIcon className="h-6 w-6 mr-3 text-madder-600" />
                  Order Summary
                </h2>
                
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div key={`${item.id}-${item.selectedDesign?.id ?? 'standard'}`} className="flex items-center space-x-4 p-4 bg-stone-50 rounded-xl">
                      <div className="relative">
                        <img 
                          src={productImage(item.image)} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-md"
                        />
                        <div className="absolute -top-2 -right-2 bg-madder-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-stone-900 text-lg">{item.name}</h3>
                        <p className="text-stone-500 text-sm mb-2">Premium Quality</p>
                        <p className="text-xl font-bold text-madder-600">{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.selectedDesign?.id)}
                          className="w-8 h-8 bg-stone-200 text-stone-700 rounded-full flex items-center justify-center hover:bg-stone-300 transition-colors"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.selectedDesign?.id)}
                          className="w-8 h-8 bg-stone-200 text-stone-700 rounded-full flex items-center justify-center hover:bg-stone-300 transition-colors"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedDesign?.id)}
                          className="w-8 h-8 bg-madder-100 text-madder-600 rounded-full flex items-center justify-center hover:bg-madder-200 transition-colors ml-2"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="border-t border-stone-200 pt-6 mt-8">
                  <div className="space-y-3">
                    <div className="flex justify-between text-stone-600">
                      <span>Subtotal</span>
                      <span>{getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Shipping</span>
                      <span className={parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'text-green-600' : 'text-stone-600'}>
                        {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'Free' : 'Rs. 200'}
                      </span>
                    </div>
                    <div className="border-t border-stone-200 pt-3">
                      <div className="flex justify-between items-center text-2xl font-bold text-stone-900">
                        <span>Total Amount</span>
                        <span className="text-madder-600">
                          {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 
                            ? getCartTotal() 
                            : `Rs. ${parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) + 200}`
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-stone-500 mt-2">Free shipping on orders above Rs. 3,000</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="flex-1 px-8 py-4 border-2 border-stone-300 text-stone-700 font-semibold rounded-xl hover:border-stone-400 transition-all duration-200 text-center"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/checkout/contact"
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-madder-500 to-madder-600 text-white font-semibold rounded-xl hover:from-madder-600 hover:to-madder-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Order Summary Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 sticky top-24">
                <h3 className="text-lg font-bold text-stone-900 mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Items ({state.totalItems})</span>
                    <span className="font-medium">{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Shipping</span>
                    <span className={parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'text-green-600' : 'text-stone-600'}>
                      {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'Free' : 'Rs. 200'}
                    </span>
                  </div>
                  <div className="border-t border-stone-200 pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-madder-600">
                        {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 
                          ? getCartTotal() 
                          : `Rs. ${parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) + 200}`
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-peacock-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShoppingBagIcon className="h-8 w-8 text-peacock-600" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">Fast Delivery</h3>
                </div>
                <div className="space-y-3 text-sm text-stone-600">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-peacock-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Same day dispatch</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-peacock-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>3-5 business days delivery</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-peacock-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Free shipping over Rs. 3,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
