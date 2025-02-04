import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider";
import Link from 'next/link';

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
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
