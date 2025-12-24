"use client";

import { useState } from "react";
import Image from "next/image";
import { NAVLINKS } from "@/lib/constants";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="text-xs text-gray-600 leading-tight">
            <div>Enterprise</div>
            <div>Machine</div>
            <div>Assistant</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex items-center gap-8">
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

        {/* Hire Ema Button */}
        <button className="bg-primary-green text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Hire Ema
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
