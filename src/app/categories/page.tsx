'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'

export default function AllCategoriesPage() {
  const allProducts = [
    // Women's Unstiched Collection
    {
      id: 1,
      name: 'EMBROIDERED LAWN VISCOSE SUIT',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/35a55c83-49be-468a-9a74-cec8adf37db6.png',
      rating: 4.8,
      reviews: 189,
      description: 'Beautiful embroidered lawn suit with intricate designs',
      category: 'Women - Unstiched'
    },
    {
      id: 2,
      name: 'EMBROIDERED LAWN VISCOSE SHIRT',
      price: 'Rs.1,299',
      originalPrice: 'Rs.1,800',
      image: '/images/products/35a55c83-49be-468a-9a74-cec8adf37db6.png',
      rating: 4.7,
      reviews: 156,
      description: 'Elegant embroidered lawn shirt for special occasions',
      category: 'Women - Unstiched'
    },
    {
      id: 3,
      name: 'DESIGNER LAWN COLLECTION',
      price: 'Rs.1,199',
      originalPrice: 'Rs.1,600',
      image: '/images/products/35a55c83-49be-468a-9a74-cec8adf37db6.png',
      rating: 4.6,
      reviews: 134,
      description: 'Premium designer lawn collection with modern cuts',
      category: 'Women - Unstiched'
    },

    // Women's 2-Piece Collection
    {
      id: 4,
      name: 'EMBROIDERED LAWN 2-PIECE SUIT',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/35a55c83-49be-468a-9a74-cec8adf37db6.png',
      rating: 4.8,
      reviews: 189,
      description: 'Beautiful embroidered lawn 2-piece suit with matching dupatta',
      category: 'Women - 2-Piece'
    },
    {
      id: 5,
      name: 'DESIGNER 2-PIECE COLLECTION',
      price: 'Rs.1,299',
      originalPrice: 'Rs.1,800',
      image: '/images/products/35a55c83-49be-468a-9a74-cec8adf37db6.png',
      rating: 4.7,
      reviews: 156,
      description: 'Elegant designer 2-piece suits for special occasions',
      category: 'Women - 2-Piece'
    },
    {
      id: 6,
      name: 'CASUAL 2-PIECE SETS',
      price: 'Rs.1,199',
      originalPrice: 'Rs.1,600',
      image: '/images/products/35a55c83-49be-468a-9a74-cec8adf37db6.png',
      rating: 4.6,
      reviews: 134,
      description: 'Comfortable casual 2-piece sets for everyday wear',
      category: 'Women - 2-Piece'
    },

    // Women's Silk Scarves
    {
      id: 7,
      name: 'PISTACHU SILK SCARF',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_4277.png',
      rating: 4.9,
      reviews: 234,
      description: 'Exquisite pistachio green silk scarf with floral patterns',
      category: 'Women - Silk Scarves'
    },
    {
      id: 8,
      name: 'ROSE GARDEN SILK SCARF',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3.png',
      rating: 4.8,
      reviews: 189,
      description: 'Beautiful rose garden silk scarf with elegant designs',
      category: 'Women - Silk Scarves'
    },
    {
      id: 9,
      name: 'OCEAN BREEZE SILK SCARF',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3.png',
      rating: 4.7,
      reviews: 156,
      description: 'Refreshing ocean breeze silk scarf in cool tones',
      category: 'Women - Silk Scarves'
    },

    // Women's Winter Scarves
    {
      id: 10,
      name: 'WARM WINTER SCARF',
      price: 'Rs.1,299',
      originalPrice: 'Rs.1,800',
      image: '/images/products/IMG_4240 2.png',
      rating: 4.8,
      reviews: 167,
      description: 'Cozy winter scarf perfect for cold weather',
      category: 'Women - Winter Scarves'
    },
    {
      id: 11,
      name: 'KNITTED WINTER SCARF',
      price: 'Rs.1,199',
      originalPrice: 'Rs.1,600',
      image: '/images/products/IMG_4240 2.png',
      rating: 4.7,
      reviews: 134,
      description: 'Soft knitted scarf with warm wool blend',
      category: 'Women - Winter Scarves'
    },
    {
      id: 12,
      name: 'FLEECE WINTER SCARF',
      price: 'Rs.999',
      originalPrice: 'Rs.1,400',
      image: '/images/products/IMG_4240 2.png',
      rating: 4.6,
      reviews: 98,
      description: 'Ultra-soft fleece scarf for maximum warmth',
      category: 'Women - Winter Scarves'
    },

    // Men's Pocket Squares
    {
      id: 13,
      name: 'POLKA BLACK POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png',
      rating: 4.9,
      reviews: 189,
      description: 'Classic black pocket square with elegant white polka dots - perfect for formal occasions',
      category: 'Men - Pocket Square'
    },
    {
      id: 14,
      name: 'ROYAL BLACK POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_0054.png',
      rating: 4.8,
      reviews: 156,
      description: 'Luxurious black pocket square with intricate gold and colorful paisley patterns',
      category: 'Men - Pocket Square'
    },
    {
      id: 15,
      name: 'BURGUNDY ELEGANCE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_0050.png',
      rating: 4.7,
      reviews: 142,
      description: 'Rich burgundy pocket square with subtle diagonal stripes for sophisticated appeal',
      category: 'Men - Pocket Square'
    },
    {
      id: 16,
      name: 'COW PRINT ELEGANCE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/58e29f6f-8ab5-45eb-a144-e174e0d30077.png',
      rating: 4.8,
      reviews: 25,
      description: 'Sophisticated cow print pattern with rich brown patches on white - perfect for bold, fashion-forward styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 17,
      name: 'BLACK ROYAL POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-10 at 11.32.54 AM (1).png',
      rating: 4.7,
      reviews: 31,
      description: 'Elegant cream fabric with bold black royal pattern - sophisticated geometric design for luxury styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 18,
      name: 'BLACK POLKA POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-10 at 10.28.46 AM.png',
      rating: 4.7,
      reviews: 32,
      description: 'Elegant black polka dot pattern on cream fabric - timeless classic design perfect for sophisticated styling',
      category: 'Men - Pocket Square'
    },
    {
      id: 19,
      name: 'VINTAGE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-03 at 12.47.32 PM.png',
      rating: 4.8,
      reviews: 29,
      description: 'Elegant vintage design with timeless patterns - perfect for sophisticated styling and classic elegance',
      category: 'Men - Pocket Square'
    },
    {
      id: 26,
      name: 'ROYAL GEOMETRIC POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_5023.png',
      rating: 4.7,
      reviews: 8,
      description: 'Sophisticated geometric pattern with royal elegance - featuring intricate designs perfect for luxury styling and formal occasions',
      category: 'Men - Pocket Square'
    },
    {
      id: 27,
      name: 'VINTAGE CHARM POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/vintage-charm-pocket-square.png',
      rating: 4.8,
      reviews: 178,
      description: 'Light blue paisley pattern with vintage elegance and traditional motifs',
      category: 'Men - Pocket Square'
    },
    {
      id: 21,
      name: 'HARMONY POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/harmony-pocket-square.png',
      rating: 4.9,
      reviews: 203,
      description: 'Rich blue background with vibrant yellow paisley design - harmonious color blend',
      category: 'Men - Pocket Square'
    },
    {
      id: 22,
      name: 'PAISLEY SQUARE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/paisley-square-pocket-square.png',
      rating: 4.8,
      reviews: 165,
      description: 'Black and beige paisley pattern with teardrop motifs and floral elements',
      category: 'Men - Pocket Square'
    },
    {
      id: 23,
      name: 'BLUE CHAIN POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/blue-chain-pocket-square.png',
      rating: 4.9,
      reviews: 187,
      description: 'Dark blue fabric with prominent gold chain pattern and teal accents',
      category: 'Men - Pocket Square'
    },
    {
      id: 24,
      name: 'FLORAL ELEGANCE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/floral-elegance-pocket-square.png',
      rating: 4.7,
      reviews: 134,
      description: 'White fabric with delicate pink roses and green leaves - romantic floral design',
      category: 'Men - Pocket Square'
    },
    {
      id: 25,
      name: 'GEOMETRIC MOSAIC POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/geometric-mosaic-pocket-square.png',
      rating: 4.6,
      reviews: 112,
      description: 'Rich brown fabric with mosaic-like geometric tiles in various brown shades',
      category: 'Men - Pocket Square'
    },
    {
      id: 13,
      name: 'RUBY PEAK POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png',
      rating: 4.9,
      reviews: 8,
      description: 'Stunning ruby red fabric with elegant peak patterns and sophisticated geometric motifs - perfect for luxury styling and premium occasions',
      category: 'Men - Pocket Square'
    },

    // Men's Silk Scarves
    {
      id: 16,
      name: 'CLASSIC NAVY SILK SCARF',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-04 at 1.4 (1) (1).png',
      rating: 4.8,
      reviews: 156,
      description: 'Elegant navy silk scarf perfect for formal occasions',
      category: 'Men - Silk Scarf'
    },
    {
      id: 17,
      name: 'BURGUNDY ELEGANCE SILK SCARF',
      price: 'Rs.1,299',
      originalPrice: 'Rs.1,800',
      image: '/images/products/WhatsApp Image 2024-09-04 at 1.4 (1) (1).png',
      rating: 4.7,
      reviews: 142,
      description: 'Rich burgundy silk scarf with sophisticated appeal',
      category: 'Men - Silk Scarf'
    },
    {
      id: 18,
      name: 'SAGE GREEN SILK SCARF',
      price: 'Rs.1,199',
      originalPrice: 'Rs.1,600',
      image: '/images/products/WhatsApp Image 2024-09-04 at 1.4 (1) (1).png',
      rating: 4.6,
      reviews: 98,
      description: 'Fresh sage green silk scarf for modern style',
      category: 'Men - Silk Scarf'
    }
  ]

  const categories = [
    { name: 'Women - Unstiched', href: '/categories/women/unstiched', count: 3 },
    { name: 'Women - 2-Piece', href: '/categories/women/2-piece', count: 3 },
    { name: 'Women - Silk Scarves', href: '/categories/women/silk-scarves', count: 3 },
    { name: 'Women - Winter Scarves', href: '/categories/women/winter-scarves', count: 3 },
    { name: 'Men - Pocket Square', href: '/categories/men/pocket-square', count: 13 },
    { name: 'Men - Silk Scarf', href: '/categories/men/silk-scarf', count: 3 }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
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
              <button className="p-2 text-gray-600 hover:text-black transition-colors">
                <ShoppingBagIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4 font-poppins">All Categories</h1>
          <p className="text-xl text-gray-600 font-poppins">Discover our complete collection of premium fashion items</p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 font-poppins text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-2 border-transparent hover:border-black/20"
              >
                <h3 className="text-sm font-semibold text-black mb-2">{category.name}</h3>
                <p className="text-xs text-gray-600">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>

        {/* All Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 font-poppins text-center">All Products ({allProducts.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </div>
                  <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100">
                    <HeartIcon className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-black mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          className={`h-3 w-3 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-black">{product.price}</span>
                      <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      OFF
                    </span>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
                    ADD TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}