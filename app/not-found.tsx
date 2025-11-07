import Link from "next/link";
import BackButton from "./components/BackButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 min-h-[calc(100vh-8rem)]">
      <div className="text-center space-y-8 max-w-md mx-auto">
        {/* 404 Icon */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Large 404 */}
            <div className="text-8xl font-bold text-secondary-600 select-none">
              404
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg opacity-80 animate-float"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full opacity-60 animate-float-delayed"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="text-lg text-secondary-300 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
          >
            Go Home
          </Link>
          <BackButton />
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-secondary-700">
          <p className="text-sm text-secondary-400 mb-4">
            Looking for something specific?
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/" className="text-primary-400 hover:text-primary-300 transition-colors">
              Home
            </Link>
            <Link href="/sign-in" className="text-primary-400 hover:text-primary-300 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}