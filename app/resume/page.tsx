export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light mb-8">resume</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-light mb-4">education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">University Name</h3>
            <p className="text-sm text-gray-600">Degree • 20XX - 20XX</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-light mb-4">experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Company Name</h3>
            <p className="text-sm text-gray-600">Position • 20XX - Present</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Achievement or responsibility one</li>
              <li>Achievement or responsibility two</li>
              <li>Achievement or responsibility three</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-light mb-4">skills</h2>
        <div className="space-y-2 text-gray-600">
          <p>Languages: TypeScript, JavaScript, Python</p>
          <p>Frontend: React, Next.js, TailwindCSS</p>
          <p>Other: Git, Docker, AWS</p>
        </div>
      </section>
    </div>
  )
}
