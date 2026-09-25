import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Simple routes",
    description:
      "Clear route information helps passengers understand where they need to go without unnecessary complexity.",
  },
  {
    number: "02",
    title: "Connected cities",
    description:
      "A connected network concept designed around important destinations, communities and everyday journeys.",
  },
  {
    number: "03",
    title: "Better experience",
    description:
      "A modern digital experience that makes public transportation easier to understand and use.",
  },
];

export default function Home() {
  return (
    <div>

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#111111] text-white">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d71920] opacity-20 blur-3xl"></div>

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">

          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300">
              <span className="h-2 w-2 rounded-full bg-[#d71920]"></span>
              Modern mobility for Sri Lanka
            </div>


            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

              Move through
              <span className="block text-[#d71920]">
                Sri Lanka smarter.
              </span>

            </h1>


            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">

              MetroBus is a modern public transportation
              concept focused on making everyday travel
              simpler, more connected and easier to understand.

            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/routes"
                className="rounded-full bg-[#d71920] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#b51218]"
              >
                Explore Routes →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Discover MetroBus
              </Link>

            </div>

          </div>


          {/* Hero visual */}

          <div className="relative">

            <div className="relative mx-auto max-w-md">

              <div className="absolute -inset-5 rounded-[2rem] bg-[#d71920] opacity-20 blur-2xl"></div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur">

                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold tracking-[0.2em] text-gray-400">
                    METROBUS
                  </span>

                  <span className="rounded-full bg-[#d71920] px-3 py-1 text-xs font-bold">
                    MB
                  </span>

                </div>


                <div className="mt-20">

                  <p className="text-sm text-gray-400">
                    Next destination
                  </p>

                  <h2 className="mt-2 text-4xl font-bold">
                    Colombo
                  </h2>

                  <div className="mt-8 h-px bg-white/10"></div>

                  <div className="mt-7 grid grid-cols-2 gap-6">

                    <div>
                      <p className="text-xs text-gray-500">
                        Service
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        MetroBus
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Network
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Urban
                      </p>
                    </div>

                  </div>

                </div>


                <div className="mt-14 flex items-end gap-2">

                  <div className="h-2 flex-1 rounded-full bg-[#d71920]"></div>

                  <div className="h-2 w-16 rounded-full bg-white/10"></div>

                  <div className="h-2 w-10 rounded-full bg-white/10"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 lg:grid-cols-4">

          <div className="px-6 py-10 lg:px-8">
            <p className="text-3xl font-bold">24/7</p>
            <p className="mt-2 text-sm text-gray-500">
              Designed for everyday mobility
            </p>
          </div>

          <div className="px-6 py-10 lg:px-8">
            <p className="text-3xl font-bold">15+</p>
            <p className="mt-2 text-sm text-gray-500">
              Proposed route connections
            </p>
          </div>

          <div className="border-t border-gray-200 px-6 py-10 lg:border-t-0 lg:px-8">
            <p className="text-3xl font-bold">01</p>
            <p className="mt-2 text-sm text-gray-500">
              Unified travel experience
            </p>
          </div>

          <div className="border-t border-gray-200 px-6 py-10 lg:border-t-0 lg:px-8">
            <p className="text-3xl font-bold text-[#d71920]">
              LK
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Built around Sri Lankan cities
            </p>
          </div>

        </div>

      </section>


      {/* WHY METROBUS */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="max-w-2xl">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            WHY METROBUS
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Public transport,
            <br />
            made simpler.
          </h2>

          <p className="mt-6 leading-8 text-gray-500">
            MetroBus focuses on the things that matter most
            during everyday travel — clear information,
            connected routes and a simple passenger experience.
          </p>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-2xl border border-gray-200 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d71920]"
            >

              <span className="text-xs font-bold text-[#d71920]">
                {feature.number}
              </span>

              <h3 className="mt-14 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="bg-[#f7f7f7]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                HOW IT WORKS
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                From your location
                <br />
                to your destination.
              </h2>

            </div>


            <div className="space-y-10">

              <div className="flex gap-5">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d71920] text-sm font-bold text-white">
                  01
                </span>

                <div>
                  <h3 className="font-bold">
                    Find your route
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    Explore available connections and
                    identify the route that matches your journey.
                  </p>
                </div>

              </div>


              <div className="flex gap-5">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d71920] text-sm font-bold text-white">
                  02
                </span>

                <div>
                  <h3 className="font-bold">
                    Choose your destination
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    Understand your stops and the important
                    destinations along your route.
                  </p>
                </div>

              </div>


              <div className="flex gap-5">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d71920] text-sm font-bold text-white">
                  03
                </span>

                <div>
                  <h3 className="font-bold">
                    Enjoy the journey
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    Travel with a clearer understanding of
                    your journey from start to destination.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-[#d71920] px-7 py-14 text-white sm:px-12 lg:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10"></div>

          <div className="relative z-10 max-w-2xl">

            <p className="text-xs font-bold tracking-[0.2em] text-white/70">
              PLAN YOUR JOURNEY
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Find a route that
              <br />
              works for you.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-white/80">
              Explore the MetroBus network and discover
              how a connected transportation experience
              could simplify your daily journey.
            </p>

            <Link
              href="/routes"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#d71920] transition hover:bg-gray-100"
            >
              Explore Routes →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}