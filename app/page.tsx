import Link from "next/link";
import Hero from "./components/Hero";

const nextBuses = [
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
];

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

const features = [
  {
    number: "01",
    title: "Clear routes",
    text: "Understand your journey with simple route information and clear destinations.",
  },
  {
    number: "02",
    title: "Connected cities",
    text: "Explore a transportation network designed around important urban destinations.",
  },
  {
    number: "03",
    title: "Better experience",
    text: "A clean digital experience focused on the needs of everyday passengers.",
  },
];

export default function Home() {
  return (
    <main className="bg-white">

      {/* =========================
          HERO
      ========================== */}

      <Hero />


      {/* =========================
          JOURNEY SEARCH
      ========================== */}

      <section
        id="search"
        className="relative z-10 px-5 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">

            <div className="lg:w-1/4">

              <p className="text-xs font-bold tracking-[0.15em] text-[#d71920]">
                PLAN YOUR JOURNEY
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
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


      {/* =========================
          NEXT BUS
      ========================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              LIVE CONCEPT
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Next Bus
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
              Example departure information for selected MetroBus
              connections.
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

          {nextBuses.map((bus) => (

            <div
              key={bus.location}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-lg"
            >

              <div className="flex items-center justify-between bg-[#f7f7f7] px-5 py-4">

                <div>

                  <p className="text-xs text-gray-400">
                    NEXT DEPARTURE
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
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

                    <p className="text-3xl font-bold text-gray-900">
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

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {bus.destination}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          WHY METROBUS
      ========================== */}

      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              WHY METROBUS
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Public transport,
              <br />
              made easier.
            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {features.map((feature) => (

              <div
                key={feature.number}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-md"
              >

                <span className="text-xs font-bold text-[#d71920]">
                  {feature.number}
                </span>

                <h3 className="mt-12 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {feature.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          POPULAR ROUTES
      ========================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              METROBUS NETWORK
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
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
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
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

                  <p className="mt-1 text-xl font-bold text-gray-900">
                    {route.from}
                  </p>

                  <div className="my-4 text-[#d71920]">
                    ↓
                  </div>

                  <p className="text-sm text-gray-400">
                    To
                  </p>

                  <p className="mt-1 text-xl font-bold text-gray-900">
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
                  View Route →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================== */}

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-[#d71920] px-7 py-16 text-white sm:px-12 lg:px-16">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

          <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full border-[40px] border-white/5" />


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

    </main>
  );
}