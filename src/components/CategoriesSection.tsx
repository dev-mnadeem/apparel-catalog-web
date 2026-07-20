'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { getProductImageUrl, getHeroImageUrl } from '@/lib/image-mapping'

export default function CategoriesSection() {
  const { addToCart } = useCart()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [bannerIndex, setBannerIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const bannerSlides = [
    {
      id: 1,
      title: 'SILK SCARF',
      subtitle: 'COLLECTION',
      buttonText: 'SHOP NOW',
      image: '/images/products/Untitled design (2).png'
    },
    {
      id: 2,
      title: 'UNSTITCHED & STITCHED',
      subtitle: 'FESTIVE COLLECTION',
      buttonText: 'SHOP NOW',
      image: '/images/products/Summer ENd (3).png'
    },
    {
      id: 3,
      title: 'POCKET SQUARE & SCARF',
      subtitle: 'ELEGANT STYLE',
      buttonText: 'SHOP NOW',
      image: '/images/products/c.png'
    },
    {
      id: 4,
      title: 'SUMMER END',
      subtitle: 'SALE',
      buttonText: 'EXPLORE NOW',
      image: '/images/products/Summer ENd (4).png'
    }
  ]

  const categories = [
    { id: '1', name: 'Silk Scarves', image: getProductImageUrl('/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3 2.png'), slug: 'silk-scarves', description: 'Elegant silk scarf collection', href: '/categories/women/silk-scarves' },
    { id: '2', name: '2 Piece Sets', image: getProductImageUrl('/images/products/WhatsApp Image 2025-06-03 at 6.27.46 PM (1).png'), slug: '2-piece-sets', description: 'Coordinated 2 piece outfits', href: '/categories/women/2-piece' },
    { id: '3', name: 'Pocket Squares', image: getProductImageUrl('/images/products/6f8a7fa7-5640-4d9e-98ca-b6fff2bbf32d.png'), slug: 'pocket-squares', description: 'Sophisticated pocket square collection', href: '/categories/men/pocket-square' },
    { id: '4', name: 'Men Scarves', image: getProductImageUrl('/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png'), slug: 'men-scarves', description: 'Men\'s scarf collection', href: '/categories/men/silk-scarf' },
    { id: '5', name: 'Winter Scarves', image: getProductImageUrl('/images/products/2e549476-4ea2-4556-b22c-5a6db764e717.png'), slug: 'winter-scarves', description: 'Warm winter scarf collection', href: '/categories/women/winter-scarves' }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const nextBanner = () => {
    setBannerIndex((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevBanner = () => {
    setBannerIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const goToBanner = (index: number) => {
    setBannerIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(nextBanner, 5000)
    return () => clearInterval(interval)
  }, [bannerSlides.length])

  const scrollToSlide = (index: number) => {
    setCurrentIndex(index)
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.scrollWidth / categories.length
      carouselRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="pt-16 py-12 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promotional Banner Carousel */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Banner Slide */}
            <div className="relative h-[500px] md:h-[600px] transition-all duration-500 ease-in-out overflow-hidden">
              {/* Background Image */}
              <img
                src={getProductImageUrl(bannerSlides[bannerIndex].image, 1200, 600)}
                alt={bannerSlides[bannerIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Content Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex ${
                bannerSlides[bannerIndex].title === 'SILK SCARF' ? 'justify-start items-end' :
                bannerSlides[bannerIndex].title === 'UNSTITCHED & STITCHED' ? 'justify-end items-end' : 
                bannerSlides[bannerIndex].title === 'POCKET SQUARE & SCARF' ? 'justify-start items-end' :
                bannerSlides[bannerIndex].title === 'SUMMER END' ? 'justify-start items-end' : 'items-center'
              }`}>
                <div className={`text-white px-8 md:px-12 lg:px-16 max-w-2xl ${
                  bannerSlides[bannerIndex].title === 'SILK SCARF' ? 'text-left pb-16 pl-16' :
                  bannerSlides[bannerIndex].title === 'UNSTITCHED & STITCHED' ? 'text-right pb-16 pr-16' : 
                  bannerSlides[bannerIndex].title === 'POCKET SQUARE & SCARF' ? 'text-left pb-16 pl-16' :
                  bannerSlides[bannerIndex].title === 'SUMMER END' ? 'text-left pb-16 pl-16' : ''
                }`}>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-wider">
                    {bannerSlides[bannerIndex].title}
          </h2>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold mb-6 tracking-wide">
                    {bannerSlides[bannerIndex].subtitle}
                  </p>
                  <button 
                    className="bg-white text-black px-6 py-3 rounded-lg font-bold text-base hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => {
                      if (bannerSlides[bannerIndex].title === 'SILK SCARF') {
                        window.open('/categories/women/silk-scarves', '_blank');
                      } else if (bannerSlides[bannerIndex].title === 'UNSTITCHED & STITCHED') {
                        window.open('/categories/women', '_blank');
                      } else if (bannerSlides[bannerIndex].title === 'POCKET SQUARE & SCARF') {
                        window.open('/categories/men/pocket-square', '_blank');
                      } else if (bannerSlides[bannerIndex].title === 'SUMMER END') {
                        window.open('/sale', '_blank');
                      }
                    }}
                  >
                    {bannerSlides[bannerIndex].buttonText}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevBanner}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextBanner}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 z-10"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            
            {/* Banner Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToBanner(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === bannerIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center font-poppins">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
                href={category.href}
                className="group cursor-pointer"
              >
                <div className="relative mb-4">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 rounded-lg"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-black mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="w-16 h-1 bg-black mx-auto group-hover:w-20 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-10 text-center font-poppins">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Product 1 - PISTACHIO */}
            <Link href="/product/52" className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="relative">
                <img 
                  src={getProductImageUrl("/images/products/18215009-b781-47d5-87fe-b22bdf39d1bf.png")} 
                  alt="Pistachio Silk Scarf"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-800 shadow-sm">
                  Pistachio Silk Scarf
                </div>
                <button className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">PISTACHIO</h3>
                <p className="text-sm text-gray-600 mb-3">Silk Scarf Collection</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-black">Rs.1,399</span>
                    <span className="text-sm text-gray-500 line-through">Rs.2,200</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-sm text-gray-600">(4.8)</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 52,
                      name: 'PISTACHIO',
                      price: 'Rs.1,399',
                      image: getProductImageUrl('/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3 2.png'),
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  ADD TO BAG
                </button>
              </div>
            </Link>

            {/* Product 2 - 4 BLOCKS */}
            <Link href="/product/55" className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="relative">
                <img 
                  src={getProductImageUrl("/images/products/IMG_4332.png")} 
                  alt="4 Blocks Silk Scarf"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-800 shadow-sm">
                  4 Blocks Silk Scarf
                </div>
                <button className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">4 BLOCKS</h3>
                <p className="text-sm text-gray-600 mb-3">Silk Scarf Collection</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-black">Rs.1,399</span>
                    <span className="text-sm text-gray-500 line-through">Rs.2,200</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-sm text-gray-600">(4.7)</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 55,
                      name: '4 BLOCKS',
                      price: 'Rs.1,399',
                      image: getProductImageUrl('/images/products/IMG_4332.png'),
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  ADD TO BAG
                </button>
              </div>
            </Link>

            {/* Product 3 - PINK BLOCK */}
            <Link href="/product/56" className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="relative">
                <img 
                  src={getProductImageUrl("/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png")} 
                  alt="Pink Block Silk Scarf"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-800 shadow-sm">
                  Pink Block Silk Scarf
                </div>
                <button className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">PINK BLOCK</h3>
                <p className="text-sm text-gray-600 mb-3">Silk Scarf Collection</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-black">Rs.1,399</span>
                    <span className="text-sm text-gray-500 line-through">Rs.2,200</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-sm text-gray-600">(4.9)</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 56,
                      name: 'PINK BLOCK',
                      price: 'Rs.1,399',
                      image: getProductImageUrl('/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png'),
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  ADD TO BAG
                </button>
              </div>
            </Link>

            {/* Product 4 - BLACK CHAIR */}
            <Link href="/product/60" className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="relative">
                <img 
                  src={getProductImageUrl("/images/products/WhatsApp Image 2025-08-01 at 1.04.04 AM.png")} 
                  alt="Black Chair Silk Scarf"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-800 shadow-sm">
                  Black Chair Silk Scarf
                </div>
                <button className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">BLACK CHAIR</h3>
                <p className="text-sm text-gray-600 mb-3">Silk Scarf Collection</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-black">Rs.1,399</span>
                    <span className="text-sm text-gray-500 line-through">Rs.2,200</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="text-sm text-gray-600">(4.6)</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 60,
                      name: 'BLACK CHAIR',
                      price: 'Rs.1,399',
                      image: getProductImageUrl('/images/products/WhatsApp Image 2025-08-01 at 1.04.04 AM.png'),
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  ADD TO BAG
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Custom scrollbar hiding */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
      
      {/* No gap - sections directly connected */}
      
      {/* Negative margin to pull Discover section up by 100px */}
      <div className="-mb-24"></div>
    </section>
  )
}