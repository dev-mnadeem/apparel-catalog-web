'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { findProduct, relatedProducts, sections, type CatalogueProduct } from '@/lib/catalogue'
import { MAX_LINE_QUANTITY } from '@/lib/cart'
import { useCart } from '@/contexts/CartContext'
import { productImage } from '@/lib/image-mapping'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const resolvedParams = use(params)
  const product = findProduct(resolvedParams.id)

  if (!product) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link href="/categories" className="text-blue-600 hover:underline">
            Back to Categories
          </Link>
        </div>
      </div>
    )
  }

  const section = sections[product.section]
  const bagLine = (item: CatalogueProduct) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    originalPrice: item.originalPrice,
    image: item.images[0] ?? '',
    category: `${sections[item.section].department} - ${sections[item.section].label}`,
  })
  const images = product.images.length > 0 ? product.images : ['']
  const activeImage = images[Math.min(selectedImage, images.length - 1)]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  // Fallback to categories page if no previous page
                  window.location.href = '/categories';
                }
              }}
              className="flex items-center text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back
            </button>
            <div className="flex items-center space-x-4">
              <button 
                className={`p-2 transition-colors ${isWishlisted ? 'text-red-500' : 'text-gray-600 hover:text-black'}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <HeartIcon className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <Link href="/cart" aria-label="View bag" className="p-2 text-gray-600 hover:text-black transition-colors">
                <ShoppingBagIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-24">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/categories" className="hover:text-black transition-colors">
            Categories
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/categories/${section.department.toLowerCase()}`} className="hover:text-black transition-colors">
            {section.department}
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={section.href} className="hover:text-black transition-colors">
            {section.label}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Product Image Gallery */}
          <div className="space-y-6">
            {/* Main Hero Image */}
            <div className="relative group bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <img 
                src={productImage(activeImage)}
                alt={product.name}
                className="w-full h-[500px] object-contain bg-gradient-to-br from-gray-50 to-white cursor-zoom-in transition-all duration-500 hover:scale-105"
                onClick={() => {
                  window.open(productImage(activeImage, 1600), '_blank');
                }}
              />
              
              {/* Premium Badges */}
              <div className="absolute top-6 left-6 flex flex-col space-y-2">
                <div className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {(product.style ?? section.label).toUpperCase()}
                </div>
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  PREMIUM QUALITY
                </div>
              </div>
              
              {/* Zoom Indicator */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>Click to Zoom</span>
                </div>
              </div>
            </div>

            {/* Professional Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Views</h3>
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <button
                      key={image + index}
                      type="button"
                      aria-label={`Show view ${index + 1}`}
                      aria-pressed={selectedImage === index}
                      className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                        selectedImage === index ? 'ring-2 ring-black ring-offset-2' : 'hover:ring-2 ring-gray-300'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                        <img
                          src={productImage(image)}
                          alt=""
                          className="w-full h-32 object-contain bg-gradient-to-br from-gray-50 to-white"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Image Controls */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Image Gallery</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>Click to zoom</span>
                  <span>•</span>
                  <span>Use thumbnails to switch views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="pt-4">
              <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {product.rating !== undefined && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon 
                    key={star} 
                    className={`h-5 w-5 ${star <= Math.floor(product.rating ?? 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating} out of 5)</span>
              {product.reviews !== undefined && <span className="text-gray-500">• {product.reviews} reviews</span>}
            </div>
            )}

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-black">{product.price}</span>
              <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              {product.soldOut ? (
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  SOLD OUT
                </span>
              ) : (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  OFF
                </span>
              )}
            </div>

            {/* Product Details */}
            {product.details && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-black">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Styling Suggestions */}
            {product.styling && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-black">Styling Suggestions</h3>
                <ul className="space-y-2">
                  {product.styling.map((style: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {style}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-500">Material:</span>
                <p className="text-gray-800">{product.material}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Care:</span>
                <p className="text-gray-800">{product.care}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Colors:</span>
                <p className="text-gray-800">{product.colors?.join(', ') || 'Standard'}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Sizes:</span>
                <p className="text-gray-800">{product.sizes?.join(', ') || 'Standard'}</p>
              </div>
            </div>

            {/* Quantity and Add to Bag */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span id="quantity-label" className="text-sm font-medium text-gray-700">Quantity:</span>
                <div role="group" aria-labelledby="quantity-label" className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-40"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </button>
                  <span aria-live="polite" className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    disabled={quantity >= MAX_LINE_QUANTITY}
                    className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-40"
                    onClick={() => setQuantity(Math.min(MAX_LINE_QUANTITY, quantity + 1))}
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {product.soldOut ? (
                <button className="w-full bg-gray-400 text-white py-4 px-6 rounded-lg cursor-not-allowed font-medium text-lg" disabled>
                  SOLD OUT
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => addToCart(bagLine(product), quantity)}
                  className="w-full bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
                >
                  ADD TO BAG - {product.price}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4 font-poppins">YOU MAY ALSO LIKE</h2>
          <p className="text-lg text-gray-600 font-poppins">Discover more products you might love</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts(product).map((similarProduct) => (
              <div 
                key={similarProduct.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = `/product/${similarProduct.id}`}
              >
                <div className="relative">
                  <img 
                    src={productImage(similarProduct.images[0])}
                    alt={similarProduct.name}
                    className="w-full h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {(similarProduct.style ?? section.label).toUpperCase()}
                  </div>
                  {similarProduct.soldOut && (
                    <div className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      SOLD OUT
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2 hover:text-gray-700 transition-colors line-clamp-2">
                    {similarProduct.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{similarProduct.description}</p>
                  
                  {similarProduct.rating !== undefined && (
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          className={`h-4 w-4 ${star <= Math.floor(similarProduct.rating ?? 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({similarProduct.rating})</span>
                    {similarProduct.reviews !== undefined && <span className="text-gray-500 text-sm ml-2">• {similarProduct.reviews} reviews</span>}
                  </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-bold text-black">{similarProduct.price}</span>
                      <span className="text-gray-500 line-through">{similarProduct.originalPrice}</span>
                    </div>
                    {similarProduct.soldOut ? (
                      <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-bold">
                        SOLD OUT
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        OFF
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  {similarProduct.soldOut ? (
                    <button className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg cursor-not-allowed font-medium" disabled>
                      SOLD OUT
                    </button>
                  ) : (
                    <button 
                      className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(bagLine(similarProduct));
                      }}
                    >
                      ADD TO BAG
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
