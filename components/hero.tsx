import React from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="bg-gray-900 text-gray-50 py-20 px-4 md:px-6 flex flex-col items-center justify-center gap-6">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold">Alvaro Peña</h1>
                <p className="text-lg">Software Developer</p>
                <p>
                    I'm a passionate software developer with a love for building innovative and user-friendly applications.
                </p>
            </div>
            <div className="flex gap-4">
                <Button>View Projects</Button>
                <Button variant="outline">Contact Me</Button>
            </div>
        </section>
    )
}
