import { allPosts } from 'contentlayer/generated'
import { compareDesc, format } from 'date-fns'
import Link from 'next/link'
import { H1, H2, Paragraph, SmallText } from '@/components/typography'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <H1>blog</H1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <H2>
              <Link
                href={post.url}
                className="hover:text-[var(--hover-color)]"
              >
                {post.title}
              </Link>
            </H2>
            <SmallText className="mb-2">
              last updated: {format(new Date(post.date), "MMMM do, yyyy").toLowerCase()}
            </SmallText>
            <Paragraph>{post.excerpt}</Paragraph>
          </article>
        ))}
      </div>
    </div>
  )
}
