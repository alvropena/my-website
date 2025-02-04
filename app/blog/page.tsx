export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      slug: "getting-started-with-nextjs",
      date: "2024-03-20",
      excerpt: "Learn the basics of Next.js and how to build modern web applications.",
    },
    {
      id: 2,
      title: "Understanding TypeScript",
      slug: "understanding-typescript",
      date: "2024-03-15",
      excerpt: "A comprehensive guide to TypeScript and its core concepts.",
    },
    {
      id: 3,
      title: "Web Development Best Practices",
      slug: "web-development-best-practices",
      date: "2024-03-10",
      excerpt: "Essential practices for modern web development.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <h2 className="text-xl mb-2">
              <a
                href={`/blog/${post.slug}`}
                className="hover:text-[var(--hover-color)]"
              >
                {post.title}
              </a>
            </h2>
            <div className="text-sm text-gray-600 mb-2">{post.date}</div>
            <p className="text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
