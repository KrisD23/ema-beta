"use client";

import { useState } from "react";
import Image from "next/image";
import { NAVLINKS } from "@/lib/constants";

const Navbar = () => {
  const [, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/EmaLogo.png"
            alt="Ema Logo"
            width={100}
            height={40}
            className="object-contain"
          />
          <div className="hidden lg:block h-8 w-px bg-gray-300"></div>
          <div className="hidden lg:block text-xs text-gray-600 leading-tight">
            <div>Enterprise</div>
            <div>Machine</div>
            <div>Assistant</div>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVLINKS.map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span>{item.name}</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          ))}
        </div>

        {/* Desktop Hire Ema Button */}
        <button className="hidden lg:block bg-primary-green text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Hire Ema
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-white border-t border-gray-100">
          {/* Mobile Menu Items */}
          <div className="flex flex-col space-y-4">
            {NAVLINKS.map((item) => (
              <button
                key={item.name}
                className="flex items-center justify-between text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => {
                  // Handle navigation here
                }}
              >
                <span className="text-base font-medium">{item.name}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Mobile Hire Ema Button */}
          <button className="w-full mt-6 bg-primary-green text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
            Hire Ema
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
