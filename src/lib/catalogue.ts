import { products } from '@/data/products'

export type SectionId =
  | 'men-pocket-squares'
  | 'men-silk-scarves'
  | 'women-silk-scarves'
  | 'women-winter-scarves'
  | 'women-2-piece'
  | 'women-unstitched'

export interface CatalogueProduct {
  id: number
  name: string
  section: SectionId
  price: string
  originalPrice?: string
  images: string[]
  description?: string
  style?: string
  soldOut?: boolean
  details?: string[]
  styling?: string[]
  sizes?: string[]
  colors?: string[]
  material?: string
  care?: string
  rating?: number
  reviews?: number
}

export const sections: Record<SectionId, { department: 'Men' | 'Women'; label: string; href: string }> = {
  'men-pocket-squares': { department: 'Men', label: 'Pocket Squares', href: '/categories/men/pocket-square' },
  'men-silk-scarves': { department: 'Men', label: 'Silk Scarves', href: '/categories/men/silk-scarf' },
  'women-silk-scarves': { department: 'Women', label: 'Silk Scarves', href: '/categories/women/silk-scarves' },
  'women-winter-scarves': { department: 'Women', label: 'Winter Scarves', href: '/categories/women/winter-scarves' },
  'women-2-piece': { department: 'Women', label: '2 Piece', href: '/categories/women/2-piece' },
  'women-unstitched': { department: 'Women', label: 'Unstitched', href: '/categories/women/unstiched' },
}

const byId = new Map(products.map(product => [product.id, product]))

export function findProduct(id: string | number): CatalogueProduct | undefined {
  const numericId = typeof id === 'number' ? id : Number(id)
  return Number.isInteger(numericId) ? byId.get(numericId) : undefined
}

export function relatedProducts(product: CatalogueProduct, limit = 4): CatalogueProduct[] {
  return products
    .filter(candidate => candidate.id !== product.id && candidate.section === product.section && !candidate.soldOut)
    .slice(0, limit)
}

export function searchProducts(query: string): CatalogueProduct[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []
  return products.filter(product => {
    const section = sections[product.section]
    const haystack = [product.name, product.description, product.style, section.department, section.label, ...(product.colors ?? [])]
      .join(' ')
      .toLowerCase()
    return terms.every(term => haystack.includes(term))
  })
}

export { products }
