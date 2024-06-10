import type { Metadata } from "next";
import { Roboto, Cutive_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";

const cutive_mono = Cutive_Mono({
  weight: ["400"],
  subsets: ["latin"]
});

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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={cutive_mono.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
