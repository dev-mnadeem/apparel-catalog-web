'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    // Simulate API call
    setTimeout(() => {
      setIsAddingToCart(false)
      // Add to cart logic here
    }, 1000)
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // Wishlist logic here
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Wishlist button */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
      >
        {isWishlisted ? (
          <HeartIconSolid className="h-5 w-5 text-red-500" />
        ) : (
          <HeartIcon className="h-5 w-5 text-gray-600" />
        )}
      </button>

      {/* Product Image */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-t-lg">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={0}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            priority={false}
            style={{ height: 'auto' }}
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          
          {product.salePrice && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
              {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart || !product.inStock}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAddingToCart ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Adding...
            </>
          ) : (
            <>
              <ShoppingCartIcon className="h-4 w-4" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </>
          )}
        </button>

        {/* Quick Info */}
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <span>Available in {product.sizes.length} sizes</span>
          <span>{product.colors.length} colors</span>
        </div>
      </div>
    </div>
  )
}
