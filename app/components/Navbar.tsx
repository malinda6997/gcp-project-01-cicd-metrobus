"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Routes",
      href: "/routes",
    },
    {
      name: "LMT-Go",
      href: "/lmt-go",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#d71920]">

      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          className="relative flex h-full items-center"
        >
          <Image
            src="/logo.png"
            alt="Sri Lanka Metro"
            width={145}
            height={55}
            priority
            className="h-auto w-[125px] object-contain sm:w-[140px]"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-white/90 transition hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>

          ))}

        </div>


        {/* =================================================
            DESKTOP CTA
        ================================================== */}

        <Link
          href="/routes"
          className="hidden rounded-full bg-white px-6 py-3 text-sm font-bold text-[#d71920] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-gray-100 md:block"
        >
          Find a Route
        </Link>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">

            <span
              className={`block h-0.5 w-5 bg-white transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />

          </div>
        </button>

      </nav>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================== */}

      {menuOpen && (

        <div className="border-t border-white/10 bg-[#c9151c] px-5 py-5 md:hidden">

          <div className="mx-auto max-w-7xl space-y-1">

            {navItems.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {item.name}
              </Link>

            ))}


            <Link
              href="/routes"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-[#d71920]"
            >
              Find a Route
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}