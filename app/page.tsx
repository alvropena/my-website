import {
	GitlabIcon as GitHub,
	Linkedin,
	Twitter,
	Mail,
	ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Content() {
	const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Python"];
	const projects = [
		{
			title: "Project 1",
			description: "A brief description of Project 1",
			link: "#",
		},
		{
			title: "Project 2",
			description: "A brief description of Project 2",
			link: "#",
		},
		{
			title: "Project 3",
			description: "A brief description of Project 3",
			link: "#",
		},
	];

	return (
		<main className="container mx-auto px-4 py-8 space-y-16">
			<section className="text-center">
				<h2 className="text-3xl font-light mb-4">Full Stack Developer</h2>
				<p className="text-gray-600 dark:text-gray-400 mb-6">
					Crafting elegant solutions to complex problems
				</p>
				<div className="flex justify-center space-x-4">
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
					>
						<GitHub size={24} />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
					>
						<Linkedin size={24} />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
					>
						<Twitter size={24} />
					</a>
					<a
						href="mailto:john@example.com"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
					>
						<Mail size={24} />
					</a>
				</div>
			</section>

			<section>
				<h3 className="text-2xl font-light mb-4">Skills</h3>
				<div className="flex flex-wrap gap-2">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			<section>
				<h3 className="text-2xl font-light mb-4">Projects</h3>
				<div className="space-y-6">
					{projects.map((project, index) => (
						<div
							key={index}
							className="border-t border-gray-200 dark:border-gray-800 pt-4"
						>
							<h4 className="text-xl font-light mb-2">{project.title}</h4>
							<p className="text-gray-600 dark:text-gray-400 mb-2">
								{project.description}
							</p>
							<a
								href={project.link}
								className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
							>
								View Project
							</a>
						</div>
					))}
				</div>
			</section>

			<section
				id="agency"
				className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg"
			>
				<h3 className="text-2xl font-light mb-4">
					Need a Software Development Team?
				</h3>
				<p className="text-gray-600 dark:text-gray-400 mb-6">
					Check out my software development agency for top-notch solutions
					tailored to your business needs.
				</p>
				<Link
					href="/agency"
					className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
				>
					Learn More About Our Services
					<ArrowRight size={20} className="ml-2" />
				</Link>
			</section>

			<section>
				<h3 className="text-2xl font-light mb-4">Contact</h3>
				<p className="text-gray-600 dark:text-gray-400">
					Feel free to reach out to me at{" "}
					<a
						href="mailto:john@example.com"
						className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
					>
						john@example.com
					</a>
				</p>
			</section>
		</main>
	);
}
