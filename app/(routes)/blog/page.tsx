import { allPosts } from 'contentlayer/generated'
import { compareDesc, format } from 'date-fns'
import Link from 'next/link'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-8">blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <h2 className="text-xl mb-2">
              <Link
                href={post.url}
                className="hover:text-[var(--hover-color)]"
              >
                {post.title}
              </Link>
            </h2>
            <div className="text-sm text-gray-600 mb-2">
              last updated: {format(new Date(post.date), "MMMM do, yyyy").toLowerCase()}
            </div>
            <p className="text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
