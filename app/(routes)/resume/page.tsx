export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-8">resume</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-light mb-4">education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">University of Florida</h3>
            <p className="text-sm text-gray-600">B.S. in Computer Science • 2020 - 2024</p>
            <p className="text-sm text-gray-600">Minor in Mathematics</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-light mb-4">experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Software Engineering Intern</h3>
            <p className="text-sm text-gray-600">Tech Company • Summer 2023</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Developed and maintained full-stack web applications</li>
              <li>Collaborated with cross-functional teams using agile methodologies</li>
              <li>Implemented responsive designs and improved user experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-light mb-4">skills</h2>
        <div className="space-y-2 text-gray-600">
          <p>Languages: TypeScript, JavaScript, Python, Java, C++</p>
          <p>Frontend: React, Next.js, TailwindCSS, HTML/CSS</p>
          <p>Backend: Node.js, Express, PostgreSQL, MongoDB</p>
          <p>Tools: Git, Docker, AWS, Vercel</p>
        </div>
      </section>
    </div>
  )
}
