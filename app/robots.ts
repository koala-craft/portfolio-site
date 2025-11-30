import { baseUrl } from 'app/sitemap'

export const dynamic = "force-static";  // これを追加

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
