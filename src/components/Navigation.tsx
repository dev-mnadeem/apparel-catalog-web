'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  PhoneIcon,
  StarIcon,
  XMarkIcon,
  GiftIcon,
  BoltIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'

// Custom Truck Icon Component
const CustomTruckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    {/* Simple truck body */}
    <path d="M2 8h14v8h-1c0 1.66-1.34 3-3 3s-3-1.34-3-3H6c0 1.66-1.34 3-3 3s-3-1.34-3-3V8z"/>
    
    {/* Truck cabin */}
    <path d="M2 8h8v4H2V8z"/>
    
    {/* Wheels */}
    <circle cx="6" cy="18" r="2"/>
    <circle cx="18" cy="18" r="2"/>
    
    {/* Front window */}
    <rect x="3" y="9" width="2" height="2" fill="white"/>
    
    {/* Side window */}
    <rect x="5" y="9" width="2" height="2" fill="white"/>
  </svg>
)
import { useCart } from '@/contexts/CartContext'
import { SHOW_SIMULATED_ACTIVITY } from '@/lib/socialProof';

// Sample customer names for ratings
const customerNames = [
  'Sarah A.', 'Ayesha K.', 'Hiba M.', 'Saad R.', 'Usman A.',
  'Fatima S.', 'Ahmed H.', 'Zara N.', 'Hassan M.', 'Amina F.',
  'Layla B.', 'Noor K.', 'Mariam S.', 'Yusuf M.', 'Aisha R.',
  'Omar K.', 'Nadia H.', 'Khalid S.', 'Sana A.', 'Ali R.',
  'Hana M.', 'Bilal K.', 'Yasmin S.', 'Tariq A.', 'Leila H.'
];

