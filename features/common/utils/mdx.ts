import fs from 'fs'
import path from 'path'

export type BlogMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type WorkMetadata = {
  num: string
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type MDXPost<T> = {
  metadata: T
  slug: string
  content: string
}

function parseFrontmatter<T>(fileContent: string): { metadata: T; content: string } {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Record<string, string> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    metadata[key.trim()] = value
  })

  return { metadata: metadata as T, content }
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile<T>(filePath: string): { metadata: T; content: string } {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter<T>(rawContent)
}

export function getMDXData<T>(dir: string): MDXPost<T>[] {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile<T>(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}
