import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvaro Peña",
  description: "Alvaro Peña",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['Times_New_Roman'] antialiased">
        {children}
      </body>
    </html>
  );
}
