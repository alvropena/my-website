"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoonIcon, SunIcon } from "lucide-react"
import { LinkedInLogoIcon, EnvelopeClosedIcon, GitHubLogoIcon, DownloadIcon } from "@radix-ui/react-icons"
import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"
// Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Header = ({ componentRef }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [title, setTitle] = useState("AI Engineer")
  const [summary, setSummary] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
  const [skills, setSkills] = useState([
    "Python", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "TensorFlow", "PyTorch", "SQL", "MongoDB",
    "Docker", "AWS", "Git", "CI/CD", "Machine Learning",
  ])
  const { theme, setTheme } = useTheme()

  const handleAuth = () => {
    // In a real app, this would be an API call or more secure auth
    if (password === "admin123") { // Example password
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password")
    }
  }

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    setIsAuthenticated(false) // Close the auth session after saving
  }

  return (
    <header className="flex justify-between items-center p-3 border-b w-full max-w-none print:hidden">
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            {!isAuthenticated ? (
              <div className="space-y-4">
                <DialogHeader>
                  <DialogTitle>Authentication Required</DialogTitle>
                  <DialogDescription>
                    Please enter the password to make changes.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button onClick={handleAuth}>Submit</Button>
                </div>
              </div>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-4">
                    <h3 className="font-medium">Personal Info</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter your professional title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Summary</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="summary">Summary</Label>
                      <textarea
                        id="summary"
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        placeholder="Enter your professional summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Skills</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="skills">Skills (comma-separated)</Label>
                      <Input
                        id="skills"
                        placeholder="Enter skills, separated by commas"
                        value={skills.join(", ")}
                        onChange={(e) => setSkills(e.target.value.split(",").map(skill => skill.trim()))}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Work Experience</h3>
                    {/* Add experience management UI */}
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Education</h3>
                    {/* Add education management UI */}
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Projects</h3>
                    {/* Add projects management UI */}
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">Certifications</h3>
                    {/* Add certifications management UI */}
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleSave}>Save Changes</Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}

const Profile = () => (
  <>
    <h1 className="text-sm font-bold text-center py-3">Alvaro Peña</h1>
    <p className="text-gray-500 text-center">AI Engineer</p>
    <div className="flex justify-center gap-3">
      <Button variant="ghost" size="icon" asChild>
        <a href="https://linkedin.com/in/alvropena" target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="mailto:me@alvropena.com">
          <EnvelopeClosedIcon className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://github.com/alvropena" target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
    </div>
  </>
)

const Summary = ({ skills }) => (
  <div className="px-4">
    <h2 className="text-sm font-semibold">Summary</h2>
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
    </p>
    <h2 className="text-sm font-semibold">Skills</h2>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
)

const WorkExperience = () => (
  <section className="px-4">
    <h2 className="text-sm font-semibold">Work Experience</h2>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Software Engineer</h3>
          <p>Dec 2023 - Sep 2024</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Revolve Labs</p>
          <p>Costa Rica/Remote</p>
        </div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Revolve Labs is a software factory focused on developing custom machine learning applications.</li>
          <li>Led development of OnleyAI, an AI chatbot for OnlyFans models that automates fan engagement and content management</li>
          <li>Built Managent, an AI project management tool, and Bhuma AI, a natural language interface for querying Presto databases</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium">Co-founder & CEO</h3>
        <p>Jun 2020 - Dec 2021</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Dudda</p>
          <p>Lima, Peru</p>
        </div>
        <ul className="list-disc ml-6 space-y-1">
          <li>Engineered two mobile applications utilizing React Native, with Firebase managing the backend operations</li>
          <li>Successfully launched both applications on the App Store and Google Play, adhering to all compliance standards</li>
          <li>Developed a comprehensive web admin panel using React, Firebase, Next.js, and D3.js, facilitating detailed user analytics</li>
          <li>Spearheaded growth strategies, effectively scaling our user base to over a thousand tutors and students, through methods like SEO, both paid and organic traffic campaigns, referral programs, and more</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium">AI Research Intern</h3>
        <p className="text-gray-500">Alegra</p>
        <p className="text-gray-500">Colombia • Remote</p>
        <p className="text-gray-500">Feb 2022 - Sep 2022</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Developed a Data Studio dashboard to monitor company KPIs, analyzing SaaS growth metrics like CAC, MRR, and Churn</li>
          <li>Prepared the annual budget for all departments including Sales, Customer Success, Growth, and Development</li>
          <li>Streamlined cash flow by automating the integration of accounting data with financial forecasts using SQL queries</li>
          <li>Directed the legal establishment of Alegra's new entity, Alero SAS, in Argentina, enhancing regional presence</li>
          <li>Led due diligence for a crowdfunding round on A2censo, successfully raising over USD400k</li>
        </ul>
      </div>
    </div>
  </section>
)

const Education = () => (
  <section className="px-4">
    <h2 className="text-sm font-semibold">Education</h2>
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium">Master of Science in Computer Science</h3>
        <p className="text-gray-500">Stanford University • 2020</p>
        <p>Specialization in Artificial Intelligence and Machine Learning</p>
        <p className="text-gray-600">Relevant Coursework:</p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Deep Learning and Neural Networks</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision and Image Processing</li>
          <li>Reinforcement Learning</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium">Bachelor of Science in Computer Engineering</h3>
        <p className="text-gray-500">Massachusetts Institute of Technology • 2018</p>
        <p>Minor in Mathematics</p>
        <p className="text-gray-600">Certifications:</p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>AWS Certified Machine Learning - Specialty</li>
          <li>Google TensorFlow Developer Certificate</li>
        </ul>
      </div>
    </div>
  </section>
)

const Projects = () => (
  <section className="px-4">
    <h2 className="text-sm font-semibold">Projects</h2>
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium">OnlyFans AI chatter</h3>
        <p className="text-gray-500">Lead Developer • 2023</p>
        <p>Developed a deep learning system for automated medical image analysis using PyTorch and FastAPI. Implemented a custom CNN architecture that achieved 95% accuracy in detecting abnormalities, reducing diagnosis time by 60%. Deployed on AWS using Docker and Kubernetes, serving 10,000+ daily requests.</p>
        <p className="text-gray-600">Technologies: Python, PyTorch, FastAPI, Docker, AWS, Kubernetes</p>
      </div>
      <div>
        <h3 className="text-sm font-medium">Real-time Language Translation System</h3>
        <p className="text-gray-500">Technical Lead • 2022</p>
        <p>Built an end-to-end translation system using transformer models and TensorFlow, supporting 15 languages with 92% accuracy. Optimized inference latency to under 100ms using ONNX runtime. Implemented as a React Native mobile app with 50,000+ downloads.</p>
        <p className="text-gray-600">Technologies: TensorFlow, ONNX, React Native, Node.js, MongoDB</p>
      </div>
      <div>
        <h3 className="text-sm font-medium">Autonomous Drone Navigation System</h3>
        <p className="text-gray-500">Project Lead • 2021</p>
        <p>Developed a computer vision-based navigation system for autonomous drones using OpenCV and ROS. Implemented SLAM algorithms for real-time mapping and obstacle avoidance, achieving 98% success rate in complex environments.</p>
        <p className="text-gray-600">Technologies: Python, OpenCV, ROS, PyTorch, C++</p>
      </div>
    </div>
  </section>
)

const Certifications = () => (
  <section className="px-4">
    <h2 className="text-sm font-semibold">Certifications</h2>
    <div className="space-y-3">
      <div>
        <h3 className="text-sm font-medium">AWS Certified Solutions Architect - Associate</h3>
        <p className="text-gray-500">Amazon Web Services • 2023</p>
      </div>
      <div>
        <h3 className="text-sm font-medium">Microsoft Certified: Azure Developer Associate</h3>
        <p className="text-gray-500">Microsoft • 2023</p>
      </div>
      <div>
        <h3 className="text-sm font-medium">AWS Certified Machine Learning - Specialty</h3>
        <p className="text-gray-500">Amazon Web Services • 2022</p>
      </div>
      <div>
        <h3 className="text-sm font-medium">Google TensorFlow Developer Certificate</h3>
        <p className="text-gray-500">Google • 2022</p>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="mt-8 py-4 text-center text-gray-500 border-t print:hidden">
    © 2024 Alvaro Peña. All rights reserved.
  </footer>
)

export default function Home() {
  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "TensorFlow", "PyTorch", "SQL", "MongoDB", 
    "Docker", "AWS", "Git", "CI/CD", "Machine Learning",    
  ]
  const componentRef = useRef<HTMLDivElement>(null)

  return (
    <main className="max-w-2xl mx-auto text-sm" ref={componentRef}>
      <Header componentRef={componentRef} />
      <Profile />
      <Summary skills={skills} />
      <WorkExperience />
      <Education />
      <Projects />
      <Certifications />
      <Footer />
    </main>
  );
}