import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { MdxContent } from '@/components/mdx-content'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = allPosts.find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-4">{post.title}</h1>
      <div className="text-sm text-gray-600 mb-8">
        {format(new Date(post.date), "MMMM do, yyyy").toLowerCase()}
      </div>
      <MdxContent code={post.body.code} />
    </article>
  )
}