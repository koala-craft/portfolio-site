import { notFound } from 'next/navigation'
import { CustomMDX } from 'features/common/components/mdx'
import { formatDate, getBlogPosts } from 'features/routes/blog/utils/utils'
import { baseUrl } from 'app/sitemap'
import { HiOutlineCalendar } from 'react-icons/hi'
import DisplayPosts from 'features/routes/blog/components/displayBlogPosts'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const syncParams = await params;

  let post = getBlogPosts().find((post) => post.slug === syncParams.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const syncParams = await params;
  const allBlogs = getBlogPosts();
  let post = allBlogs.find((post) => post.slug === syncParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="relative z-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />

      <div className="relative">
        <div className="absolute inset-0 h-96 bg-gradient-to-b from-pf-accent/5 to-transparent dark:from-pf-accent-dark/10" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-8">
          <div className="flex items-center gap-2 text-sm text-pf-accent dark:text-pf-accent-dark mb-4">
            <HiOutlineCalendar className="w-4 h-4" />
            <time>{formatDate(post.metadata.publishedAt)}</time>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-pf-text dark:text-pf-text-dark mb-6 leading-tight">
            {post.metadata.title}
          </h1>
          
          <p className="text-lg text-pf-muted dark:text-pf-muted-dark leading-relaxed mb-8">
            {post.metadata.summary}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
          <img 
            src={post.metadata.image ? post.metadata.image : "/images/blog/image-not-found.jpg"} 
            alt={`${post.metadata.summary}のブログ画像`}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        
        <article className="prose prose-lg max-w-none">
          <CustomMDX source={post.content} />
        </article>
      </div>

      <div className="border-t border-pf-ui-border dark:border-pf-ui-border-dark">
        <div className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-2xl font-bold text-center mb-12 text-pf-text dark:text-pf-text-dark">
            Other Posts
          </h2>
          <DisplayPosts allBlogs={allBlogs} />
        </div>
      </div>
    </section>
  )
}
