import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Assistant",
  description: "A premium personal AI assistant designed for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground bg-[url('/mountain_bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed bg-blend-overlay" style={{ backgroundColor: 'rgba(5, 8, 16, 0.85)' }}>
        {children}
      </body>
    </html>
  );
}
