export interface Product {
  id: string
  name: string
  description: string
  price: number
  salePrice?: number
  images: string[]
  category: string
  subcategory?: string
  tags: string[]
  sizes: string[]
  colors: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  slug: string
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  description: string
  slug: string
  image: string
  parentId?: string
  children?: Category[]
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
}

export interface CartItem {
  productId: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  updatedAt: string
}
