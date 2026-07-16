'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { getProductImageUrl } from '@/lib/image-mapping'

export default function SalePage() {
  const { addToCart, state } = useCart()
  const [addingToCart, setAddingToCart] = useState<number | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successProduct, setSuccessProduct] = useState('')
  
  const saleItems = [
    // Pocket Square Collection - Special Discount
    {
      id: 11,
      name: 'BLUE CHAIN POCKET SQUARE',
      price: 'Rs.999',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/WhatsApp Image 2024-09-10 at 11.41.04 AM.png'),
      rating: 4.8,
      reviews: 6,
      description: 'Elegant blue fabric with sophisticated chain-link patterns and luxury texture - perfect for modern professional styling and premium occasions',
      category: 'Men - Pocket Square',
      discount: '50% OFF'
    },
    {
      id: 14,
      name: 'GOLDEN HARMONY POCKET SQUARE',
      price: 'Rs.999',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/6b8867a9-d34e-4246-a710-b7ecb37167c9.png'),
      rating: 4.8,
      reviews: 6,
      description: 'Elegant golden beige fabric with sophisticated geometric patterns and luxury texture - perfect for premium styling and formal occasions',
      category: 'Men - Pocket Square',
      discount: '50% OFF'
    },
    {
      id: 16,
      name: 'CLOUDY POCKET SQUARE',
      price: 'Rs.999',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_7723.png'),
      rating: 4.8,
      reviews: 6,
      description: 'Elegant cloudy gray fabric with sophisticated mist-like patterns and luxury texture - perfect for modern professional styling and premium occasions',
      category: 'Men - Pocket Square',
      discount: '50% OFF'
    },
    {
      id: 19,
      name: 'WHITE LILLY POCKET SQUARE',
      price: 'Rs.999',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/56bac310-5829-4b2c-8d7b-db59268728aa.png'),
      rating: 4.8,
      reviews: 6,
      description: 'Elegant white fabric with sophisticated lilly patterns and luxury texture - perfect for pure, elegant styling and premium occasions',
      category: 'Men - Pocket Square',
      discount: '50% OFF'
    },
    {
      id: 21,
      name: 'DARK MOUNTAIN POCKET SQUARE',
      price: 'Rs.999',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_7698.png'),
      rating: 4.8,
      reviews: 6,
      description: 'Elegant dark fabric with sophisticated mountain patterns and luxury texture - perfect for bold, dramatic styling and premium occasions',
      category: 'Men - Pocket Square',
      discount: '50% OFF'
    },
    {
      id: 22,
      name: 'SKY BLUE HARMONY POCKET SQUARE',
      price: 'Rs.999',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_7711.jpg'),
      rating: 4.8,
      reviews: 6,
      description: 'Elegant sky blue fabric with harmonious patterns and luxury texture - perfect for serene, calming styling and premium occasions',
      category: 'Men - Pocket Square',
      discount: '50% OFF'
    },
    // Women's Silk Scarf Collection - Special Discount
    {
      id: 44,
      name: 'SCARLET',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0439.png'),
      rating: 4.8,
      reviews: 4,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf',
      discount: '55% OFF'
    },
    {
      id: 48,
      name: 'BEIGE STAR',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0341.png'),
      rating: 4.9,
      reviews: 5,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace. Each delicate thread weaves a story of luxury and refinement, creating a symphony of beauty that transcends mere fashion to become a true work of art.',
      category: 'Women - Silk Scarf',
      discount: '55% OFF'
    },
    {
      id: 52,
      name: 'BEIGE STAR',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0348.png'),
      rating: 4.9,
      reviews: 5,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace. Each delicate thread weaves a story of luxury and refinement, creating a symphony of beauty that transcends mere fashion to become a true work of art.',
      category: 'Women - Silk Scarf',
      discount: '55% OFF'
    },
    {
      id: 49,
      name: 'PINK OSTRICH',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0380.png'),
      rating: 4.8,
      reviews: 4,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace. Each delicate thread weaves a story of luxury and refinement, creating a symphony of beauty that transcends mere fashion to become a true work of art.',
      category: 'Women - Silk Scarf',
      discount: '55% OFF'
    },
    {
      id: 50,
      name: 'HORSE HYPE',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0517.png'),
      rating: 4.7,
      reviews: 6,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace. Each delicate thread weaves a story of luxury and refinement, creating a symphony of beauty that transcends mere fashion to become a true work of art.',
      category: 'Women - Silk Scarf',
      discount: '55% OFF'
    },
    {
      id: 51,
      name: 'CRYSTAL BLACK',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0170.png'),
      rating: 4.9,
      reviews: 7,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace. Each delicate thread weaves a story of luxury and refinement, creating a symphony of beauty that transcends mere fashion to become a true work of art.',
      category: 'Women - Silk Scarf',
      discount: '55% OFF'
    },
    {
      id: 54,
      name: 'OLD SCARLET',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/Untitled (1080 x 1350 px) (3).png'),
      rating: 4.8,
      reviews: 5,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace. Each delicate thread weaves a story of luxury and refinement, creating a symphony of beauty that transcends mere fashion to become a true work of art.',
      category: 'Women - Silk Scarf',
      discount: '55% OFF'
    }
  ]

  const handleAddToCart = async (item: any) => {
    setAddingToCart(item.id)
    
    try {
      // Add to cart with default size and color
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
        selectedDesign: {
          id: item.id,
          name: item.name,
          image: item.image
        }
      })
      
      // Show success feedback
      setSuccessProduct(item.name)
      setShowSuccess(true)
      
      setTimeout(() => {
        setAddingToCart(null)
        setShowSuccess(false)
      }, 2000)
      
    } catch (error) {
      console.error('Error adding to cart:', error)
      setAddingToCart(null)
    }
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{successProduct} added to bag!</span>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-black transition-colors">
                <HeartIcon className="h-6 w-6" />
              </button>
              <Link href="/checkout" className="relative p-2 text-gray-600 hover:text-black transition-colors">
                <ShoppingBagIcon className="h-6 w-6" />
                {state.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {state.totalItems > 99 ? '99+' : state.totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4 font-poppins">Special Discount Offers</h1>
          <p className="text-xl text-gray-600 font-poppins">Amazing deals and discounts on premium fashion items</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {saleItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 h-full flex flex-col w-full"
            >
              {/* Product Image - Clickable for product details */}
              <Link href={`/product/${item.id}`} className="block">
                <div className="relative h-80 flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Image Loading...</p>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {item.discount}
                  </div>
                  {/* Wishlist Button */}
                  <button className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110">
                    <HeartIcon className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </Link>
              
              {/* Product Info and Actions */}
              <div className="p-6 flex-1 flex flex-col min-h-[200px] justify-between">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-black min-h-[3rem] leading-tight overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          className={`h-4 w-4 ${star <= Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2 font-medium">({item.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-bold text-black">{item.price}</span>
                      <span className="text-gray-500 line-through">{item.originalPrice}</span>
                    </div>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      SALE
                    </span>
                  </div>
                </div>

                {/* View Details Link */}
                <Link 
                  href={`/product/${item.id}`}
                  className="w-full text-center text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-sm mb-2 hover:underline"
                >
                  View Details
                </Link>

                {/* Add to Bag Button */}
                <button 
                  onClick={() => handleAddToCart(item)}
                  disabled={addingToCart === item.id}
                  className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 disabled:bg-red-400 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {addingToCart === item.id ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <ShoppingBagIcon className="h-4 w-4" />
                      Add to Bag
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
