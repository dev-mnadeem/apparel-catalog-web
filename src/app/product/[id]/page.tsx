'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// Define proper types for products
interface Product {
  id: number
  name: string
  price: string
  originalPrice: string
  image: string
  image2?: string
  image3?: string
  rating: number
  reviews: number
  description: string
  category: string
  details?: string[]
  styling?: string[]
  sizes?: string[]
  colors?: string[]
  material?: string
  care?: string
  status?: string
  reviewDetails?: Array<{
    name: string
    rating: number
    comment: string
  }>
}

// Product data - you can move this to a separate file later
const pocketSquares = [
  {
    id: 1,
    name: 'ELEGANT TEXTURED POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png',
    image2: '/images/products/IMG_0054.png',
    image3: '/images/products/IMG_0050.png',
    rating: 4.8,
    reviews: 28,
    description: 'Sophisticated pocket square with rich texture and elegant finish - perfect for formal occasions and business attire',
    category: 'Classic',
    details: [
      'Premium mosaic pattern',
      'Warm earth tones',
      'Luxury fabric quality',
      'Perfect for formal events',
      'Sophisticated design'
    ],
    styling: [
      'Pairs beautifully with navy or charcoal suits',
      'Great for weddings and formal occasions',
      'Complements gold or brown accessories',
      'Perfect for autumn and winter styling',
      'Ideal for luxury fashion enthusiasts'
    ],
    sizes: ['Standard'],
    colors: ['Brown, Beige, Gold'],
    material: 'Premium Silk Blend',
    care: 'Dry clean recommended'
  },
  {
    id: 2,
    name: 'COW PRINT ELEGANCE POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/58e29f6f-8ab5-45eb-a144-e174e0d30077.png',
    image2: '/images/products/IMG_0033.png',
    image3: '/images/products/IMG_0034.png',
    rating: 4.8,
    reviews: 25,
    description: 'Sophisticated cow print pattern with rich brown patches on white - perfect for bold, fashion-forward styling',
    category: 'Pattern',
    details: [
      'Bold cow print design',
      'Statement piece',
      'Unique pattern',
      'Eye-catching style',
      'Perfect for fashion-forward individuals'
    ],
    styling: [
      'Pairs perfectly with brown or beige suits',
      'Great for casual business meetings',
      'Complements earth-tone accessories',
      'Perfect for autumn/winter styling',
      'Ideal for creative professionals'
    ],
    sizes: ['Standard'],
    colors: ['White with Brown Cow Print'],
    material: 'Premium Fabric',
    care: 'Dry clean recommended'
  },
  {
    id: 3,
    name: 'BLACK ROYAL POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/WhatsApp Image 2024-09-10 at 11.32.54 AM (1).png',
    image2: '/images/products/WhatsApp Image 2024-09-10 at 10.43.59 AM (1).png',
    image3: '/images/products/WhatsApp Image 2024-09-04 at 1.48.08 PM (1).png',
    rating: 4.7,
    reviews: 31,
    description: 'Elegant cream fabric with bold black royal pattern - sophisticated geometric design for luxury styling',
    category: 'Luxury',
    details: [
      'Modern geometric design',
      'Chain link pattern',
      'Contemporary style',
      'Professional yet trendy',
      'Perfect for modern professionals'
    ],
    styling: [
      'Pairs beautifully with navy or charcoal suits',
      'Great for business meetings and formal events',
      'Complements modern minimalist accessories',
      'Perfect for contemporary professionals',
      'Ideal for fashion-forward individuals'
    ],
    sizes: ['Standard'],
    colors: ['Cream with Black Chain Pattern'],
    material: 'Premium Fabric',
    care: 'Dry clean recommended'
  },
  {
    id: 4,
    name: 'BLACK POLKA POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/WhatsApp Image 2024-09-10 at 10.28.46 AM.png',
    image2: '/images/products/WhatsApp Image 2024-09-10 at 10.34.51 AM.png',
    image3: '/images/products/IMG_0081.png',
    rating: 4.7,
    reviews: 32,
    description: 'Elegant black polka dot pattern on cream fabric - timeless classic design perfect for sophisticated styling',
    category: 'Classic',
    details: [
      'Classic polka dot pattern',
      'Black dots on cream background',
      'Timeless design',
      'Perfect for formal occasions',
      'Versatile styling options'
    ],
    styling: [
      'Pairs beautifully with black or navy suits',
      'Great for business meetings and formal events',
      'Complements classic accessories',
      'Perfect for traditional professionals',
      'Ideal for elegant, understated style'
    ],
    sizes: ['Standard'],
    colors: ['Cream with Black Polka Dots'],
    material: 'Premium Cotton Blend',
    care: 'Machine wash cold'
  },
  {
    id: 7,
    name: 'VINTAGE POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/WhatsApp Image 2024-09-03 at 12.47.32 PM.png',
    image2: '/images/products/IMG_0065.png',
    image3: '/images/products/WhatsApp Image 2024-09-03 at 12.47.20 PM.png',
    rating: 4.8,
    reviews: 29,
    description: 'Elegant vintage design with timeless patterns - perfect for sophisticated styling and classic elegance',
    category: 'Classic',
    status: 'Sold Out',
    details: [
      'Vintage design patterns',
      'Timeless elegance',
      'Classic styling',
      'Perfect for formal occasions',
      'Sophisticated appearance'
    ],
    styling: [
      'Pairs beautifully with classic suits',
      'Great for traditional events',
      'Complements vintage accessories',
      'Perfect for formal professionals',
      'Ideal for elegant occasions'
    ],
    sizes: ['Standard'],
    colors: ['Vintage Pattern'],
    material: 'Premium Fabric',
    care: 'Dry clean recommended'
  },
  {
    id: 5,
    name: 'CLOUDY SKY POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/IMG_0041.HEIC',
    image2: '/images/products/IMG_0045.HEIC',
    image3: '/images/products/IMG_0056.HEIC',
    rating: 4.7,
    reviews: 145,
    description: 'Beautiful blue fabric with cloudy, mottled pattern - serene sky-inspired design',
    category: 'Colorful',
    details: [
      'Sky-inspired design',
      'Cloudy mottled pattern',
      'Serene blue tones',
      'Unique texture',
      'Perfect for creative professionals'
    ],
    sizes: ['Standard'],
    colors: ['Blue with Cloud Pattern'],
    material: 'Premium Fabric',
    care: 'Dry clean recommended'
  },

  {
    id: 9,
    name: 'HARMONY POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/IMG_7774.png',
    image2: '/images/products/IMG_0029.png',
    image3: '/images/products/IMG_0031.png',
    rating: 4.8,
    reviews: 6,
    description: 'Elegant cream fabric with sophisticated geometric patterns and luxury texture - perfect for modern professional styling and premium occasions',
    category: 'Luxury',
    details: [
      'Premium cream fabric',
      'Sophisticated geometric patterns',
      'Luxury texture finish',
      'Modern design elements',
      'Perfect for premium events'
    ],
    styling: [
      'Complements dark suits beautifully',
      'Ideal for modern business meetings',
      'Pairs with gold or silver accessories',
      'Perfect for contemporary professionals',
      'Great for sophisticated urban style'
    ],
    sizes: ['Standard'],
    colors: ['Cream with Geometric Patterns'],
    material: 'Premium Silk Blend',
    care: 'Dry clean recommended'
  },
  {
    id: 10,
    name: 'PAISLEY SQUARE POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/WhatsApp Image 2024-09-03 at 12.47.31 PM (1).png',
    image2: '/images/products/WhatsApp Image 2024-09-03 at 12.47.30 PM (1).png',
    rating: 4.8,
    reviews: 6,
    description: 'Elegant paisley pattern with sophisticated motifs and luxury texture - perfect for premium styling and formal occasions',
    category: 'Luxury',
    status: 'Sold Out',
    details: [
      'Premium paisley fabric',
      'Sophisticated paisley motifs',
      'Luxury texture finish',
      'Traditional design elements',
      'Perfect for premium events'
    ],
    styling: [
      'Complements dark suits beautifully',
      'Ideal for luxury events and formal occasions',
      'Pairs with gold or silver accessories',
      'Perfect for high-end professionals',
      'Great for sophisticated individuals'
    ],
    sizes: ['Standard'],
    colors: ['Paisley Pattern with Luxury Texture'],
    material: 'Premium Silk Blend',
    care: 'Dry clean recommended'
  },
  {
    id: 11,
    name: 'BLUE CHAIN POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/WhatsApp Image 2024-09-10 at 11.41.04 AM.png',
    image2: '/images/products/IMG_0056.png',
    image3: '/images/products/IMG_0057.png',
    rating: 4.8,
    reviews: 6,
    description: 'Elegant blue fabric with sophisticated chain-link patterns and luxury texture - perfect for modern professional styling and premium occasions',
    category: 'Luxury',
    details: [
      'Premium blue fabric',
      'Sophisticated chain-link patterns',
      'Luxury texture finish',
      'Modern geometric design',
      'Perfect for premium events'
    ],
    styling: [
      'Complements dark suits beautifully',
      'Ideal for modern business meetings',
      'Pairs with silver or gold accessories',
      'Perfect for contemporary professionals',
      'Great for sophisticated urban style'
    ],
    sizes: ['Standard'],
    colors: ['Blue with Chain-Link Patterns'],
    material: 'Premium Silk Blend',
    care: 'Dry clean recommended'
  },
  {
    id: 10,
    name: 'FLORAL ELEGANCE POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/floral-elegance-pocket-square.png',
    rating: 4.7,
    reviews: 134,
    description: 'White fabric with delicate pink roses and green leaves - romantic floral design',
    category: 'Luxury',
    details: [
      'Delicate pink roses',
      'Green leaf accents',
      'Romantic floral design',
      'White background',
      'Perfect for romantic occasions'
    ],
    sizes: ['Standard'],
    colors: ['White with Pink Roses'],
    material: 'Premium Fabric',
    care: 'Dry clean recommended'
  },

  {
    id: 12,
    name: 'ROYAL GEOMETRIC POCKET SQUARE',
    price: 'Rs.1,399',
    originalPrice: 'Rs.2,000',
    image: '/images/products/IMG_5023.png',
    image2: '/images/products/IMG_0067.png',
    image3: '/images/products/IMG_0068.png',
    rating: 4.7,
    reviews: 6,
    description: 'Sophisticated geometric pattern with royal elegance - featuring intricate designs perfect for luxury styling and formal occasions',
    category: 'Luxury',
    details: [
      'Royal geometric pattern',
      'Intricate design elements',
      'Luxury fabric quality',
      'Perfect for formal events',
      'Sophisticated appearance'
    ],
    styling: [
      'Pairs beautifully with dark suits',
      'Great for luxury events and formal occasions',
      'Complements premium accessories',
      'Perfect for high-end professionals',
      'Ideal for sophisticated individuals'
    ],
    sizes: ['Standard'],
    colors: ['Geometric Pattern'],
    material: 'Premium Silk Blend',
    care: 'Dry clean recommended'
  },
      {
      id: 13,
      name: 'RUBY PEAK POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png',
      image2: '/images/products/IMG_0089.png',
      image3: '/images/products/IMG_0091.png',
      rating: 4.9,
      reviews: 7,
      description: 'Stunning ruby red fabric with elegant peak patterns and sophisticated geometric motifs - perfect for luxury styling and premium occasions',
      category: 'Luxury',
      details: [
        'Ruby red premium fabric',
        'Elegant peak patterns',
        'Sophisticated geometric motifs',
        'Luxury craftsmanship',
        'Perfect for premium events'
      ],
      styling: [
        'Complements dark suits beautifully',
        'Ideal for luxury events and formal occasions',
        'Pairs with premium accessories',
        'Perfect for high-end professionals',
        'Great for sophisticated individuals'
      ],
      sizes: ['Standard'],
      colors: ['Ruby Red with Peak Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 14,
      name: 'GOLDEN HARMONY POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/6b8867a9-d34e-4246-a710-b7ecb37167c9.png',
      image2: '/images/products/IMG_0027.png',
      image3: '/images/products/IMG_0050.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant golden beige fabric with sophisticated geometric patterns and luxury texture - perfect for premium styling and formal occasions',
      category: 'Luxury',
      details: [
        'Golden beige premium fabric',
        'Sophisticated geometric patterns',
        'Luxury texture finish',
        'Premium craftsmanship',
        'Perfect for luxury events'
      ],
      styling: [
        'Complements dark and light suits beautifully',
        'Ideal for luxury events and formal occasions',
        'Pairs with gold or silver accessories',
        'Perfect for high-end professionals',
        'Great for sophisticated individuals'
      ],
      sizes: ['Standard'],
      colors: ['Golden Beige with Geometric Patterns'],
      material: 'Premium Silk Blend',
            care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 15,
      name: 'RED ROSE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/9da23af1-dc33-4fe7-b708-1674e07f0753.png',
      image2: '/images/products/IMG_0084.png',
      image3: '/images/products/IMG_0088.png',
      rating: 4.7,
      reviews: 5,
      description: 'Elegant silver-gray fabric with sophisticated mist-like patterns and luxury texture - perfect for modern professional styling and premium occasions',
      category: 'Luxury',
      details: [
        'Silver-gray premium fabric',
        'Mist-like sophisticated patterns',
        'Luxury texture finish',
        'Modern geometric motifs',
        'Perfect for premium events'
      ],
      styling: [
        'Complements dark suits beautifully',
        'Ideal for modern business meetings',
        'Pairs with silver or platinum accessories',
        'Perfect for contemporary professionals',
        'Great for sophisticated urban style'
      ],
      sizes: ['Standard'],
      colors: ['Silver Gray with Mist Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 16,
      name: 'CLOUDY POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_7723.png',
      image2: '/images/products/IMG_0037.png',
      image3: '/images/products/IMG_0092.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant cloudy gray fabric with sophisticated mist-like patterns and luxury texture - perfect for modern professional styling and premium occasions',
      category: 'Luxury',
      details: [
        'Cloudy gray premium fabric',
        'Mist-like sophisticated patterns',
        'Luxury texture finish',
        'Modern geometric motifs',
        'Perfect for premium events'
      ],
      styling: [
        'Complements dark suits beautifully',
        'Ideal for modern business meetings',
        'Pairs with silver or platinum accessories',
        'Perfect for contemporary professionals',
        'Great for sophisticated urban style'
      ],
      sizes: ['Standard'],
      colors: ['Cloudy Gray with Mist Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 17,
      name: 'RHINE STONE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-03 at 12.47.31 PM (2).png',
      image2: '/images/products/WhatsApp Image 2024-09-10 at 8.59.37 AM.png',
      image3: '/images/products/IMG_0071.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant royal blue fabric with sophisticated geometric patterns and luxury texture - perfect for modern professional styling and premium occasions',
      category: 'Luxury',
      details: [
        'Royal blue premium fabric',
        'Sophisticated geometric patterns',
        'Luxury texture finish',
        'Modern design elements',
        'Perfect for premium events'
      ],
      styling: [
        'Complements dark suits beautifully',
        'Ideal for modern business meetings',
        'Pairs with silver or gold accessories',
        'Perfect for contemporary professionals',
        'Great for sophisticated urban style'
      ],
      sizes: ['Standard'],
      colors: ['Beige with Black Geometric Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 18,
      name: 'WILD GRACE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/WhatsApp Image 2024-09-03 at 12.47.31 PM.png',
      image2: '/images/products/IMG_0063.png',
      image3: '/images/products/IMG_0064.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant tiger print fabric with wild grace patterns and luxury texture - perfect for bold, fashion-forward styling and premium occasions',
      category: 'Pattern',
      details: [
        'Tiger print premium fabric',
        'Wild grace patterns',
        'Luxury texture finish',
        'Bold design elements',
        'Perfect for statement pieces'
      ],
      styling: [
        'Complements dark suits beautifully',
        'Ideal for bold fashion statements',
        'Pairs with gold or brown accessories',
        'Perfect for creative professionals',
        'Great for fashion-forward individuals'
      ],
      sizes: ['Standard'],
      colors: ['Tiger Print with Wild Grace Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 19,
      name: 'WHITE LILLY POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/56bac310-5829-4b2c-8d7b-db59268728aa.png',
      image2: '/images/products/IMG_0074.png',
      image3: '/images/products/IMG_0075.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant white fabric with sophisticated lilly patterns and luxury texture - perfect for pure, elegant styling and premium occasions',
      category: 'Classic',
      details: [
        'Pure white premium fabric',
        'Sophisticated lilly patterns',
        'Luxury texture finish',
        'Elegant design elements',
        'Perfect for pure elegance'
      ],
      styling: [
        'Complements all suit colors beautifully',
        'Ideal for formal and wedding events',
        'Pairs with any color accessories',
        'Perfect for traditional professionals',
        'Great for elegant, understated style'
      ],
      sizes: ['Standard'],
      colors: ['Pure White with Lilly Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 20,
      name: 'MAROONISH POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/b09f1ed7-ea68-4c47-b7c3-985c7de7d9fc.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant maroon fabric with sophisticated patterns and luxury texture - perfect for rich, warm styling and premium occasions',
      category: 'Luxury',
      details: [
        'Maroon premium fabric',
        'Sophisticated patterns',
        'Luxury texture finish',
        'Rich color design',
        'Perfect for warm elegance'
      ],
      styling: [
        'Complements dark suits beautifully',
        'Ideal for autumn and winter events',
        'Pairs with gold or brown accessories',
        'Perfect for luxury professionals',
        'Great for sophisticated, warm style'
      ],
      sizes: ['Standard'],
      colors: ['Maroon with Sophisticated Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 21,
      name: 'DARK MOUNTAIN POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_0025.png',
      image2: '/images/products/IMG_0045.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant dark fabric with sophisticated mountain patterns and luxury texture - perfect for bold, dramatic styling and premium occasions',
      category: 'Luxury',
      details: [
        'Dark premium fabric',
        'Sophisticated mountain patterns',
        'Luxury texture finish',
        'Bold design elements',
        'Perfect for dramatic elegance'
      ],
      styling: [
        'Complements light and dark suits beautifully',
        'Ideal for bold fashion statements',
        'Pairs with silver or gold accessories',
        'Perfect for adventurous professionals',
        'Great for sophisticated, dramatic style'
      ],
      sizes: ['Standard'],
      colors: ['Dark with Mountain Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 22,
      name: 'SKY BLUE HARMONY POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/IMG_0041.png',
      image2: '/images/products/IMG_0040.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant sky blue fabric with harmonious patterns and luxury texture - perfect for serene, calming styling and premium occasions',
      category: 'Colorful',
      details: [
        'Sky blue premium fabric',
        'Harmonious patterns',
        'Luxury texture finish',
        'Serene design elements',
        'Perfect for calming elegance'
      ],
      styling: [
        'Complements dark and light suits beautifully',
        'Ideal for spring and summer events',
        'Pairs with silver or white accessories',
        'Perfect for creative professionals',
        'Great for sophisticated, peaceful style'
      ],
      sizes: ['Standard'],
      colors: ['Sky Blue with Harmonious Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    
    // New Product
    {
      id: 23,
      name: 'ROYAL ELEGANCE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: '/images/products/f49b55bb-422d-4673-b807-927aa70d2441 2.png',
      image2: '/images/products/IMG_0062 (1).png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant royal fabric with sophisticated patterns and luxury texture - perfect for regal, premium styling and formal occasions',
      category: 'Luxury',
      details: [
        'Royal premium fabric',
        'Sophisticated patterns',
        'Luxury texture finish',
        'Regal design elements',
        'Perfect for royal elegance'
      ],
      styling: [
        'Complements dark suits beautifully',
        'Ideal for luxury events and formal occasions',
        'Pairs with gold or silver accessories',
        'Perfect for high-end professionals',
        'Great for sophisticated, regal style'
      ],
      sizes: ['Standard'],
      colors: ['Royal with Sophisticated Patterns'],
      material: 'Premium Silk Blend',
      care: 'Dry clean recommended'
    },
    {
      id: 24,
      name: 'RHINE STONE SCARF',
      price: 'Rs.1,499',
      originalPrice: 'Rs.2,200',
      image: '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png',
      image2: '/images/products/WhatsApp Image 2024-09-04 at 1.48.06 PM (1).png',
      image3: '/images/products/IMG_0071.png',
      rating: 4.9,
      reviews: 8,
      description: 'Exquisite rhinestone-embellished silk scarf with premium craftsmanship - featuring elegant stone details and luxurious texture perfect for sophisticated styling and special occasions',
      category: 'Men - Silk Scarf',
      details: [
        'Premium silk fabric with rhinestone embellishments',
        'Elegant stone details and patterns',
        'Luxury texture finish',
        'Sophisticated design elements',
        'Perfect for special occasions'
      ],
      styling: [
        'Complements formal wear beautifully',
        'Ideal for luxury events and business occasions',
        'Pairs with gold or silver accessories',
        'Perfect for sophisticated professionals',
        'Great for making a statement'
      ],
      sizes: ['50" x 8"'],
      colors: ['Silk with Rhinestone Details'],
      material: 'Premium Silk with Rhinestone Embellishments',
      care: 'Dry clean recommended',
      reviewDetails: [
        { name: 'Ahmed K.', rating: 5, comment: 'Absolutely stunning scarf! The rhinestone details are so elegant and the quality is exceptional.' },
        { name: 'Fatima R.', rating: 5, comment: 'My husband loves this scarf. The rhinestones add such a luxurious touch to his formal wear.' },
        { name: 'Omar S.', rating: 4, comment: 'Beautiful design and premium quality. Perfect for special occasions and business events.' },
        { name: 'Noor A.', rating: 5, comment: 'The scarf is gorgeous! The rhinestone embellishments are perfectly placed and very sophisticated.' },
        { name: 'Yusuf K.', rating: 4, comment: 'Great quality silk and the rhinestones are securely attached. Very elegant design.' },
        { name: 'Zara M.', rating: 5, comment: 'This scarf is a showstopper! Perfect for making a statement at formal events.' },
        { name: 'Hassan L.', rating: 5, comment: 'Exceptional craftsmanship. The rhinestones sparkle beautifully and the silk feels luxurious.' },
        { name: 'Aisha N.', rating: 4, comment: 'Love the sophisticated design. Perfect for business meetings and special occasions.' }
      ]
    }
  ]

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const resolvedParams = use(params)
  const product: Product | undefined = pocketSquares.find(p => p.id === parseInt(resolvedParams.id))

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
              <button className="p-2 text-gray-600 hover:text-black transition-colors">
                <ShoppingBagIcon className="h-6 w-6" />
              </button>
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
          <Link href="/categories/men" className="hover:text-black transition-colors">
            Men
          </Link>
          <span className="text-gray-400">/</span>
          {product.category === 'Men - Silk Scarf' ? (
            <Link href="/categories/men/silk-scarf" className="hover:text-black transition-colors">
              Silk Scarf
            </Link>
          ) : (
            <Link href="/categories/men/pocket-square" className="hover:text-black transition-colors">
              Pocket Square
            </Link>
          )}
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
                src={selectedImage === 0 ? product.image : 
                     selectedImage === 1 ? product.image2 || product.image : 
                     product.image3 || product.image}
                alt={product.name}
                className="w-full h-[500px] object-contain bg-gradient-to-br from-gray-50 to-white cursor-zoom-in transition-all duration-500 hover:scale-105"
                onClick={() => {
                  const imageUrl = selectedImage === 0 ? product.image : 
                                  selectedImage === 1 ? product.image2 || product.image : 
                                  product.image3 || product.image;
                  window.open(imageUrl, '_blank');
                }}
              />
              
              {/* Premium Badges */}
              <div className="absolute top-6 left-6 flex flex-col space-y-2">
                <div className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {product.category.toUpperCase()}
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
            {product.image2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Views</h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Main View Thumbnail */}
                  <div 
                    className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedImage === 0 ? 'ring-2 ring-black ring-offset-2' : 'hover:ring-2 ring-gray-300'
                    }`}
                    onClick={() => setSelectedImage(0)}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                      <img 
                        src={product.image} 
                        alt={`${product.name} - Main View`}
                        className="w-full h-32 object-contain bg-gradient-to-br from-gray-50 to-white"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-sm bg-black/70 px-3 py-1 rounded-full">
                        Main View
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-black to-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      1
                    </div>
                  </div>

                  {/* Second View Thumbnail */}
                  <div 
                    className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedImage === 1 ? 'ring-2 ring-black ring-offset-2' : 'hover:ring-2 ring-gray-300'
                    }`}
                    onClick={() => setSelectedImage(1)}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                      <img 
                        src={product.image2 || product.image} 
                        alt={`${product.name} - View 2`}
                        className="w-full h-32 object-contain bg-gradient-to-br from-gray-50 to-white"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-sm bg-black/70 px-3 py-1 rounded-full">
                        View 2
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-black to-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      2
                    </div>
                  </div>

                  {/* Third View Thumbnail */}
                  <div 
                    className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedImage === 2 ? 'ring-2 ring-black ring-offset-2' : 'hover:ring-2 ring-gray-300'
                    }`}
                    onClick={() => setSelectedImage(2)}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                      <img 
                        src={product.image3 || product.image} 
                        alt={`${product.name} - View 3`}
                        className="w-full h-32 object-contain bg-gradient-to-br from-gray-50 to-white"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-sm bg-black/70 px-3 py-1 rounded-full">
                        View 3
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-black to-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      3
                    </div>
                  </div>
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

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon 
                    key={star} 
                    className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating} out of 5)</span>
              <span className="text-gray-500">• {product.reviews} reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-black">{product.price}</span>
              <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              {product.status === 'Sold Out' ? (
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
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    className="p-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                  <button 
                    className="p-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {product.status === 'Sold Out' ? (
                <button className="w-full bg-gray-400 text-white py-4 px-6 rounded-lg cursor-not-allowed font-medium text-lg" disabled>
                  SOLD OUT
                </button>
              ) : (
                <button className="w-full bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
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
          {pocketSquares
            .filter(similarProduct => similarProduct.id !== product.id && similarProduct.category === product.category)
            .slice(0, 4)
            .map((similarProduct) => (
              <div 
                key={similarProduct.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = `/product/${similarProduct.id}`}
              >
                <div className="relative">
                  <img 
                    src={similarProduct.image} 
                    alt={similarProduct.name}
                    className="w-full h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {similarProduct.category.toUpperCase()}
                  </div>
                  {similarProduct.status === 'Sold Out' && (
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
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          className={`h-4 w-4 ${star <= Math.floor(similarProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({similarProduct.rating})</span>
                    <span className="text-gray-500 text-sm ml-2">• {similarProduct.reviews} reviews</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-bold text-black">{similarProduct.price}</span>
                      <span className="text-gray-500 line-through">{similarProduct.originalPrice}</span>
                    </div>
                    {similarProduct.status === 'Sold Out' ? (
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
                  {similarProduct.status === 'Sold Out' ? (
                    <button className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg cursor-not-allowed font-medium" disabled>
                      SOLD OUT
                    </button>
                  ) : (
                    <button 
                      className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to bag functionality
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
