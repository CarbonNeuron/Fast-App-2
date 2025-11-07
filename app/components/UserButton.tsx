"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function UserButton() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (status === "loading") {
    return (
      <div className="flex items-center space-x-2 bg-secondary-700 px-4 py-2 rounded-lg animate-pulse">
        <div className="w-6 h-6 bg-secondary-600 rounded-full"></div>
        <div className="w-16 h-4 bg-secondary-600 rounded"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <Link 
        href="/sign-in" 
        className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 px-4 py-2 rounded-lg text-sm font-medium text-white"
      >
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
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 bg-secondary-700 hover:bg-secondary-600 transition-colors duration-200 px-4 py-2 rounded-lg text-sm font-medium text-white"
      >
        {session.user?.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || "User"}
            className="w-6 h-6 rounded-full"
          />
        ) : (
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
        )}
        <span className="max-w-24 truncate">
          {session.user?.name || session.user?.email || "User"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-secondary-800 rounded-lg shadow-xl border border-secondary-700 z-20">
            <div className="py-1">
              <div className="px-4 py-2 border-b border-secondary-700">
                <p className="text-sm font-medium text-white truncate">
                  {session.user?.name || "User"}
                </p>
                <p className="text-xs text-secondary-300 truncate">
                  {session.user?.email}
                </p>
              </div>
              
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}