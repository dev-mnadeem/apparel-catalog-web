'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'

export default function NewArrivalsPage() {
  const { addToCart, state } = useCart()
  const [addingToCart, setAddingToCart] = useState<number | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successProduct, setSuccessProduct] = useState('')
  
  const allProducts: Array<{
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    image: string;
    rating: number;
    reviews: number;
    description: string;
    category: string;
    status?: string;
    isCustomizable?: boolean;
  }> = [
    // Men's Pocket Square Collection - Rs.1,199
    {
      id: 1,
      name: 'ELEGANT TEXTURED POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png',
      rating: 4.8,
      reviews: 7,
      description: 'Sophisticated pocket square with rich texture and elegant finish - perfect for formal occasions and business attire',
      category: 'Men - Pocket Square'
    },
    {
      id: 2,
      name: 'COW PRINT ELEGANCE POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/58e29f6f-8ab5-45eb-a144-e174e0d30077.png',
      rating: 4.8,
      reviews: 5,
      description: 'Sophisticated cow print pattern with rich brown patches on white - perfect for bold, fashion-forward styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 3,
      name: 'BLACK ROYAL POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-10 at 11.32.54 AM (1).png',
      rating: 4.7,
      reviews: 6,
      description: 'Elegant cream fabric with bold black royal pattern - sophisticated geometric design for luxury styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 4,
      name: 'BLACK POLKA POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-10 at 10.28.46 AM.png',
      rating: 4.7,
      reviews: 6,
      description: 'Elegant black polka dot pattern on cream fabric - timeless classic design perfect for sophisticated styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 9,
      name: 'HARMONY POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_7774.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant cream fabric with sophisticated geometric patterns and luxury texture - perfect for modern professional styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 12,
      name: 'ROYAL GEOMETRIC POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_5023.png',
      rating: 4.7,
      reviews: 5,
      description: 'Sophisticated geometric pattern with royal elegance - featuring intricate designs perfect for luxury styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 13,
      name: 'RUBY PEAK POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png',
      rating: 4.9,
      reviews: 7,
      description: 'Stunning ruby red fabric with elegant peak patterns and sophisticated geometric motifs - perfect for luxury styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 15,
      name: 'RED ROSE POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/9da23af1-dc33-4fe7-b708-1674e07f0753.png',
      rating: 4.7,
      reviews: 5,
      description: 'Elegant silver-gray fabric with sophisticated mist-like patterns and luxury texture - perfect for modern professional styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 17,
      name: 'RHINE STONE POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-03 at 12.47.31 PM (2).png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant royal blue fabric with sophisticated geometric patterns and luxury texture - perfect for modern professional styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 18,
      name: 'WILD GRACE POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-03 at 12.47.31 PM.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant tiger print fabric with wild grace patterns and luxury texture - perfect for bold, fashion-forward styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 20,
      name: 'MAROONISH POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/b09f1ed7-ea68-4c47-b7c3-985c7de7d9fc.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant maroon fabric with sophisticated patterns and luxury texture - perfect for rich, warm styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 23,
      name: 'ROYAL ELEGANCE POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_5036.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant royal fabric with sophisticated patterns and luxury texture - perfect for regal, premium styling',
      category: 'Men - Pocket Square'
    },
    // Women's Silk Scarf Collection - Rs.1,399 (Only Available Products)
    {
      id: 41,
      name: 'GEOGRAPHIC',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_0171.png',
      rating: 4.7,
      reviews: 5,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 43,
      name: 'SEA OCEAN',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_0348.png',
      rating: 4.9,
      reviews: 6,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 44,
      name: 'SCARLET',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_0439.png',
      rating: 4.8,
      reviews: 4,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 53,
      name: 'LEAF',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/6a95ed61-0077-4003-8bbf-36eab791fe86.png',
      rating: 4.8,
      reviews: 5,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 55,
      name: '4 BLOCKS',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_4331.png',
      rating: 4.7,
      reviews: 4,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 56,
      name: 'PINK BLOCK',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png',
      rating: 4.8,
      reviews: 5,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 57,
      name: 'AUTUMN',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/ChatGPT Image Aug 1, 2025, 12_17_37 AM.png',
      rating: 4.7,
      reviews: 4,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 59,
      name: 'GREEN GRASS',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_4317.png',
      rating: 4.8,
      reviews: 5,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    {
      id: 60,
      name: 'BLACK CHAIR',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/WhatsApp Image 2025-08-01 at 1.04.04 AM.png',
      rating: 4.7,
      reviews: 4,
      description: 'An exquisitely crafted masterpiece of unparalleled elegance, this magnificent silk scarf embodies the very essence of sophisticated femininity and timeless grace.',
      category: 'Women - Silk Scarf'
    },
    // Men's Silk Scarf Collection - Rs.1,800
    {
      id: 24,
      name: 'RHINE STONE SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png',
      rating: 4.9,
      reviews: 8,
      description: 'Exquisite rhinestone-embellished silk scarf with premium craftsmanship - featuring elegant stone details and luxurious texture perfect for sophisticated styling and special occasions',
      category: 'Men - Silk Scarf'
    },
    {
      id: 25,
      name: 'WILD SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/9dc9df6d-201f-452d-8036-3b0bc149f800.png',
      rating: 4.8,
      reviews: 12,
      description: 'Bold wild-pattern silk scarf with striking design and premium texture - perfect for adventurous styling and making a statement',
      category: 'Men - Silk Scarf'
    },
    {
      id: 26,
      name: 'BLUE CHAIN SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/d930c310-b250-458f-acab-1ea1fd304c4f.png',
      rating: 4.7,
      reviews: 15,
      description: 'Sophisticated blue chain-pattern silk scarf with elegant links and premium texture - perfect for modern professional styling and luxury occasions',
      category: 'Men - Silk Scarf'
    },
    {
      id: 27,
      name: 'ROYAL BLACK SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/6f1bc366-c3c4-44b9-a168-8cc2de7f1add.png',
      rating: 4.9,
      reviews: 18,
      description: 'Luxurious royal black silk scarf with elegant patterns and premium texture - perfect for sophisticated styling and formal occasions',
      category: 'Men - Silk Scarf'
    },
    {
      id: 28,
      name: 'BLACK POLKA SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/55d19143-cc24-4411-a87c-5a466e0a1758.png',
      rating: 4.8,
      reviews: 14,
      description: 'Stylish black polka dot silk scarf with classic patterns and premium texture - perfect for timeless styling and sophisticated occasions',
      category: 'Men - Silk Scarf'
    },
    {
      id: 31,
      name: 'CUSTOM SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.3,000',
      image: '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png',
      rating: 4.9,
      reviews: 35,
      description: 'You can make any scarf from pocket square design - Choose from our premium collection of pocket square patterns to create your personalized silk scarf',
      category: 'Men - Silk Scarf',
      isCustomizable: true
    }
  ]

  // Filter out sold out products - only show available products
  const newArrivalProducts = allProducts.filter(product => !product.status || product.status !== 'Sold Out')

  const handleAddToCart = async (product: any) => {
    setAddingToCart(product.id)
    
    try {
      // Add to cart with default size and color
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        selectedDesign: {
          id: product.id,
          name: product.name,
          image: product.image
        }
      })
      
      // Show success feedback
      setSuccessProduct(product.name)
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

  const categories = [
    { name: 'Silk Scarf Collection', href: '/categories/women/silk-scarves', count: 22 },
    { name: 'Pocket Square New', href: '/categories/men/pocket-square', count: 20 },
    { name: 'Winter Scarf 2025', href: '/categories/women/winter-scarves', count: 0 },
    { name: 'Men Scarf Latest', href: '/categories/men/silk-scarf', count: 6 }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 pt-32">
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
                className="flex items-center text-gray-600 hover:text-black transition-colors px-4 py-2 min-w-[135px]"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="text-center">
                <h1 className="text-lg font-semibold text-gray-900">New Arrivals</h1>
                <p className="text-sm text-gray-500">Latest Collection 2025</p>
              </div>
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


      {/* Category Navigation - Simple Line Format */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="flex items-center justify-center space-x-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-0"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* New Arrival Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-2">Latest Arrivals</h2>
            <p className="text-gray-600">Discover our newest premium fashion pieces</p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Showing {newArrivalProducts.length} products</span>
            <div className="w-px h-5 bg-gray-300"></div>
            <span>New Collection 2025</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {newArrivalProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Status Badges */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  {/* Removed NEW badge and category badge */}
                </div>
                
                {/* Wishlist Button */}
                <button className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110">
                  <svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors min-h-[3rem] overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">({product.rating})</span>
                  <span className="text-gray-400 text-xs ml-2">• {product.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* View Details Link */}
                <Link 
                  href={`/product/${product.id}`}
                  className="w-full text-center text-gray-600 hover:text-amber-600 transition-colors duration-200 font-medium text-sm mb-2 hover:underline"
                >
                  View Details
                </Link>

                {/* Action Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addingToCart === product.id}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 disabled:from-amber-400 disabled:to-amber-500 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm flex items-center justify-center gap-2"
                >
                  {addingToCart === product.id ? (
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
