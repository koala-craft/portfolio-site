import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getWorkPosts } from 'app/work/utils'
import { baseUrl } from 'app/sitemap'
import { FaRegClock } from 'react-icons/fa'
import { WorkPosts } from 'app/feature/work/components/posts'

export async function generateStaticParams() {
  let posts = getWorkPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const syncParams = await params;
  let post = getWorkPosts().find((post) => post.slug === syncParams.slug)
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
      url: `${baseUrl}/work/${post.slug}`,
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

export default async function Work({ params }) {
  const syncParams = await params;
  let post = getWorkPosts().find((post) => post.slug === syncParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WorkPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/work/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div className='max-w-5xl m-auto pt-8 pb-12'>

        <h1 className="title font-extrabold text-2xl tracking-tighter pb-2">
          {post.metadata.title}
        </h1>
        <hr className='border-pf-text/40 dark:border-pf-text-dark/40' />
        <div className="flex justify-between items-center mt-2 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 gap-2 flex items-center">
            <FaRegClock className='' />{formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <p className='mt-4 mb-4'>{post.metadata.summary}</p>
        <div className='h-[324px]'>
          <img src={baseUrl + post.metadata.image} alt="" className='w-full h-full object-cover' />
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </div>
      <WorkPosts />
    </section>
  )
}
