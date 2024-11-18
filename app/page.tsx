import { Button } from "@/components/ui/button"
import { MoonIcon } from "lucide-react"
import { LinkedInLogoIcon, EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <main>
      <header className="flex justify-between items-center p-4 border-b">
        <Button variant="secondary">
          Edit
        </Button>
        <Button variant="ghost" size="icon">
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>
      <h1 className="text-2xl font-bold text-center py-4">Alvaro Peña</h1>
      <p className="text-gray-500 text-center text-lg mb-4">AI Engineer</p>
      <div className="flex justify-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInLogoIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:email@example.com">
            <EnvelopeClosedIcon className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
      </div>
      <p className="text-center max-w-2xl mx-auto px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
      </p>
    </main>
  );
}
