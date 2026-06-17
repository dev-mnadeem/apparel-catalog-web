import { 
  ArrowPathIcon, 
  ShieldCheckIcon, 
  CreditCardIcon,
  StarIcon,
  HeartIcon
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

const benefits = [
  {
    icon: CustomTruckIcon,
    title: 'Free Shipping',
    description: 'Free shipping on orders over Rs. 3000. Fast delivery to your doorstep.',
    color: 'text-blue-600'
  },
  {
    icon: ArrowPathIcon,
    title: 'Easy Returns',
    description: '30-day hassle-free returns. We want you to love your purchase.',
    color: 'text-green-600'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Shopping',
    description: 'Your data is protected with bank-level security encryption.',
    color: 'text-purple-600'
  },
  {
    icon: CreditCardIcon,
    title: 'Multiple Payment Options',
    description: 'Pay with credit card, PayPal, or Apple Pay. Your choice.',
    color: 'text-orange-600'
  },
  {
    icon: StarIcon,
    title: 'Premium Quality',
    description: 'Curated collections with attention to detail and craftsmanship.',
    color: 'text-yellow-600'
  },
  {
    icon: HeartIcon,
    title: 'Customer First',
    description: '24/7 customer support. We&apos;re here to help you succeed.',
    color: 'text-red-600'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Trendy Folds?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing you with the best shopping experience, from quality products to exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 mb-4 ${benefit.color} shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105`}>
                <benefit.icon className="h-8 w-8 drop-shadow-sm" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
