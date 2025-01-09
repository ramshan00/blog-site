"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-black text-4xl font-extrabold tracking-tight hover:text-gray-500 transition">
            Genocide
          </span>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex space-x-8">
          <Link
            href="/"
            className="text-black font-medium hover:text-gray-500 transition"
          >
            Home
          </Link>
          <Link
            href="/latest"
            className="text-black font-medium hover:text-gray-500 transition"
          >
            Latest
          </Link>
          <Link
            href="/protest"
            className="text-black font-medium hover:text-gray-500 transition"
          >
            Protest
          </Link>
          <Link
            href="/about"
            className="text-black font-medium hover:text-gray-500 transition"
          >
            About
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-md mt-2 p-4">
          <Link
            href="/"
            className="block text-black font-medium hover:text-gray-500 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/latest"
            className="block text-black font-medium hover:text-gray-500 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            Latest
          </Link>
          <Link
            href="/protest"
            className="block text-black font-medium hover:text-gray-500 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            Protest
          </Link>
          <Link
            href="/about"
            className="block text-black font-medium hover:text-gray-500 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
