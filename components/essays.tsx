import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Essays() {
    return (
        <section id="essays" className="py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Essays</h2>
                    <p>
                        Every Sunday at 7 AM I release a new weekly newsletter. I write about technology, history, personal development, etc.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link href="#" className="group" prefetch={false}>
                        <Card className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/placeholder.svg"
                                width={600}
                                height={400}
                                alt="Essay 1"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold">The Future of Web Development</h3>
                                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                    An exploration of the latest trends and technologies shaping the future of web development.
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
                                alt="Essay 1"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold">The Future of Web Development</h3>
                                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                    An exploration of the latest trends and technologies shaping the future of web development.
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
                                alt="Essay 2"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold">The Importance of Accessibility in Web Design</h3>
                                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                    A discussion on the importance of designing accessible web experiences for all users.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    )
}
