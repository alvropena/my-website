import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CalendarIcon, UsersIcon } from "lucide-react"

export default function ProjectsCard() {
    return (
        <div className="grid space-y-2">
            <div className="relative flex flex-col items-start gap-2 p-4 border rounded-lg md:p-6">
                <div className="absolute inset-0 flex items-center p-4">
                    <Button variant="ghost" size="icon" className="rounded-full ml-auto">
                        <ArrowRightIcon className="w-4 h-4" />
                        <span className="sr-only">View project</span>
                    </Button>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className="font-semibold">Next.js Website</div>
                    <div className="text-sm leading-none">A feature-rich website built with Next.js</div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-gray-500 dark:text-gray-400">Created 3 months ago</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <UsersIcon className="w-4 h-4" />
                        <span className="text-gray-500 dark:text-gray-400">Team of 2</span>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col items-start gap-2 p-4 border rounded-lg md:p-6">
                <div className="absolute inset-0 flex items-center p-4">
                    <Button variant="ghost" size="icon" className="rounded-full ml-auto">
                        <ArrowRightIcon className="w-4 h-4" />
                        <span className="sr-only">View project</span>
                    </Button>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className="font-semibold">Acme Inc Mobile App</div>
                    <div className="text-sm leading-none">Cross-platform mobile app for Acme Inc</div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-gray-500 dark:text-gray-400">Created 1 year ago</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <UsersIcon className="w-4 h-4" />
                        <span className="text-gray-500 dark:text-gray-400">Team of 5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}