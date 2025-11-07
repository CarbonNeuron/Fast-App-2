import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo";
import UserButton from "./components/UserButton";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast App 2 - Folder Browser",
  description:
    "Navigate through digital pathways with an intuitive file browser interface",
  icons: {
    icon: [
      // Modern browsers - SVG support
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.svg", type: "image/svg+xml", sizes: "16x16" },
      { url: "/favicon-32.svg", type: "image/svg+xml", sizes: "32x32" }
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-secondary-900`}
      >
        <Providers>
          {/* Header */}
          <header className="bg-secondary-800 shadow-lg border-b border-secondary-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                  <Logo href="/" className="flex-shrink-0" />
                </div>

                {/* User Button */}
                <div className="flex items-center space-x-4">
                  <UserButton />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
