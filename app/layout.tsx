import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider";
import Link from 'next/link';
import { GitHubLogoIcon, TwitterLogoIcon, VideoIcon } from "@radix-ui/react-icons";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: "Alvaro Peña",
	description: "Alvaro Peña",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body className="antialiased">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<header className="fixed w-full top-0 py-4">
							<nav className="max-w-2xl mx-auto px-4">
								<ul className="flex gap-4 text-sm text-gray-600 justify-center">
									<li>
										<Link href="/" className="hover:text-blue-600 group">
											<span className="group-hover:hidden">home</span>
											<span className="hidden group-hover:inline">[home]</span>
										</Link>
									</li>
									<li>
										<Link href="/blog" className="hover:text-blue-600 group">
											<span className="group-hover:hidden">blog</span>
											<span className="hidden group-hover:inline">[blog]</span>
										</Link>
									</li>
									<li>
										<Link href="/projects" className="hover:text-blue-600 group">
											<span className="group-hover:hidden">projects</span>
											<span className="hidden group-hover:inline">[projects]</span>
										</Link>
									</li>
									<li>
										<Link href="/resume" className="hover:text-blue-600 group">
											<span className="group-hover:hidden">resume</span>
											<span className="hidden group-hover:inline">[resume]</span>
										</Link>
									</li>
									<li>
										<Link href="/contact" className="hover:text-blue-600 group">
											<span className="group-hover:hidden">contact</span>
											<span className="hidden group-hover:inline">[contact]</span>
										</Link>
									</li>
								</ul>
							</nav>
						</header>
						{children}
						<Analytics />
						<footer className="fixed w-full bottom-0 py-4">
							<div className="max-w-2xl mx-auto px-4">
								<div className="flex justify-center gap-4 text-gray-600">
									<a href="https://github.com/alvropena" className="hover:text-blue-600">
										<GitHubLogoIcon className="w-4 h-4" />
									</a>
									<a href="https://twitter.com/alvropenaa" className="hover:text-blue-600">
										<TwitterLogoIcon className="w-4 h-4" />
									</a>
									<a href="https://youtube.com/@alvropena" className="hover:text-blue-600">
										<VideoIcon className="w-4 h-4" />
									</a>
								</div>
							</div>
						</footer>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
