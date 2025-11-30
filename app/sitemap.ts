import { getBlogPosts } from 'features/routes/blog/utils/utils'
import { getWorkPosts } from 'features/routes/work/utils/utils'

export const dynamic = "force-static";  // これを追加

// export const baseUrl = 'https://portfolio-blog-starter.vercel.app'
export const baseUrl = 'http://localhost:3000'

export default function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let works = getWorkPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/work'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
