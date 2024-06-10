import React from 'react'
import Link from 'next/link'
import { InstagramIcon, LinkedinIcon } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="text-gray-50 py-6 px-4 md:px-6 flex items-center justify-between">
            <div className="text-sm">&copy; 2024 Alvaro Peña. All rights reserved.</div>
            <div className="flex items-center gap-4">
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                    <InstagramIcon />
                </Link>
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                    <LinkedinIcon />
                </Link>
            </div>
        </footer>
    )
}
