"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const images = [
  {
    src: "/img1.jpg",
    alt: "MetroBus buses in Sri Lanka",
  },
  {
    src: "/img2.jpg",
    alt: "MetroBus public transportation",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-black text-white">

      {/* =====================================================
          BACKGROUND IMAGES
      ====================================================== */}

      <div className="absolute inset-0">

        {images.map((image, index) => (
          <div
            key={image.src}
            className={`hero-background-image absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              activeImage === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`h-full w-full object-cover ${
                activeImage === index
                  ? "hero-image-active"
                  : "hero-image-inactive"
              }`}
            />
          </div>
        ))}

      </div>


      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />


      {/* =====================================================
          RED ATMOSPHERIC GLOW
      ====================================================== */}

      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#d71920]/15 blur-[140px]" />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-5 py-20 lg:px-8">

        <div className="max-w-3xl">

          {/* Small label */}

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-md">

            <span className="h-2 w-2 rounded-full bg-[#d71920] shadow-[0_0_12px_#d71920]" />

            <span className="text-xs font-semibold tracking-[0.2em] text-white/90">
              MODERN PUBLIC TRANSPORT
            </span>

          </div>


          {/* Heading */}

          <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[82px]">

            Move through

            <span className="block text-[#ff2027]">
              Sri Lanka smarter.
            </span>

          </h1>


          {/* Description */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">

            Discover routes, understand your journey and
            connect with the places that matter. MetroBus
            brings a simpler digital experience to everyday
            public transportation.

          </p>


          {/* Buttons */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/routes"
              className="rounded-full bg-[#d71920] px-7 py-3.5 text-center text-sm font-bold shadow-lg shadow-red-900/30 transition duration-300 hover:bg-[#b51218] hover:-translate-y-0.5"
            >
              Explore Routes →
            </Link>

            <Link
              href="#search"
              className="rounded-full border border-white/30 bg-black/20 px-7 py-3.5 text-center text-sm font-bold backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
            >
              Find Your Journey
            </Link>

          </div>


          {/* Stats */}

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-7">

            <div>

              <p className="text-xl font-bold">
                15+
              </p>

              <p className="mt-1 text-xs text-white/50">
                Proposed routes
              </p>

            </div>


            <div>

              <p className="text-xl font-bold">
                24/7
              </p>

              <p className="mt-1 text-xs text-white/50">
                Everyday mobility
              </p>

            </div>


            <div>

              <p className="text-xl font-bold">
                LK
              </p>

              <p className="mt-1 text-xs text-white/50">
                Sri Lankan network
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SLIDESHOW INDICATOR
      ====================================================== */}

      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3 sm:right-10">

        <div className="flex gap-2">

          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeImage === index
                  ? "w-10 bg-white"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}

        </div>

        <span className="text-[10px] font-medium tracking-[0.15em] text-white/60">
          0{activeImage + 1} / 02
        </span>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="absolute bottom-8 left-6 z-20 hidden items-center gap-3 text-white/50 sm:flex">

        <span className="h-8 w-px bg-white/30" />

        <span className="text-[9px] font-semibold tracking-[0.2em]">
          SCROLL TO EXPLORE
        </span>

      </div>

    </section>
  );
}