import Link from 'next/link'

type Project = {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "personal website",
    description: "minimalist portfolio and blog built with Next.js, TypeScript, and TailwindCSS",
    link: "https://github.com/alvropena/my-website"
  },
  {
    title: "spotify clone",
    description: "a spotify clone built with Next.js and Supabase",
    link: "https://github.com/alvropena/spotify-clone"
  },
  {
    title: "notion clone",
    description: "a notion-like editor with real-time collaboration",
    link: "https://github.com/alvropena/notion-clone"
  }
]

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-8">projects</h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.title} className="border-b border-gray-200 pb-8">
            <h2 className="text-xl mb-2">
              <Link
                href={project.link}
                className="hover:text-[var(--hover-color)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </Link>
            </h2>
            <p className="text-gray-600">{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
