"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LinkedInLogoIcon, EnvelopeClosedIcon, GitHubLogoIcon, DownloadIcon } from "@radix-ui/react-icons"
import { useRef } from "react"

const Profile = () => (
  <>
    <h1 className="text-xl font-bold text-center py-2">Alvaro Peña</h1>
    <p className="text-gray-500 text-center mb-2">AI Engineer</p>
    <div className="flex justify-center gap-3 mb-2">
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

const Summary = ({ skills }: { skills: string[] }) => (
  <div className="px-4 space-y-3">
    <h2 className="text-lg font-semibold">Summary</h2>
    <p className="text-left">
      AI Engineer with expertise in building scalable machine learning applications and full-stack development. Led development of AI-powered solutions at Revolve Labs, including chatbots and natural language interfaces. Previously founded an EdTech startup and brings strong analytical skills from finance background. Proficient in Python, React, and cloud technologies with proven experience deploying ML systems serving thousands of daily users.
    </p>
  </div>
)

const WorkExperience = () => (
  <section className="px-4 space-y-3">
    <h2 className="text-lg font-semibold">Work Experience</h2>
    <div className="space-y-3">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">Software Engineer</h3>
          <p>Dec 2023 - Sep 2024</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            <a 
              href="https://www.revolvelabs.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Revolve Labs
            </a>
          </p>
          <p>Costa Rica • Remote</p>
        </div>
        <ul className="list-disc ml-6 space-y-1 mt-1">
          <li>Revolve Labs is a software factory focused on developing custom machine learning applications.</li>
          <li>Led development of OnleyAI, an AI chatbot for OnlyFans models that automates fan engagement and content management</li>
          <li>Built Managent, an AI project management tool, and Bhuma AI, a natural language interface for querying Presto databases</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">Co-founder & CEO</h3>
          <p>Jun 2020 - Dec 2021</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            <a 
              href="https://dudda.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Dudda
            </a>
          </p>
          <p>Lima, Peru</p>
        </div>
        <ul className="list-disc ml-6 space-y-1 mt-1">
          <li>Engineered and successfully launched two React Native mobile applications with Firebase backend on App Store and Google Play, adhering to compliance standards</li>
          <li>Developed a comprehensive web admin panel using React, Firebase, Next.js, and D3.js to facilitate detailed user analytics.</li>
          <li>Spearheaded growth strategies, effectively scaling our user base to over a thousand tutors and students</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">Financial Analyst</h3>
          <p>Feb 2022 - Sep 2022</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            <a 
              href="https://alegra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Alegra
            </a>
          </p>
          <p>Colombia • Remote</p>
        </div>
        <ul className="list-disc ml-6 space-y-1 mt-1">
          <li>Developed a Data Studio dashboard to monitor company KPIs, analyzing SaaS growth metrics</li>
          <li>Prepared the annual budget for all departments including Sales, Customer Success, Growth, and Development</li>
          <li>Streamlined cash flow by automating the integration of accounting data with financial forecasts using SQL queries</li>
          <li>Led due diligence for a crowdfunding round on A2censo, successfully raising over USD400k</li>
        </ul>
      </div>
    </div>
  </section>
)

const Education = () => (
  <section className="px-4 space-y-3">
    <h2 className="text-lg font-semibold">Education</h2>
    <div className="space-y-3">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">Bachelor of Science - BS, Economics</h3>
          <p>2024 - 2025</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            <a
              href="https://www.csueastbay.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              California State University, East Bay
            </a>
          </p>
          <p>Hayward, CA</p>
        </div>
        <p className="mt-1">Grade: Summa Cum Laude</p>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">Bachelor of Science - BS, Finance</h3>
          <p>2018 - 2022</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            <a
              href="https://www.up.edu.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Universidad del Pacífico (PE)
            </a>
          </p>
          <p>Lima, PE</p>
        </div>
        <p className="mt-1">Grade: Dropout</p>
        <p className="mt-1">Activities and societies: Founded Lee UP in 2021 as the university's first book club, with the goal of promoting reading among students on campus through a partnership with Librerías SBS, the campus bookstore.</p>
      </div>
    </div>
  </section>
)

const Projects = () => (
  <section className="px-4 space-y-3">
    <h2 className="text-lg font-semibold">Projects</h2>
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-medium">OnlyFans AI chatter</h3>
        <p className="text-gray-500">Lead Developer • 2023</p>
        <p className="mt-1">Developed a deep learning system for automated medical image analysis using PyTorch and FastAPI. Implemented a custom CNN architecture that achieved 95% accuracy in detecting abnormalities, reducing diagnosis time by 60%. Deployed on AWS using Docker and Kubernetes, serving 10,000+ daily requests.</p>
        <p className="text-gray-600 mt-1">Technologies: Python, PyTorch, FastAPI, Docker, AWS, Kubernetes</p>
      </div>
      <div>
        <h3 className="text-base font-medium">Real-time Language Translation System</h3>
        <p className="text-gray-500">Technical Lead • 2022</p>
        <p className="mt-1">Built an end-to-end translation system using transformer models and TensorFlow, supporting 15 languages with 92% accuracy. Optimized inference latency to under 100ms using ONNX runtime. Implemented as a React Native mobile app with 50,000+ downloads.</p>
        <p className="text-gray-600 mt-1">Technologies: TensorFlow, ONNX, React Native, Node.js, MongoDB</p>
      </div>      
    </div>
  </section>
)

const Certifications = () => (
  <section className="px-4 space-y-3">
    <h2 className="text-lg font-semibold">Certifications</h2>
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-medium">Next.js 14 & React - The Complete Guide</h3>
        <p className="text-gray-500">Udemy • Issued Apr 2024</p>
        <p className="text-gray-500">Credential ID: UC-0827066b-3a11-440c-b133-6a38dfee5473</p>
        
      </div>
      <div>
        <h3 className="text-base font-medium">React - The Complete Guide 2024</h3>
        <p className="text-gray-500">Udemy • Issued Apr 2024</p>
        <p className="text-gray-500">Credential ID: UC-e5cba369-ba61-4819-8672-edbef1fc2603</p>
        
      </div>
      <div>
        <h3 className="text-base font-medium">Docker and Kubernetes: The Complete Guide</h3>
        <p className="text-gray-500">Udemy • Issued Mar 2024</p>
        <p className="text-gray-500">Credential ID: UC-bd2b77e6-0fc6-42e5-a594-1cc6b1b49b44</p>
        
      </div>
      <div>
        <h3 className="text-base font-medium">FastAPI - The Complete Course 2024 (Beginner + Advanced)</h3>
        <p className="text-gray-500">Udemy • Issued Mar 2024</p>
        <p className="text-gray-500">Credential ID: UC-5a3dfe6b-5b9d-4a72-839a-69a60c57782e</p>
        
      </div>
    </div>
  </section>
)

const Skills = ({ skills }: { skills: string[] }) => (
  <section className="px-4 space-y-3">
    <h2 className="text-lg font-semibold">Skills</h2>
    <div className="grid grid-cols-8 gap-2">
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary" className="justify-center mx-1 w-full text-xs">
          {skill}
        </Badge>
      ))}
    </div>
  </section>
)

