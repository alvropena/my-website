import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider";
import Link from "next/link";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
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
            <header className="fixed max-w-2xl mx-auto left-0 right-0 top-0 py-4 bg-white border-b border-gray-100">
              <nav className="flex justify-between text-sm text-gray-600 px-4">
                <Link href="/" className="hover:text-blue-600 group">
                  <span className="group-hover:hidden">ap</span>
                  <span className="hidden group-hover:inline">[ap]</span>
                </Link>
                <ul className="flex gap-4 ">
                  <li>
                    <Link href="/blog" className="hover:text-blue-600 group">
                      <span className="group-hover:hidden">blog</span>
                      <span className="hidden group-hover:inline">[blog]</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="hover:text-blue-600 group"
                    >
                      <span className="group-hover:hidden">projects</span>
                      <span className="hidden group-hover:inline">
                        [projects]
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resume" className="hover:text-blue-600 group">
                      <span className="group-hover:hidden">resume</span>
                      <span className="hidden group-hover:inline">
                        [resume]
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-600 group">
                      <span className="group-hover:hidden">contact</span>
                      <span className="hidden group-hover:inline">
                        [contact]
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
            {children}
            <Analytics />
            <footer className="fixed max-w-2xl mx-auto left-0 right-0 bottom-0 py-4 bg-white border-t border-gray-100">
              <div className="px-4">
                <div className="flex justify-between items-center text-gray-600">
                  <span className="text-sm">
                    source on{" "}
                    <a href="https://github.com/alvropena/my-website" className="hover:text-blue-600 group">
                      <span className="group-hover:hidden">github</span>
                      <span className="hidden group-hover:inline">[github]</span>
                    </a>
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/alvropena"
                      className="hover:text-blue-600"
                    >
                      <GitHubLogoIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://twitter.com/alvropenaa"
                      className="hover:text-blue-600"
                    >
                      <TwitterLogoIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://youtube.com/@alvropena"
                      className="hover:text-blue-600"
                    >
                      <VideoIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
