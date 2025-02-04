type BlogPostParams = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: BlogPostParams) {
  // Hardcoded blog posts content
  const posts = {
    "getting-started-with-nextjs": {
      title: "Getting Started with Next.js",
      date: "2024-03-20",
      content: `
        Next.js is a powerful React framework that makes building web applications easier and more efficient.
        
        In this post, we'll cover:
        - Setting up a Next.js project
        - Understanding the file-based routing system
        - Working with pages and components
        - Server-side rendering and static generation
      `,
    },
    "understanding-typescript": {
      title: "Understanding TypeScript",
      date: "2024-03-15",
      content: `
        TypeScript adds static typing to JavaScript, making your code more reliable and maintainable.
        
        Key topics covered:
        - Basic types and interfaces
        - Generics
        - Type inference
        - Advanced types
      `,
    },
    "web-development-best-practices": {
      title: "Web Development Best Practices",
      date: "2024-03-10",
      content: `
        Following best practices is crucial for building maintainable and scalable web applications.
        
        We'll discuss:
        - Code organization
        - Performance optimization
        - Security considerations
        - Accessibility guidelines
      `,
    },
  };

  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-light mb-8">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-4">{post.title}</h1>
      <div className="text-sm text-gray-600 mb-8">{post.date}</div>
      <div className="prose dark:prose-invert">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/blog"
          className="text-sm text-gray-600 hover:text-[var(--hover-color)]"
        >
          ← Back to all posts
        </a>
      </div>
    </div>
  );
}
