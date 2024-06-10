import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'

export default function Projects() {
    return (
        <section id="projects" className="py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Projects</h2>
                    <p>Here are some of the projects I've worked on over the years. Click on a project to learn more.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link href="#" className="group" prefetch={false}>
                        <Card className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/placeholder.svg"
                                width={600}
                                height={400}
                                alt="Project 1"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold">Project 1</h3>
                                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                    A web application that helps users manage their to-do lists and track their productivity.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link href="#" className="group" prefetch={false}>
                        <Card className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/placeholder.svg"
                                width={600}
                                height={400}
                                alt="Project 2"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold">Project 2</h3>
                                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                    A mobile app that helps users track their fitness goals and monitor their progress.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link href="#" className="group" prefetch={false}>
                        <Card className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/placeholder.svg"
                                width={600}
                                height={400}
                                alt="Project 3"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold">Project 3</h3>
                                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                    A web-based platform that helps businesses manage their inventory and sales data.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    )
}
