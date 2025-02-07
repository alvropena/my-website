import Link from 'next/link'
import { H1, H2, Paragraph, SmallText } from '@/components/typography'

type Project = {
  title: string
  description: string
  link: string
  achievements: string[]
  dates: string
}

const projects: Project[] = [
  {
    title: "chop",
    description: "tiktok but for learning with games",
    link: "https://chop.so",
    achievements: [
      "reached 10k+ active users",
      "featured in product hunt"
    ],
    dates: "jan 2025 - present"
  },
  {
    title: "onley",
    description: "an onlyfans ai chatter for creators",
    link: "https://onley.ai",
    achievements: [
      "generated $50k+ in revenue",
      "serving 100+ creators"
    ],
    dates: "mar 2024 - jan 2025"
  },
  {
    title: "bhuma",
    description: "natural language to sql chatbot",
    link: "https://bhuma.dev",
    achievements: [
      "used by 5 enterprise clients",
      "processed 100k+ queries"
    ],
    dates: "nov 2023 - mar 2024"
  },
  {
    title: "dudda",
    description: "mobile app that streamlines booking of private tutors for highschool and elementary students",
    link: "https://dudda.app",
    achievements: [
      "connected 500+ students with tutors",
      "4.8 star rating on app store"
    ],
    dates: "jul 2023 - nov 2023"
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <H1>projects</H1>
      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.title} className="border-b border-gray-200 pb-8">
            <div className="flex justify-between items-center mb-2">
              <H2>
                <Link
                  href={project.link}
                  className="hover:text-[var(--hover-color)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </Link>
              </H2>
              <SmallText>{project.dates}</SmallText>
            </div>
            <Paragraph>{project.description}</Paragraph>
            <ul className="mt-2 list-disc pl-4">
              {project.achievements.map((achievement, index) => (
                <li key={index}>
                  <SmallText>{achievement}</SmallText>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
