import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-8">contact</h1>
      <div className="space-y-4 text-gray-600">
        <p>
          you can reach me at{' '}
          <Link 
            href="mailto:your-email@example.com" 
            className="hover:text-[var(--hover-color)]"
          >
            your-email@example.com
          </Link>
        </p>
        <p>
          i&apos;m also on{' '}
          <Link 
            href="https://github.com/yourusername" 
            className="hover:text-[var(--hover-color)]"
            target="_blank"
          >
            github
          </Link>
          {' '}and{' '}
          <Link 
            href="https://linkedin.com/in/yourusername" 
            className="hover:text-[var(--hover-color)]"
            target="_blank"
          >
            linkedin
          </Link>
        </p>
      </div>
    </div>
  )
}