const Navigation = () => {
  const { state } = useCart()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentRating, setCurrentRating] = useState({ name: '', rating: 0 })
  const [showUnifiedBar, setShowUnifiedBar] = useState(true)

  // Generate random customer rating
  const generateRandomRating = () => {
    // Invented reviewers with an invented score. Disabled unless
    // NEXT_PUBLIC_SHOW_SIMULATED_ACTIVITY=true — see src/lib/socialProof.ts.
    if (!SHOW_SIMULATED_ACTIVITY) return { name: '', rating: 0 };
    const randomName = customerNames[Math.floor(Math.random() * customerNames.length)];
    const randomRating = 4 + Math.random(); // Rating between 4.0 and 5.0
    setCurrentRating({ name: randomName, rating: randomRating });
  };

  // Update rating every 3 seconds
  useEffect(() => {
    generateRandomRating(); // Set initial rating
    const interval = setInterval(generateRandomRating, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page or perform search
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { 
      name: 'NEW ARRIVALS', 
      href: '/new-arrivals',
      subcategories: [
        { name: 'Silk Scarf Collection', href: '/new-arrivals/silk-scarves' },
        { name: 'Pocket Square New', href: '/new-arrivals/pocket-squares' },
        { name: 'Winter Scarf 2025', href: '/new-arrivals/winter-scarves' },
        { name: 'Men Scarf Latest', href: '/new-arrivals/men-scarves' }
      ]
    },
    { 
      name: 'WOMEN', 
      href: '/categories/women',
      subcategories: [
        { name: 'Unstiched', href: '/categories/women/unstiched' },
        { name: '2 piece', href: '/categories/women/2-piece' },
        { name: 'Silk Scarves', href: '/categories/women/silk-scarves' },
        { name: 'Winter Scarves', href: '/categories/women/winter-scarves' }
      ]
    },
    { 
      name: 'MEN', 
      href: '/categories/men',
      subcategories: [
        { name: 'Pocket Square', href: '/categories/men/pocket-square' },
        { name: 'Silk Scarf', href: '/categories/men/silk-scarf' },
      ]
    },
    { name: 'TRENDING', href: '/trending' },
    { name: 'SPECIAL DISCOUNT OFFERS', href: '/sale', highlight: true },
  ]

  const trendingSearches = [
    'Trendy Dresses',
    'Casual Wear',
    'Formal Shirts',
    'Designer Bags',
    'Winter Collection',
    'Summer Sale',
    'Athleisure',
    'Evening Gowns'
  ]

  return (
    <header className="fixed top-0 z-[100] bg-white w-full">
      {/* Unified Top Bar - Merged Promotional Banner and Header */}
      {showUnifiedBar && (
        <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 border-b border-amber-500/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 text-xs">
            {/* Left Side - Shipping & Dispatch Info */}
            <div className="flex items-center space-x-6">
              {/* Free Shipping */}
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="p-1.5 bg-blue-300/40 rounded-full backdrop-blur-sm group-hover:bg-blue-300/60 transition-all duration-300">
                    <CustomTruckIcon className="h-3.5 w-3.5 text-blue-100 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"></div>
                </div>
                <span className="font-poppins font-semibold tracking-wide">
                  <span className="text-white font-bold">Free Shipping</span>
                  <span className="text-white/90"> on orders above </span>
                  <span className="text-white font-bold">3000</span>
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-4 bg-gray-300"></div>

              {/* Same Day Dispatch */}
              <div className="hidden lg:flex items-center space-x-3 group">
                <div className="p-1.5 bg-yellow-300/50 rounded-full backdrop-blur-sm group-hover:bg-yellow-300/70 transition-all duration-300">
                  <span className="text-xl text-yellow-100 font-bold">⚡</span>
                </div>
                <span className="font-poppins font-semibold tracking-wide">
                  <span className="text-white font-bold">Same Day</span>
                  <span className="text-white/90"> Dispatch</span>
                </span>
              </div>
            </div>

            {/* Right Side - Customer Service, Rating, Social Media, Wishlist */}
            <div className="flex items-center space-x-4">
              {/* Customer Service */}
              <div className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200">
                <PhoneIcon className="h-3.5 w-3.5 text-blue-100" />
                <span className="font-medium">Customer Service: +92 328-3250250</span>
              </div>

              {/* Rating — invented reviewers, so hidden unless explicitly
                  enabled. Rendering the disabled state showed "0.0/5 -",
                  which looks like a real store with no reviews. */}
              {SHOW_SIMULATED_ACTIVITY && currentRating.name && (
                <div className="hidden md:flex items-center space-x-2 text-white">
                  <StarIcon className="h-3.5 w-3.5 text-yellow-100" />
                  <span className="font-medium">
                    {currentRating.rating.toFixed(1)}/5 - {currentRating.name}
                  </span>
                </div>
              )}

              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923283250250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-200 hover:text-green-100 transition-colors duration-200 group focus:outline-none focus:ring-0"
                  aria-label="WhatsApp Chat"
                >
                  <svg className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trendy_folds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-200 hover:text-pink-100 transition-colors duration-200 group focus:outline-none focus:ring-0"
                  aria-label="Instagram Profile"
                >
                  <svg className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/trendyfolds24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-blue-100 transition-colors duration-200 group focus:outline-none focus:ring-0"
                  aria-label="Facebook Page"
                >
                  <svg className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              
              {/* Wishlist */}
              <Link href="/wishlist" className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200 font-medium hover:underline">
                <HeartIcon className="h-3.5 w-3.5 text-pink-200" />
                <span>My Wish List</span>
              </Link>

              {/* Close Button */}
              <button
                onClick={() => setShowUnifiedBar(false)}
                className="ml-2 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 rounded-full transition-all duration-300 group"
                aria-label="Close promotional banner"
              >
                <XMarkIcon className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        
                 {/* Bottom accent line */}
         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400"></div>
       </div>
       )}

      {/* Main Navigation - Merged into Single Bar */}
      <div className="bg-black shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-4">
          <div className="flex justify-between items-center h-16 py-2">
            {/* Brand Name */}
            <div className="flex-shrink-0 -ml-2">
              <Link 
                href="/" 
                className="text-2xl font-black text-white tracking-wider font-poppins hover:text-amber-200 transition-all duration-300 focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none focus:ring-offset-0 active:outline-none active:ring-0 active:border-0 active:shadow-none visited:outline-none visited:ring-0 visited:border-0 visited:shadow-none" 
                style={{ 
                  letterSpacing: '0.2em',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
                onClick={(e) => {
                  // Add click animation
                  const link = e.currentTarget;
                  link.style.transform = 'scale(0.95)';
                  link.style.opacity = '0.8';
                  
                  // Remove any focus styles that might appear
                  link.blur();
                  
                  setTimeout(() => {
                    link.style.transform = 'scale(1)';
                    link.style.opacity = '1';
                  }, 150);
                }}
              >
                TRENDY FOLDS
              </Link>
            </div>

            {/* Navigation Links - Center with Dropdowns */}
            <div className="hidden lg:flex items-center space-x-8 ml-16">
              {/* NEW ARRIVALS Dropdown */}
              <div className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/new-arrivals"
                    className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 py-3 border-b-2 focus:outline-none focus:ring-0 ${
                      pathname.startsWith('/new-arrivals') 
                        ? 'text-amber-200 border-amber-400' 
                        : 'text-white border-transparent hover:text-amber-200 hover:border-amber-400'
                    }`}
                  >
                    NEW ARRIVALS
                  </Link>
                  <button className={`ml-1 p-1 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                    pathname.startsWith('/new-arrivals') 
                      ? 'text-amber-200' 
                      : 'text-white hover:text-amber-200'
                  }`}>
                    <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[95]">
                  <div className="py-2">
                    <Link href="/categories/women/silk-scarves" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Silk Scarf Collection
                    </Link>
                    <Link href="/categories/men/pocket-square" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Pocket Square New
                    </Link>
                    <Link href="/categories/women/winter-scarves" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Winter Scarf 2025
                    </Link>
                    <Link href="/categories/men/silk-scarf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Men Scarf Latest
                    </Link>
                  </div>
                </div>
              </div>

              {/* WOMEN Dropdown */}
              <div className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/categories/women"
                    className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 py-3 border-b-2 focus:outline-none focus:ring-0 ${
                      pathname.startsWith('/categories/women') 
                        ? 'text-amber-200 border-amber-400' 
                        : 'text-white border-transparent hover:text-amber-200 hover:border-amber-400'
                    }`}
                  >
                    WOMEN
                  </Link>
                  <button className={`ml-1 p-1 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                    pathname.startsWith('/categories/women') 
                      ? 'text-amber-200' 
                      : 'text-white hover:text-amber-200'
                  }`}>
                    <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[95]">
                  <div className="py-2">
                    <Link href="/categories/women/unstiched" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Unstiched
                    </Link>
                    <Link href="/categories/women/2-piece" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      2 Piece
                    </Link>
                    <Link href="/categories/women/silk-scarves" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Silk Scarves
                    </Link>
                    <Link href="/categories/women/winter-scarves" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Winter Scarves
                    </Link>
                  </div>
                </div>
              </div>

              {/* MEN Dropdown */}
              <div className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/categories/men"
                    className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 py-3 border-b-2 focus:outline-none focus:ring-0 ${
                      pathname.startsWith('/categories/men') 
                        ? 'text-amber-200 border-amber-400' 
                        : 'text-white border-transparent hover:text-amber-200 hover:border-amber-400'
                    }`}
                  >
                    MEN
                  </Link>
                  <button className={`ml-1 p-1 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                    pathname.startsWith('/categories/men') 
                      ? 'text-amber-200' 
                      : 'text-white hover:text-amber-200'
                  }`}>
                    <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[95]">
                  <div className="py-2">
                    <Link href="/categories/men/pocket-square" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Pocket Square
                    </Link>
                    <Link href="/categories/men/silk-scarf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:ring-0 focus:border-0">
                      Silk Scarf
                    </Link>
                  </div>
                </div>
              </div>

              {/* TRENDING Link */}
              <Link
                href="/trending"
                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 py-3 border-b-2 focus:outline-none focus:ring-0 ${
                  pathname.startsWith('/trending') 
                    ? 'text-amber-200 border-amber-400' 
                    : 'text-white border-transparent hover:text-amber-200 hover:border-amber-400'
                }`}
              >
                TRENDING
              </Link>
            </div>

                        {/* Special Discount Button with Popping Animation */}
            <div className="hidden md:flex items-center ml-12">
              <Link
                href="/sale"
                className={`px-3 py-2 rounded-lg font-bold text-xs uppercase tracking-wide transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  pathname.startsWith('/sale') 
                    ? 'bg-amber-400 text-black animate-pulse' 
                    : 'bg-amber-500 hover:bg-amber-400 text-black'
                }`}
              >
                SPECIAL DISCOUNT
              </Link>
            </div>

            {/* Search Bar with Working Search Button */}
            <div className="hidden md:flex items-center ml-8 mr-8">
              <div className="relative w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="scraf, pocket square"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="block w-full pl-10 pr-20 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-sm"
                />
                <button
                  onClick={handleSearch}
                  className="absolute inset-y-0 right-0 px-4 bg-amber-500 hover:bg-amber-400 text-white font-medium rounded-r-lg transition-colors duration-200"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Right Side - Shopping Cart */}
            <div className="flex items-center space-x-6">

              {/* Shopping Cart */}
              <Link href="/checkout" className="flex items-center space-x-4 text-white hover:text-amber-200 transition-all duration-300 group focus:outline-none focus:ring-0">
                <div className="relative">
                  <div className="p-2.5 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105 border border-amber-400/30 hover:border-amber-300/50">
                    <ShoppingBagIcon className="h-5 w-5 text-white drop-shadow-sm" />
                  </div>
                  {state.totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse border border-white/80">
                      {state.totalItems > 99 ? '99+' : state.totalItems}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold tracking-wide uppercase text-white group-hover:text-amber-200 transition-colors duration-300">Checkout</div>
                  <div className="text-xs font-medium text-amber-200 tracking-wide group-hover:text-amber-100 transition-colors duration-300">
                    {state.totalItems} {state.totalItems === 1 ? 'item' : 'items'} • {state.totalPrice}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4 max-h-screen overflow-y-auto">
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search for trendy fashion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border-2 border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-white transition-all duration-200 text-sm"
                aria-label="Search products"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    className={`text-black hover:text-gray-800 block px-3 py-2 text-sm font-bold rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-200 ${
                      item.highlight ? 'text-amber-600 font-extrabold bg-gradient-to-r from-amber-50 to-amber-100' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile subcategories */}
                  {item.subcategories && (
                    <div className="ml-4 space-y-1">
                      {item.subcategories.map((subcat) => (
                        <Link
                          key={subcat.name}
                          href={subcat.href}
                          className="block px-3 py-2 text-xs text-gray-600 hover:text-black hover:bg-amber-50 rounded transition-colors duration-200 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subcat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Customer Service */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              {/* Social Media Icons - Mobile */}
              <div className="flex items-center justify-center space-x-4 px-3 py-2">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923283250250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-green-500 transition-colors duration-200 group"
                  aria-label="WhatsApp Chat"
                >
                  <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trendy_folds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-pink-500 transition-colors duration-200 group"
                  aria-label="Instagram Profile"
                >
                  <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/trendyfolds24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-500 transition-colors duration-200 group"
                  aria-label="Facebook Page"
                >
                  <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600 px-3 py-2 bg-amber-50 rounded-lg">
                <PhoneIcon className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold">📞 Customer Service: +92 328-3250250</span>
              </div>
              {SHOW_SIMULATED_ACTIVITY && currentRating.name && (
                <div className="flex items-center space-x-2 text-gray-600 px-3 py-2 bg-amber-50 rounded-lg">
                  <StarIcon className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold">
                    {currentRating.rating.toFixed(1)}/5 - {currentRating.name}
                  </span>
                </div>
              )}
              <Link
                href="/wishlist"
                className="flex items-center space-x-2 text-black hover:text-gray-800 px-3 py-2 text-sm font-bold rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <HeartIcon className="h-4 w-4 text-amber-600" />
                <span>My Wish List</span>
              </Link>
              
              {/* Mobile Shopping Cart */}
              <Link
                href="/cart"
                className="flex items-center space-x-2 text-black hover:text-gray-800 px-3 py-2 text-sm font-bold rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative">
                  <ShoppingBagIcon className="h-4 w-4 text-amber-600" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      {state.totalItems > 99 ? '99+' : state.totalItems}
                    </span>
                  )}
                </div>
                <span>Shopping Cart ({state.totalItems} {state.totalItems === 1 ? 'item' : 'items'})</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation;

