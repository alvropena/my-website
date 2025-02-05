import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-8">contact</h1>
      <div className="space-y-4 text-gray-600 text-sm">
        <p>
          you can reach me at{' '}
          <Link 
            href="mailto:me@alvropena.com" 
            className="hover:text-blue-600 group"
          >
            <span className="group-hover:hidden">me@alvropena.com</span>
            <span className="hidden group-hover:inline">[me@alvropena.com]</span>
          </Link>
        </p>
        <p>
          i&apos;m also on{' '}
          <Link 
            href="https://github.com/alvropena" 
            className="hover:text-blue-600 group"
            target="_blank"
          >
            <span className="group-hover:hidden">github</span>
            <span className="hidden group-hover:inline">[github]</span>
          </Link>
          {' '}and{' '}
          <Link 
            href="https://twitter.com/alvropenaa" 
            className="hover:text-blue-600 group"
            target="_blank"
          >
            <span className="group-hover:hidden">twitter/x</span>
            <span className="hidden group-hover:inline">[twitter/x]</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
