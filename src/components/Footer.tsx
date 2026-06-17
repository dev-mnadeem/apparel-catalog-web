import Link from 'next/link'
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  YoutubeIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: 'Women', href: '/categories/women' },
      { name: 'Men', href: '/categories/men' },
      { name: 'Sale', href: '/sale' },
      { name: 'New Arrivals', href: '/new-arrivals' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Sustainability', href: '/sustainability' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/trendyfolds', icon: FacebookIcon },
    { name: 'Twitter', href: 'https://twitter.com/trendyfolds', icon: TwitterIcon },
    { name: 'Instagram', href: 'https://instagram.com/trendyfolds', icon: InstagramIcon },
    { name: 'YouTube', href: 'https://youtube.com/trendyfolds', icon: YoutubeIcon },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-blue-400 text-lg font-bold mb-4">Trendy Folds</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover your perfect style with our curated collection of fashion essentials. 
              From elegant scarves to sophisticated pocket squares, we bring you timeless pieces 
              that define your unique fashion statement.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-blue-400 text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/categories/women" className="text-gray-300 hover:text-white transition-colors text-sm">Women&apos;s Collection</a></li>
              <li><a href="/categories/men" className="text-gray-300 hover:text-white transition-colors text-sm">Men&apos;s Collection</a></li>
              <li><a href="/new-arrivals" className="text-gray-300 hover:text-white transition-colors text-sm">New Arrivals</a></li>
              <li><a href="/trending" className="text-gray-300 hover:text-white transition-colors text-sm">Trending</a></li>
              <li><a href="/sale" className="text-gray-300 hover:text-white transition-colors text-sm">Special Offers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-blue-400 text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm">Shipping Info</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="/size-guide" className="text-gray-300 hover:text-white transition-colors text-sm">Size Guide</a></li>
              <li><a href="/care-instructions" className="text-gray-300 hover:text-white transition-colors text-sm">Care Instructions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-blue-400 text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-gray-950 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Trendy Folds. All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
