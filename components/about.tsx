import React from 'react'
import { Badge } from './ui/badge'

export default function AboutMe() {
    return (
        <section id="about" className="py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <p>
                        I'm a software developer with over 5 years of experience building web and mobile applications. I'm
                        passionate about creating intuitive and user-friendly experiences, and I'm always eager to learn new
                        technologies and techniques.
                    </p>
                    <p>
                        In my free time, I enjoy reading, hiking, and experimenting with new programming languages and
                        frameworks. I'm also an avid writer and have published several essays on various topics related to
                        technology and software development.
                    </p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Django</Badge>
                        <Badge variant="secondary">SQL</Badge>
                        <Badge variant="secondary">Git</Badge>
                        <Badge variant="secondary">AWS</Badge>
                    </div>
                </div>
            </div>
        </section>
    )
}
