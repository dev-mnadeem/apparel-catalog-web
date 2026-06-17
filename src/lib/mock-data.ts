import { Product, Category } from '@/types'
import { getProductImageUrl } from './image-mapping'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Women',
    description: 'Elegant women\'s fashion for every occasion',
    slug: 'women',
    image: '/images/categories/women.svg',
    seoTitle: 'Women\'s Fashion Collection | Trendy Folds',
    seoDescription: 'Discover elegant women\'s clothing, dresses, tops, and accessories. Shop the latest trends in women\'s fashion.',
    seoKeywords: ['women\'s clothing', 'women\'s fashion', 'dresses', 'tops', 'women\'s accessories']
  },
  {
    id: '2',
    name: 'Men',
    description: 'Sophisticated men\'s fashion and style',
    slug: 'men',
    image: '/images/categories/men.svg',
    seoTitle: 'Men\'s Fashion Collection | Trendy Folds',
    seoDescription: 'Explore sophisticated men\'s clothing, shirts, pants, and accessories. Premium men\'s fashion for every style.',
    seoKeywords: ['men\'s clothing', 'men\'s fashion', 'shirts', 'pants', 'men\'s accessories']
  },
  {
    id: '3',
    name: 'Accessories',
    description: 'Complete your look with our accessories',
    slug: 'accessories',
    image: '/images/categories/accessories.svg',
    seoTitle: 'Fashion Accessories | Trendy Folds',
    seoDescription: 'Complete your look with our curated collection of fashion accessories. Bags, jewelry, scarves, and more.',
    seoKeywords: ['fashion accessories', 'bags', 'jewelry', 'scarves', 'belts']
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Summer Dress',
    description: 'A beautiful summer dress perfect for any occasion. Made with premium cotton blend for comfort and style.',
    price: 89.99,
    salePrice: 69.99,
    images: [getProductImageUrl('/images/products/IMG_0020.png'), getProductImageUrl('/images/products/IMG_0025.png')],
    category: 'women',
    subcategory: 'dresses',
    tags: ['summer', 'casual', 'elegant', 'cotton'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Pink', 'White'],
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    slug: 'elegant-summer-dress-1',
    seoTitle: 'Elegant Summer Dress | Women\'s Fashion | Trendy Folds',
    seoDescription: 'Shop our elegant summer dress collection. Perfect for any occasion with premium cotton blend fabric.',
    seoKeywords: ['summer dress', 'women\'s dress', 'casual dress', 'cotton dress'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Classic White Shirt',
    description: 'A timeless classic white shirt that goes with everything. Premium cotton fabric with perfect fit.',
    price: 59.99,
    images: [getProductImageUrl('/images/products/IMG_0027.png'), getProductImageUrl('/images/products/IMG_0029.png')],
    category: 'men',
    subcategory: 'shirts',
    tags: ['classic', 'formal', 'cotton', 'versatile'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue'],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    slug: 'classic-white-shirt-2',
    seoTitle: 'Classic White Shirt | Men\'s Fashion | Trendy Folds',
    seoDescription: 'Timeless classic white shirt in premium cotton. Perfect for any occasion and goes with everything.',
    seoKeywords: ['white shirt', 'men\'s shirt', 'classic shirt', 'formal shirt'],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '3',
    name: 'Leather Crossbody Bag',
    description: 'Stylish and practical leather crossbody bag. Perfect size for everyday essentials.',
    price: 79.99,
    images: ['/images/products/bag-1.svg', '/images/products/bag-1-2.svg'],
    category: 'accessories',
    subcategory: 'bags',
    tags: ['leather', 'crossbody', 'practical', 'stylish'],
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Tan'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    slug: 'leather-crossbody-bag-3',
    seoTitle: 'Leather Crossbody Bag | Fashion Accessories | Trendy Folds',
    seoDescription: 'Stylish leather crossbody bag perfect for everyday use. Practical design with premium leather quality.',
    seoKeywords: ['leather bag', 'crossbody bag', 'handbag', 'leather accessories'],
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z'
  }
]
