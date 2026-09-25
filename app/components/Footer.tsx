import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c1422] text-white">

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-2">

            <img
              src="/logo.png"
              alt="MetroBus"
              className="h-10 w-auto"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              MetroBus is a modern public transportation concept
              designed to make everyday travel simpler, clearer
              and more connected across Sri Lanka.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs text-gray-500">
              Concept transportation platform
            </div>

          </div>


          {/* Navigation */}

          <div>

            <h3 className="text-sm font-bold">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">

              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/routes" className="transition hover:text-white">
                Routes & Services
              </Link>

              <Link href="/about" className="transition hover:text-white">
                About MetroBus
              </Link>

            </div>

          </div>


          {/* Information */}

          <div>

            <h3 className="text-sm font-bold">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">

              <span>Route information</span>
              <span>Timetable concepts</span>
              <span>Travel information</span>
              <span>MetroBus network</span>

            </div>

          </div>

        </div>


        <div className="mt-12 border-t border-white/10 pt-6">

          <p className="text-xs text-gray-500">
            © 2026 MetroBus Sri Lanka. Concept website.
          </p>

        </div>

      </div>

    </footer>
  );
}