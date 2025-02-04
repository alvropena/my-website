import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function postPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-4">{post.title}</h1>
      <div className="text-sm text-gray-600 mb-8">
        {format(new Date(post.date), "MMMM do, yyyy").toLowerCase()}
      </div>
      <div className="prose">
        {post.body.code}
      </div>
    </article>
  )
}
