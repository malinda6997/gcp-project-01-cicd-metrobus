"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}

        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="MetroBus"
            className="h-10 w-auto object-contain"
          />
        </Link>


        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-9 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-[#d71920]"
          >
            Home
          </Link>

          <Link
            href="/routes"
            className="text-sm font-medium text-gray-700 transition hover:text-[#d71920]"
          >
            Routes & Services
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-[#d71920]"
          >
            About
          </Link>

        </nav>


        {/* Desktop CTA */}

        <Link
          href="/routes"
          className="hidden rounded-full bg-[#d71920] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b51218] md:block"
        >
          Explore Routes
        </Link>


        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-black"></span>
            <span className="block h-0.5 w-5 bg-black"></span>
            <span className="block h-0.5 w-5 bg-black"></span>
          </div>
        </button>

      </div>


      {/* Mobile Navigation */}

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden">

          <nav className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-medium"
            >
              Home
            </Link>

            <Link
              href="/routes"
              onClick={() => setMenuOpen(false)}
              className="font-medium"
            >
              Routes & Services
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-medium"
            >
              About
            </Link>

            <Link
              href="/routes"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full bg-[#d71920] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Explore Routes
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}