import React from 'react'
import { CodeIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    return (
        <header className="text-gray-50 py-6 px-4 md:px-6 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <span className="text-xl font-semibold">Alvaro Peña</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                    Projects
                </Link>
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                    Essays
                </Link>
                <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <Button variant="outline" size="sm" className="md:hidden" asChild>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <MenuIcon className="w-5 h-5" />
                    <span>Menu</span>
                </Link>
            </Button>
        </header>
    )
}