const Languages = () => (
  <section className="px-4 space-y-3">
    <h2 className="text-lg font-semibold">Languages</h2>
    <div className="space-y-2">
      <div>
        <p className="font-medium">English</p>
        <p className="text-gray-500">Native or bilingual proficiency</p>
      </div>
      <div>
        <p className="font-medium">Italian</p>
        <p className="text-gray-500">Elementary proficiency</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-6 py-3 text-center text-gray-500 border-t print:hidden">
    <div className="flex justify-between items-center px-4">
      <div className="flex gap-2">        
      © 2024 Alvaro Peña. All rights reserved.      
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon">
          <DownloadIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Download Resume</span>
        </Button>
      </div>
    </div>
  </footer>
)

export default function Home() {
  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "FastAPI", "SQLAlchemy", "SQL", "MongoDB",
    "Docker", "Kubernetes", "AWS", "Git", "CI/CD",
     "TensorFlow", "PyTorch",
    "React.js", "Redux.js", "Vercel"
  ];

  const skillCategories = [
    {
      title: "Backend",
      skills: ["FastAPI", "Python", "SQLAlchemy", "Node.js"]
    },
    {
      title: "Infrastructure", 
      skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Redux.js", "React Hooks", "React Router", "Next.js", "Vercel"]
    }
  ];
  const componentRef = useRef<HTMLDivElement>(null)

  return (
    <main className="max-w-2xl mx-auto text-sm" ref={componentRef}>
      <Profile />
      <Summary skills={skills} />
      <WorkExperience />
      <Education />
      <Projects />
      <Certifications />
      <Skills skills={skills} />
      <Languages />
      <Footer />
    </main>
  );
}