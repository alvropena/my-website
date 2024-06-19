import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { Button } from "./ui/button"

const essays = [
    {
        date: "2024-01-01",
        title: "The Future of AI",
    },
    {
        date: "2024-02-15",
        title: "The Impact of Technology on Society",
    },
    {
        date: "2024-03-10",
        title: "Understanding Quantum Computing",
    },
    {
        date: "2024-04-22",
        title: "The Rise of Blockchain",
    },
    {
        date: "2024-05-18",
        title: "Ethics in Artificial Intelligence",
    },
    {
        date: "2024-06-05",
        title: "The Role of Data Science in Business",
    },
    {
        date: "2024-07-20",
        title: "Cybersecurity in the Modern World",
    },
]

export function EssayTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Title</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {essays.map((essay, index) => (
                    <TableRow key={index}>
                        <TableCell>{essay.date}</TableCell>
                        <Link href={"https://google.com"}>
                            <Button variant={"link"}>
                                {essay.title}
                            </Button>
                        </Link>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
