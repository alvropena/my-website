import React from 'react'
import { Badge } from './ui/badge'
import { Button } from '@/components/ui/button'

export default function AboutMe() {
    return (
        <div id="about" className="py-12 md:py-20 px-4 md:px-6">
            <div className=" text-gray-50 py-20 px-4 md:px-6 flex flex-col  gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">Alvaro Peña</h1>
                </div>
                <p>
                    I&apos;m a software developer with over 5 years of experience building web and mobile applications. I'm
                    passionate about creating intuitive and user-friendly experiences, and I'm always eager to learn new
                    technologies and techniques.
                </p>
                <div className="flex gap-4">
                    <Button>View Projects</Button>
                    <Button variant="outline">Contact Me</Button>
                </div>
            </div>
        </div>
    )
}
