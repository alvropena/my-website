import type { Metadata } from "next";
import { Roboto, Cutive_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";

export const metadata: Metadata = {
  title: "Alvaro Peña",
  description: "Lima, Perú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >{children}
        </ThemeProvider>
      </body>
    </html>
  );
}
