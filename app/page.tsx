import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoonIcon } from "lucide-react"
import { LinkedInLogoIcon, EnvelopeClosedIcon, GitHubLogoIcon, DownloadIcon } from "@radix-ui/react-icons"

export default function Home() {
  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "TensorFlow", "PyTorch", "SQL", "MongoDB", 
    "Docker", "AWS", "Git", "CI/CD", "Machine Learning",    
  ]

  return (
    <main className="max-w-2xl mx-auto text-sm">
      <header className="flex justify-between items-center p-3 border-b w-full max-w-none">
        <div className="flex gap-2">
          <Button variant="secondary">
            Edit
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon">
            <DownloadIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Download</span>
          </Button>
        </div>
      </header>
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
      <section className="px-4">
        <h2 className="text-sm font-semibold">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">Senior AI Engineer</h3>
            <p className="text-gray-500">Lorem Technologies • New York, NY • Jan 2022 - Present</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Lorem ipsum dolor sit amet, optimized model inference speed by 60% through implementation of ONNX runtime and TensorRT</li>
              <li>Consectetur adipiscing elit, led team of 5 engineers in developing new NLP pipeline that reduced processing time by 45%</li>
              <li>Sed do eiusmod tempor incididunt ut labore, deployed 12 production ML models serving 1M+ daily requests</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Machine Learning Engineer</h3>
            <p className="text-gray-500">Ipsum Solutions • San Francisco, CA • Jun 2020 - Dec 2021</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Ut enim ad minim veniam, developed computer vision system that improved quality control accuracy by 35%</li>
              <li>Quis nostrud exercitation ullamco, reduced cloud computing costs by 50% through optimization of training pipeline</li>
              <li>Duis aute irure dolor in reprehenderit, mentored 3 junior engineers and led 2 successful project implementations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">AI Research Intern</h3>
            <p className="text-gray-500">Dolor Research Lab • Boston, MA • May 2019 - Aug 2019</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Excepteur sint occaecat cupidatat, published 2 research papers on novel deep learning architectures</li>
              <li>Sunt in culpa qui officia deserunt, implemented prototype that achieved 92% accuracy on benchmark dataset</li>
            </ul>
          </div>
        </div>
      </section>
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
      <section className="px-4">
        <h2 className="text-sm font-semibold">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">AI-Powered Medical Image Analysis Platform</h3>
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
      <footer className="mt-8 py-4 text-center text-gray-500 border-t">
        © 2024 Alvaro Peña. All rights reserved.
      </footer>
    </main>
  );
}
