import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { findProduct, products, relatedProducts, searchProducts } from './catalogue'

const SRC = join(__dirname, '..')

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap(entry => {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) return sourceFiles(path)
    return /\.tsx$/.test(entry) ? [path] : []
  })
}

describe('catalogue', () => {
  it('gives every product a unique id, a photo and a readable price', () => {
    const ids = products.map(product => product.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const product of products) {
      expect(product.images.length, product.name).toBeGreaterThan(0)
      expect(product.price, product.name).toMatch(/^Rs\.[\d,]+$/)
    }
  })

  it('resolves every product id that a page links to or adds to the bag', () => {
    const missing: string[] = []
    for (const file of sourceFiles(join(SRC, 'app')).concat(sourceFiles(join(SRC, 'components')))) {
      const text = readFileSync(file, 'utf8')
      const linked = [...text.matchAll(/\/product\/(\d+)/g)].map(match => Number(match[1]))
      const listed = [...text.matchAll(/\bid: (\d+),\s*\n\s*name: '/g)].map(match => Number(match[1]))
      for (const id of [...linked, ...listed]) {
        if (!findProduct(id)) missing.push(`${file.slice(SRC.length)} -> ${id}`)
      }
    }
    expect(missing).toEqual([])
  })

  it('treats unknown or malformed ids as not found', () => {
    expect(findProduct('999999')).toBeUndefined()
    expect(findProduct('scarlet')).toBeUndefined()
    expect(findProduct('44')?.name).toBe('SCARLET')
  })

  it('suggests in-stock products from the same section only', () => {
    const scarf = findProduct(44)!
    const related = relatedProducts(scarf)
    expect(related.length).toBeGreaterThan(0)
    expect(related.length).toBeLessThanOrEqual(4)
    for (const product of related) {
      expect(product.section).toBe(scarf.section)
      expect(product.id).not.toBe(scarf.id)
      expect(product.soldOut).not.toBe(true)
    }
  })

  it('matches every search term against name, section and colours', () => {
    expect(searchProducts('   ')).toEqual([])
    const results = searchProducts('pocket square polka')
    expect(results.map(product => product.name)).toContain('BLACK POLKA POCKET SQUARE')
    expect(results.every(product => product.section === 'men-pocket-squares')).toBe(true)
  })
})
