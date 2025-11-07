import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Folder Browser",
  description:
    "Navigate through digital pathways with an intuitive numpad interface",
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
        {/* Header */}
        <header className="bg-secondary-800 shadow-lg border-b border-secondary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FA</span>
                  </div>
                  <span className="text-xl font-semibold text-white">
                    Fast App 2
                  </span>
                </Link>
              </div>

              {/* Account Button */}
              <div className="flex items-center space-x-4">
                <Link href="/sign-in" className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 px-4 py-2 rounded-lg text-sm font-medium text-white">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Sign in</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
