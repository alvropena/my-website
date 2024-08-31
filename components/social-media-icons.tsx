import React from 'react'
import { Button } from './ui/button'
import { Mail, X, LinkedinIcon, Github } from 'lucide-react'

export default function SocialMediaIcons() {
    return (
        <div className="flex space-x-2 mb-4">
            <Button variant="outline" size="icon">
                <Mail />
            </Button>
            <Button variant="outline" size="icon">
                <LinkedinIcon />
            </Button>
            <Button variant="outline" size="icon">
                <X />
            </Button>
            <Button variant="outline" size="icon">
                <Github />
            </Button>
        </div>
    )
}
