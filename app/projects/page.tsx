import Link from 'next/link'

type Project = {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "project one",
    description: "a brief description of your first project",
    link: "https://github.com/yourusername/project-one"
  },
  {
    title: "project two",
    description: "a brief description of your second project",
    link: "https://github.com/yourusername/project-two"
  },
  {
    title: "project three",
    description: "a brief description of your third project",
    link: "https://github.com/yourusername/project-three"
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
