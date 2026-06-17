import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const SRC = join(__dirname, '..')
const APP = join(SRC, 'app')
const PUBLIC = join(SRC, '..', 'public')

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap(entry => {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) return sourceFiles(path)
    return /\.tsx?$/.test(entry) && !entry.endsWith('.test.ts') ? [path] : []
  })
}

function routeExists(path: string): boolean {
  if (path.startsWith('/product/')) return existsSync(join(APP, 'product', '[id]', 'page.tsx'))
  if (/\.[a-z]+$/i.test(path)) return existsSync(join(PUBLIC, path))
  return existsSync(join(APP, path, 'page.tsx'))
}

describe('internal links', () => {
  it('point at a page or public file that exists', () => {
    const broken: string[] = []
    for (const file of [...sourceFiles(join(SRC, 'app')), ...sourceFiles(join(SRC, 'components'))]) {
      const text = readFileSync(file, 'utf8')
      for (const match of text.matchAll(/href(?:=\{?|:\s*)["'`](\/[^"'`?#$]*)/g)) {
        if (!routeExists(match[1])) broken.push(`${file.slice(SRC.length)} -> ${match[1]}`)
      }
    }
    expect(broken).toEqual([])
  })
})
