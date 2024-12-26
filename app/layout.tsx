import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider";

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
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
