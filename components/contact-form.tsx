import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
    return (
        <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Contact Me</h2>
                    <p>
                        If you'd like to get in touch, please fill out the form below and I'll get back to you as soon as I can.
                    </p>
                </div>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input type="text" placeholder="Name" className="w-full" />
                        <Input type="email" placeholder="Email" className="w-full" />
                    </div>
                    <Input type="text" placeholder="Subject" className="w-full" />
                    <Textarea placeholder="Message" className="w-full" rows={5} />
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}
