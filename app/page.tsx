import Link from "next/link";

const routes = [
  {
    code: "MB01",
    from: "Colombo",
    to: "Negombo",
    distance: "40 km",
    frequency: "Every 20 min",
  },
  {
    code: "MB02",
    from: "Colombo",
    to: "Kaduwela",
    distance: "25 km",
    frequency: "Every 15 min",
  },
  {
    code: "MB03",
    from: "Colombo",
    to: "Maharagama",
    distance: "20 km",
    frequency: "Every 15 min",
  },
];

export default function Home() {
  return (
    <div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#101010] text-white">

        {/* Background glow */}

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#d71920]/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#d71920]/10 blur-3xl" />


        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">

          {/* LEFT SIDE */}

          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-[#d71920]" />

              <span className="text-xs font-semibold tracking-[0.15em] text-gray-300">
                MODERN PUBLIC TRANSPORT
              </span>

            </div>


            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

              Move through

              <span className="block text-[#d71920]">
                Sri Lanka smarter.
              </span>

            </h1>


            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">

              Discover routes, understand your journey and
              connect with the places that matter. MetroBus
              brings a simpler digital experience to everyday
              public transportation.

            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/routes"
                className="rounded-full bg-[#d71920] px-7 py-3.5 text-center text-sm font-bold transition hover:bg-[#b51218]"
              >
                Explore Routes →
              </Link>

              <Link
                href="#search"
                className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-bold transition hover:bg-white hover:text-black"
              >
                Find Your Journey
              </Link>

            </div>


            {/* Stats */}

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

              <div>
                <p className="text-xl font-bold">15+</p>
                <p className="mt-1 text-xs text-gray-500">
                  Proposed routes
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">24/7</p>
                <p className="mt-1 text-xs text-gray-500">
                  Everyday mobility
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">LK</p>
                <p className="mt-1 text-xs text-gray-500">
                  Sri Lankan network
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE - BUS IMAGES */}

          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-8 rounded-[3rem] bg-[#d71920]/20 blur-3xl" />


            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

              {/* Main image */}

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/img1.jpg"
                  alt="MetroBus Sri Lanka"
                  className="h-[330px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[390px]"
                />


                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />


                {/* Image text */}

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300">
                        METROBUS NETWORK
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        Moving the city forward.
                      </h2>

                    </div>

                    <span className="rounded-full bg-[#d71920] px-3 py-1.5 text-[10px] font-bold">
                      MB01
                    </span>

                  </div>

                </div>

              </div>


              {/* Second image */}

              <div className="relative -mt-16 ml-auto w-[62%] overflow-hidden rounded-2xl border-4 border-[#101010] shadow-2xl">

                <img
                  src="/img2.jpg"
                  alt="MetroBus fleet"
                  className="h-40 w-full object-cover transition duration-700 hover:scale-105 sm:h-48"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-3 left-4">

                  <p className="text-[9px] font-semibold tracking-wider text-white/70">
                    CONNECTED JOURNEYS
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    Colombo Urban Network
                  </p>

                </div>

              </div>


              {/* Floating route card */}

              <div className="absolute -left-4 top-16 hidden rounded-2xl border border-white/10 bg-[#151515]/95 p-4 shadow-xl backdrop-blur sm:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d71920] text-xs font-bold">
                    MB
                  </div>

                  <div>

                    <p className="text-[9px] uppercase tracking-wider text-gray-500">
                      Current route
                    </p>

                    <p className="mt-1 text-xs font-bold">
                      Colombo → Negombo
                    </p>

                  </div>

                </div>

              </div>


              {/* Status card */}

              <div className="absolute -right-3 bottom-20 hidden rounded-xl border border-white/10 bg-white px-4 py-3 shadow-xl sm:block">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-xs font-bold text-gray-800">
                    Service planned
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SEARCH
      ====================================================== */}

      <section id="search" className="relative z-10 -mt-8 px-5">

        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">

            <div className="lg:w-1/4">

              <p className="text-xs font-bold tracking-[0.15em] text-[#d71920]">
                PLAN YOUR JOURNEY
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Find your route
              </h2>

            </div>


            <div className="grid flex-1 gap-3 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  From
                </label>

                <div className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-400">
                  Select starting point
                </div>

              </div>


              <div>

                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  To
                </label>

                <div className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-400">
                  Select destination
                </div>

              </div>

            </div>


            <Link
              href="/routes"
              className="rounded-xl bg-[#d71920] px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#b51218]"
            >
              Search Routes
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEXT BUS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              LIVE CONCEPT
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Next Bus
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
              Example departure information for selected
              MetroBus connections.
            </p>

          </div>

          <Link
            href="/routes"
            className="text-sm font-bold text-[#d71920]"
          >
            View all routes →
          </Link>

        </div>


        <div className="mt-10 grid gap-5 lg:grid-cols-3">

          {[
            {
              location: "Makulbura",
              destination: "Kadawatha",
              time: "13:00",
              route: "MB01",
            },
            {
              location: "Colombo Fort",
              destination: "Maharagama",
              time: "13:30",
              route: "MB02",
            },
            {
              location: "Kadawatha",
              destination: "Makulbura",
              time: "13:45",
              route: "MB03",
            },
          ].map((bus) => (

            <div
              key={bus.location}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-lg"
            >

              <div className="flex items-center justify-between bg-[#f7f7f7] px-5 py-4">

                <div>

                  <p className="text-xs text-gray-400">
                    NEXT DEPARTURE
                  </p>

                  <p className="mt-1 font-bold">
                    {bus.location}
                  </p>

                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#d71920]">
                  {bus.route}
                </span>

              </div>


              <div className="p-5">

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-3xl font-bold">
                      {bus.time}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Departing shortly
                    </p>

                  </div>

                  <span className="text-2xl text-[#d71920]">
                    →
                  </span>

                </div>


                <div className="mt-6 border-t border-gray-100 pt-4">

                  <p className="text-xs text-gray-400">
                    Destination
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {bus.destination}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY METROBUS
      ====================================================== */}

      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              WHY METROBUS
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Public transport,
              <br />
              made easier.
            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Clear routes",
                text: "Understand your journey with simple route information and clear destinations.",
              },
              {
                number: "02",
                title: "Connected cities",
                text: "Explore a network concept designed around important urban destinations.",
              },
              {
                number: "03",
                title: "Better experience",
                text: "A clean digital experience focused on the needs of everyday passengers.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#d71920]"
              >

                <span className="text-xs font-bold text-[#d71920]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          POPULAR ROUTES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              METROBUS NETWORK
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Popular connections
            </h2>

          </div>

          <Link
            href="/routes"
            className="hidden text-sm font-bold text-[#d71920] sm:block"
          >
            See all routes →
          </Link>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {routes.map((route) => (

            <div
              key={route.code}
              className="group overflow-hidden rounded-2xl border border-gray-200"
            >

              <div className="h-2 bg-[#d71920]" />

              <div className="p-7">

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-[#d71920]">
                    {route.code}
                  </span>

                  <span className="text-xs text-gray-400">
                    {route.distance}
                  </span>

                </div>


                <div className="mt-10">

                  <p className="text-sm text-gray-400">
                    From
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    {route.from}
                  </p>

                  <div className="my-4 text-[#d71920]">
                    ↓
                  </div>

                  <p className="text-sm text-gray-400">
                    To
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    {route.to}
                  </p>

                </div>


                <div className="mt-7 border-t border-gray-100 pt-5">

                  <p className="text-xs text-gray-500">
                    {route.frequency}
                  </p>

                </div>


                <Link
                  href="/routes"
                  className="mt-6 block rounded-full border border-gray-200 py-2.5 text-center text-xs font-bold transition group-hover:border-[#d71920] group-hover:text-[#d71920]"
                >
                  View route
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-[#d71920] px-7 py-16 text-white sm:px-12 lg:px-16">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

          <div className="relative z-10 max-w-2xl">

            <p className="text-xs font-bold tracking-[0.2em] text-white/70">
              YOUR JOURNEY STARTS HERE
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Find your next
              <br />
              destination.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-white/80">
              Explore MetroBus routes and discover a simpler
              way to understand your everyday journey.
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