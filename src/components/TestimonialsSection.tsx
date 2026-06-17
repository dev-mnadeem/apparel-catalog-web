import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fashion Blogger',
    content: 'Trendy Folds has become my go-to destination for fashion. The quality of their pieces is exceptional, and their customer service is outstanding. I love how they curate their collections!',
    rating: 5,
    avatar: '/images/avatars/sarah.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Professional',
    content: 'As someone who values both style and comfort, Trendy Folds delivers on both fronts. Their classic pieces are timeless and the fit is always perfect. Highly recommended!',
    rating: 5,
    avatar: '/images/avatars/michael.jpg'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Style Consultant',
    content: 'I&apos;ve been shopping at Trendy Folds for years and they never disappoint. Their attention to detail, sustainable practices, and trend-forward designs make them stand out in the fashion industry.',
    rating: 5,
    avatar: '/images/avatars/emma.jpg'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Creative Director',
    content: 'The quality and craftsmanship of Trendy Folds clothing is remarkable. Their pieces have become staples in my wardrobe. The customer experience is consistently excellent.',
    rating: 5,
    avatar: '/images/avatars/david.jpg'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about their experience with Trendy Folds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
