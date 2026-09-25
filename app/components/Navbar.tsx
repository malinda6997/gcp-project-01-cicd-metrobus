"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const active = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#d71920] shadow-md">

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="MetroBus Sri Lanka"
            className="h-11 w-auto object-contain"
          />
        </Link>


        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className={`relative py-2 text-sm font-semibold transition ${
              active("/")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            Home

            {active("/") && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-white" />
            )}
          </Link>


          <Link
            href="/routes"
            className={`relative py-2 text-sm font-semibold transition ${
              active("/routes")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            Routes & Services

            {active("/routes") && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-white" />
            )}
          </Link>


          <Link
            href="/about"
            className={`relative py-2 text-sm font-semibold transition ${
              active("/about")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            About

            {active("/about") && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-white" />
            )}
          </Link>

        </nav>


        {/* Desktop Button */}

        <Link
          href="/routes"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#d71920] transition hover:bg-gray-100 md:block"
        >
          Find a Route
        </Link>


        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 md:hidden"
        >
          <div className="flex flex-col gap-1.5">

            <span
              className={`h-0.5 w-5 bg-white transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-white transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />

          </div>
        </button>

      </div>


      {/* Mobile Navigation */}

      {menuOpen && (
        <div className="border-t border-white/20 bg-[#d71920] px-5 pb-6 pt-4 md:hidden">

          <nav className="flex flex-col gap-1">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                active("/")
                  ? "bg-white text-[#d71920]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            <Link
              href="/routes"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                active("/routes")
                  ? "bg-white text-[#d71920]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Routes & Services
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                active("/about")
                  ? "bg-white text-[#d71920]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>

            <Link
              href="/routes"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#d71920]"
            >
              Find a Route
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}