import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-2">

            <img
              src="/logo.png"
              alt="MetroBus"
              className="h-10 w-auto brightness-0 invert"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              A modern public transportation concept designed
              to make everyday journeys across Sri Lanka
              simpler, smarter and more connected.
            </p>

          </div>


          {/* Navigation */}

          <div>

            <h3 className="text-sm font-semibold">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">

              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <Link href="/routes" className="hover:text-white">
                Routes & Services
              </Link>

              <Link href="/about" className="hover:text-white">
                About MetroBus
              </Link>

            </div>

          </div>


          {/* Information */}

          <div>

            <h3 className="text-sm font-semibold">
              Information
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-400">

              <p>Modern urban mobility</p>
              <p>Connected communities</p>
              <p>Smarter journeys</p>

            </div>

          </div>

        </div>


        <div className="mt-14 border-t border-gray-800 pt-6">

          <p className="text-xs text-gray-500">
            © 2026 MetroBus. Concept website. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}