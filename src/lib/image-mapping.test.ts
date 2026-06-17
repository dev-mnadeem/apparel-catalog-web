import { afterEach, describe, expect, it, vi } from 'vitest'
import { getHeroImageUrl, placeholderFor, productImage } from './image-mapping'

const MAPPED = '/images/products/IMG_0439.png'
const UNMAPPED = '/images/products/IMG_0041.HEIC'

afterEach(() => vi.unstubAllEnvs())

describe('productImage', () => {
  it('uses a stable local swatch when no Cloudinary cloud is configured', () => {
    vi.stubEnv('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME', '')
    expect(productImage(MAPPED)).toMatch(/^\/images\/placeholders\/[a-z]+\.svg$/)
    expect(productImage(MAPPED)).toBe(placeholderFor(MAPPED))
  })

  it('builds a Cloudinary URL for mapped photos when a cloud is configured', () => {
    vi.stubEnv('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME', 'demo-cloud')
    expect(productImage(MAPPED, 600)).toBe(
      'https://res.cloudinary.com/demo-cloud/image/upload/w_600,c_scale,q_auto,f_auto,dpr_auto/trendy-folds/IMG_0439'
    )
    expect(getHeroImageUrl(MAPPED)).toContain('/w_800,c_scale,q_80,f_auto,dpr_auto/')
  })

  it('falls back to a swatch for photos that were never uploaded', () => {
    vi.stubEnv('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME', 'demo-cloud')
    expect(productImage(UNMAPPED)).toBe(placeholderFor(UNMAPPED))
  })

  it('leaves resolved URLs and other local assets alone, so it is safe to call twice', () => {
    const swatch = placeholderFor(MAPPED)
    expect(productImage(swatch)).toBe(swatch)
    expect(productImage('/images/categories/women.svg')).toBe('/images/categories/women.svg')
    expect(productImage('https://res.cloudinary.com/x/image/upload/a')).toBe('https://res.cloudinary.com/x/image/upload/a')
  })
})
