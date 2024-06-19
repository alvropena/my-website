import React from 'react'
import { Button } from './ui/button'
import { Mail, X, LinkedinIcon, Github } from 'lucide-react'

export default function SocialMediaIcons() {
    return (
        <div className="flex space-x-2 mb-4">
            <Button>
                <Mail />
            </Button>
            <Button>
                <LinkedinIcon />
            </Button>
            <Button>
                <X />
            </Button>
            <Button>
                <Github />
            </Button>
        </div>
    )
}
