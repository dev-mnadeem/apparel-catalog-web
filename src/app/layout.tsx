import type { Metadata } from 'next'
import '@fontsource/jost/latin-400.css'
import '@fontsource/jost/latin-500.css'
import '@fontsource/jost/latin-600.css'
import '@fontsource/cormorant-garamond/latin-600.css'
import '@fontsource/cormorant-garamond/latin-700.css'
import './globals.css'
import Navigation from '@/components/Navigation'
import { CombinedProviders } from '@/contexts/CombinedProviders'
import CartNotificationContainer from '@/components/CartNotificationContainer'
import SiteFooter from '@/components/SiteFooter'
import { storeContact } from '@/lib/store'

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
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trendy Folds - Premium Fashion Clothing Store',
    description: 'Discover the latest trends in fashion at Trendy Folds. Shop premium clothing, accessories, and style essentials.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1E1B18" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Trendy Folds",
              "url": "https://trendyfolds.com",
              "logo": "https://trendyfolds.com/images/icon.png",
              "description": "Premium fashion clothing store offering the latest trends and style essentials",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@trendyfolds.com"
              },
              "sameAs": [storeContact.facebookUrl, storeContact.instagramUrl]
            })
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-stone-800 antialiased">
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <CombinedProviders>
          <Navigation />
          <div id="content" className="flex-1">
            {children}
          </div>
          <CartNotificationContainer />
        </CombinedProviders>
        <SiteFooter />
      </body>
    </html>
  )
}
