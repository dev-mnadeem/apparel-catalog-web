import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { CombinedProviders } from '@/contexts/CombinedProviders'
import CartNotificationContainer from '@/components/CartNotificationContainer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Trendy Folds - Premium Fashion Clothing Store',
  description: 'Discover the latest trends in fashion at Trendy Folds. Shop premium clothing, accessories, and style essentials for every occasion. Free shipping on orders over Rs. 3000.',
  keywords: 'fashion, clothing, trendy, style, premium clothing, fashion store, online shopping, accessories, trendy folds',
  authors: [{ name: 'Trendy Folds' }],
  creator: 'Trendy Folds',
  publisher: 'Trendy Folds',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trendyfolds.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Trendy Folds - Premium Fashion Clothing Store',
    description: 'Discover the latest trends in fashion at Trendy Folds. Shop premium clothing, accessories, and style essentials for every occasion.',
    url: 'https://trendyfolds.com',
    siteName: 'Trendy Folds',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trendy Folds - Premium Fashion Clothing Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trendy Folds - Premium Fashion Clothing Store',
    description: 'Discover the latest trends in fashion at Trendy Folds. Shop premium clothing, accessories, and style essentials.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Trendy Folds",
              "url": "https://trendyfolds.com",
              "logo": "https://trendyfolds.com/logo.png",
              "description": "Premium fashion clothing store offering the latest trends and style essentials",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@trendyfolds.com"
              },
              "sameAs": [
                "https://facebook.com/trendyfolds",
                "https://instagram.com/trendyfolds",
                "https://twitter.com/trendyfolds"
              ]
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        <CombinedProviders>
          {/* Enhanced Navigation */}
          <Navigation />

          {children}
          
          {/* Cart Notifications */}
          <CartNotificationContainer />
        </CombinedProviders>

        {/* Simple Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-yellow-200 text-lg font-semibold mb-4">Trendy Folds</h3>
                <p className="text-gray-300">Premium fashion for every style.</p>
              </div>
              <div>
                <h3 className="text-yellow-200 text-lg font-semibold mb-4">Shop</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/categories/women" className="hover:text-white">Women</a></li>
                  <li><a href="/categories/men" className="hover:text-white">Men</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-yellow-200 text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                  <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-yellow-200 text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-300 mb-4">Stay updated with latest trends</p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              © 2025 Trendy Folds. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
