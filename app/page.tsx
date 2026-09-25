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

const galleryImages = [
  {
    src: "/galary/Metro Bus Sri Lanka (2).jpg",
    title: "MetroBus Network",
    text: "Connecting passengers across the urban network.",
  },
  {
    src: "/galary/Metro Bus Sri Lanka (4).jpg",
    title: "City Services",
    text: "Modern public transport for everyday journeys.",
  },
  {
    src: "/galary/Metro Bus Sri Lanka (7).jpg",
    title: "Accessible Travel",
    text: "Designed around the needs of passengers.",
  },
  {
    src: "/galary/Metro Bus Sri Lanka (8).jpg",
    title: "Passenger Experience",
    text: "A closer look inside the MetroBus experience.",
  },
  {
    src: "/galary/Metro Bus Sri Lanka (9).jpg",
    title: "Comfortable Travel",
    text: "Spaces designed for everyday journeys.",
  },
  {
    src: "/galary/Metro Bus Sri Lanka (10).jpg",
    title: "Inside MetroBus",
    text: "Travel comfortably across the network.",
  },
  {
    src: "/galary/Metro Bus Sri Lanka (12).jpg",
    title: "Driver Experience",
    text: "A closer look at the MetroBus interior.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#111111]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero />


      {/* =====================================================
          JOURNEY SEARCH
      ====================================================== */}

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


      {/* =====================================================
          NEXT BUS
      ====================================================== */}

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


      {/* =====================================================
          WHY METROBUS
      ====================================================== */}

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


      {/* =====================================================
          POPULAR ROUTES
      ====================================================== */}

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


      {/* =====================================================
          METROBUS GALLERY
      ====================================================== */}

      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                METROBUS GALLERY
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                See the network
                <br />
                in action.
              </h2>

            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-500">
              Explore the MetroBus network, passenger spaces and
              everyday moments from Sri Lanka&apos;s public
              transport experience.
            </p>

          </div>


          {/* Gallery */}

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {galleryImages.map((image, index) => (

              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl bg-gray-200 ${
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >

                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index === 0
                      ? "h-[420px] sm:h-full"
                      : "h-[230px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <p className="text-[10px] font-bold tracking-[0.18em] text-white/60">
                    METROBUS
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    {image.title}
                  </h3>

                  <p className="mt-1 max-w-xs text-xs leading-5 text-white/65">
                    {image.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LMT-GO APP
      ====================================================== */}

      <section className="bg-[#090909] text-white">

        <div className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 lg:px-8">

          {/* Glow */}

          <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#d71920]/15 blur-[130px]" />

          <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#d71920]/10 blur-[120px]" />


          <div className="relative grid items-center gap-16 lg:grid-cols-[0.75fr_1.25fr]">

            {/* APP PREVIEW */}

            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 scale-110 rounded-full bg-[#d71920]/20 blur-[70px]" />

                <div className="relative h-[520px] w-[250px] overflow-hidden rounded-[38px] border-[7px] border-[#202020] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:h-[570px] sm:w-[275px]">

                  <img
                    src="/ui-ss/LMT-GO1.jpg"
                    alt="LMT-GO mobile application"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </div>


            {/* CONTENT */}

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-[#ed1c24]">
                LMT-GO DIGITAL TRANSPORT
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">

                Your journey.
                <span className="block text-[#ed1c24]">
                  Your way.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
                LMT-GO brings schedules, live bus tracking,
                digital payments, wallet services and travel
                information together in one modern mobile
                experience.
              </p>


              {/* App features */}

              <div className="mt-10 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-sm font-bold">
                    Live Bus Tracking
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Track buses and understand your journey.
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-sm font-bold">
                    Digital Payments
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Manage digital payments and your travel wallet.
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-sm font-bold">
                    Travel History
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Keep your previous journeys accessible.
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-sm font-bold">
                    Digital Bus Pass
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Keep your travel information in one place.
                  </p>

                </div>

              </div>


              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/lmt-go"
                  className="rounded-full bg-[#d71920] px-7 py-3.5 text-center text-sm font-bold transition hover:-translate-y-0.5 hover:bg-[#b51218]"
                >
                  Explore LMT-GO →
                </Link>

                <Link
                  href="/lmt-go#download"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-bold transition hover:bg-white hover:text-black"
                >
                  Get the App
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE MAP
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

          {/* LEFT */}

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              FIND METROBUS
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Start your
              <br />
              journey here.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
              Find the MetroBus network and locate the
              Makumbura Multimodal Transport Center, one of
              the important transport hubs in the network.
            </p>


            <div className="mt-8 rounded-2xl border border-gray-200 bg-[#f7f7f5] p-6">

              <p className="text-xs font-bold tracking-[0.15em] text-gray-400">
                MAIN TRANSPORT HUB
              </p>

              <h3 className="mt-2 text-lg font-bold text-gray-900">
                Makumbura Multimodal Transport Center
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Makumbura, Sri Lanka
              </p>

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Makumbura+Multimodal+Transport+Center"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#111111] px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#d71920]"
            >
              Open in Google Maps →
            </a>

          </div>


          {/* RIGHT MAP */}

          <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <iframe
              title="Makumbura Multimodal Transport Center"
              src="https://www.google.com/maps?q=Makumbura+Multimodal+Transport+Center&output=embed"
              className="h-[400px] w-full border-0 sm:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-[#d71920] px-7 py-16 text-white sm:px-12 lg:px-16">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

          <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full border-[40px] border-white/5" />


          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

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

            </div>


            <div className="flex flex-col gap-3">

              <Link
                href="/routes"
                className="rounded-xl bg-white px-7 py-4 text-center text-sm font-bold text-[#d71920] transition hover:bg-gray-100"
              >
                Explore Routes →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-7 py-4 text-center text-sm font-bold transition hover:bg-white hover:text-[#111111]"
              >
                Contact MetroBus
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}