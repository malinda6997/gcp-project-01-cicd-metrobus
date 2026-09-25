import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081426] text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            <Link href="/" className="inline-block">

              <img
                src="/logo.png"
                alt="MetroBus Sri Lanka"
                className="h-12 w-auto"
              />

            </Link>


            <p className="mt-5 max-w-sm text-sm leading-7 text-[#8ea1bd]">
              A modern public transportation concept designed
              to make everyday travel across Sri Lanka simpler,
              clearer and more connected.
            </p>


            {/* Status */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-[#d71920]" />

              <span className="text-xs font-semibold text-[#9aabc2]">
                MetroBus Sri Lanka
              </span>

            </div>


            {/* Disclaimer */}

            <div className="mt-7 rounded-xl border-l-2 border-[#d71920] bg-[#151629] p-4">

              <p className="text-xs leading-6 text-[#8ea1bd]">

                <span className="font-bold text-[#ed1c24]">
                  Disclaimer:
                </span>{" "}

                This is an independent MetroBus concept website
                developed for demonstration and educational purposes.

              </p>

            </div>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              Navigation
            </h3>


            <div className="mt-6 flex flex-col gap-4 text-sm text-[#9aabc2]">

              <Link
                href="/"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/routes"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Routes
              </Link>

              <Link
                href="/lmt-go"
                className="transition hover:translate-x-1 hover:text-white"
              >
                LMT-GO App
              </Link>

              <Link
                href="/about"
                className="transition hover:translate-x-1 hover:text-white"
              >
                About MetroBus
              </Link>

              <Link
                href="/contact"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              Contact
            </h3>


            <div className="mt-6 space-y-6">

              {/* Phone */}

              <div>

                <p className="text-xs font-semibold text-[#71859f]">
                  PHONE
                </p>

                <a
                  href="tel:+94752324532"
                  className="mt-2 block text-sm text-[#d8e0eb] transition hover:text-white"
                >
                  +94 75 232 4532
                </a>

                <a
                  href="tel:+94112086927"
                  className="mt-1 block text-sm text-[#d8e0eb] transition hover:text-white"
                >
                  +94 11 208 6927
                </a>

              </div>


              {/* WhatsApp */}

              <div>

                <p className="text-xs font-semibold text-[#71859f]">
                  WHATSAPP
                </p>

                <a
                  href="https://wa.me/94752324532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-[#d8e0eb] transition hover:text-[#25D366]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  Chat with us
                </a>

              </div>


              {/* Email */}

              <div>

                <p className="text-xs font-semibold text-[#71859f]">
                  EMAIL
                </p>

                <a
                  href="mailto:info@metrobus.lk"
                  className="mt-2 block text-sm text-[#d8e0eb] transition hover:text-white"
                >
                  info@metrobus.lk
                </a>

              </div>

            </div>

          </div>


          {/* =================================================
              RELATED / SOCIAL
          ================================================== */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              Explore
            </h3>


            <div className="mt-6 flex flex-col gap-4 text-sm text-[#9aabc2]">

              <Link
                href="/routes"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Bus Routes
              </Link>

              <Link
                href="/lmt-go"
                className="transition hover:translate-x-1 hover:text-white"
              >
                LMT-GO Digital Transport
              </Link>

              <Link
                href="/contact"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Passenger Support
              </Link>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Makumbura+Multimodal+Transport+Center"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Makumbura Transport Hub
              </a>

            </div>


            {/* Social */}

            <div className="mt-8">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#71859f]">
                Social Media
              </p>


              <div className="mt-4 flex gap-3">

                {/* Facebook */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-[#9aabc2] transition hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                >
                  f
                </a>


                {/* WhatsApp */}

                <a
                  href="https://wa.me/94752324532"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-[#9aabc2] transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  W
                </a>


                {/* Email */}

                <a
                  href="mailto:info@metrobus.lk"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-[#9aabc2] transition hover:border-[#d71920] hover:bg-[#d71920] hover:text-white"
                >
                  @
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            WHATSAPP CTA
        ====================================================== */}

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-5 sm:flex sm:items-center sm:justify-between">

          <div>

            <p className="text-sm font-bold text-white">
              Need help with your journey?
            </p>

            <p className="mt-1 text-xs text-[#71859f]">
              Connect with MetroBus passenger support.
            </p>

          </div>


          <a
            href="https://wa.me/94752324532"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full border border-[#25D366] px-5 py-2.5 text-xs font-bold text-[#25D366] transition hover:bg-[#25D366] hover:text-white sm:mt-0"
          >
            Join WhatsApp →
          </a>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mt-10 border-t border-white/10 pt-7">

          <div className="flex flex-col gap-5 text-xs sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}

            <p className="text-[#61748e]">
              © 2026 MetroBus Sri Lanka. All rights reserved.
            </p>


            {/* Developer */}

            <p className="text-[#61748e]">

              Developed by{" "}

              <span className="font-semibold text-white">
                Malinda Prabath
              </span>

            </p>


            {/* Project */}

            <p className="text-[#61748e]">
              Independent Open Source Concept
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}