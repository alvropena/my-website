import React from 'react'
import { EssayTable } from '@/components/essay-table'
import { ModeToggle } from '@/components/themes/mode-toggle'
import SocialMediaIcons from '@/components/social-media-icons'
import ProjectsCard from '@/components/projects-card'

export default function Component() {
  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Alvaro Peña</h1>
          <p className="mb-4">San Francisco, CA | Lima, PE</p>
        </div>
        <ModeToggle />
      </div>
      <h2 className="text-xl font-semibold mb-2">About Me</h2>
      <p className="mb-4">
        I&apos;m the founder and CEO of Chop - the first generative learning platform. I&apos;m originally from Peru, but migrated to the US in 2024.
      </p>
      <p className="mb-4">
        I graduated from Economics at Cal State East Bay, after four years of studying in Peru at Universidad del Pacífico I decided to transfer.
      </p>
      <p className="mb-4">
        I&apos;m a self-taught software engineer.
      </p>
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <ProjectsCard />
      <h2 className="text-xl font-semibold mb-2">Essays</h2>
      <EssayTable />
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <SocialMediaIcons />
    </div>
  )
}
