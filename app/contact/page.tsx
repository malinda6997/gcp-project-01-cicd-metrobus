"use client";

import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Clock3,
  Navigation,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#090909] text-white">

        {/* Background glow */}

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#d71920]/20 blur-[130px]" />

        <div className="absolute -bottom-52 -left-40 h-[450px] w-[450px] rounded-full bg-[#d71920]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">

          <div className="max-w-4xl">

            {/* Label */}

            <p className="text-xs font-bold tracking-[0.22em] text-[#ed1c24]">
              METROBUS SUPPORT
            </p>

            {/* Main heading */}

            <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

              Let&apos;s keep

              <span className="block text-[#ed1c24]">
                you moving.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Need route information, timetable updates or
              passenger support? Connect with the MetroBus
              team through the channel that works best for you.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CHANNELS
      ====================================================== */}

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 lg:px-8">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* PHONE */}

          <a
            href="tel:+94752324532"
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#d71920]"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#d71920]">
                <Phone size={20} />
              </div>

              <ExternalLink
                size={15}
                className="text-gray-300 transition group-hover:text-[#d71920]"
              />

            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.15em] text-gray-400">
              CALL US
            </p>

            <h3 className="mt-2 text-lg font-bold">
              +94 75 232 4532
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Passenger support and general enquiries.
            </p>

          </a>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/94752324532"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#25D366]"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-[#20b858]">
                <MessageCircle size={20} />
              </div>

              <ExternalLink
                size={15}
                className="text-gray-300 transition group-hover:text-[#20b858]"
              />

            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.15em] text-gray-400">
              WHATSAPP
            </p>

            <h3 className="mt-2 text-lg font-bold">
              Chat with us
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Send a message directly to the support team.
            </p>

          </a>


          {/* EMAIL */}

          <a
            href="mailto:info@metrobus.lk"
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#d71920]"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#d71920]">
                <Mail size={20} />
              </div>

              <ExternalLink
                size={15}
                className="text-gray-300 transition group-hover:text-[#d71920]"
              />

            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.15em] text-gray-400">
              EMAIL
            </p>

            <h3 className="mt-2 break-all text-lg font-bold">
              info@metrobus.lk
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Send detailed enquiries and feedback.
            </p>

          </a>


          {/* LOCATION */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Makumbura+Multimodal+Transport+Center"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#d71920]"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#d71920]">
                <MapPin size={20} />
              </div>

              <ExternalLink
                size={15}
                className="text-gray-300 transition group-hover:text-[#d71920]"
              />

            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.15em] text-gray-400">
              MAIN HUB
            </p>

            <h3 className="mt-2 text-lg font-bold">
              Makumbura
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Multimodal Transport Center.
            </p>

          </a>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION + MAP
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* CONTACT INFORMATION */}

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              CONTACT METROBUS
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              We&apos;re here to
              <br />
              help.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
              Whether you are looking for a route, need
              timetable information or want to share feedback,
              our contact channels are available to help you.
            </p>


            {/* CONTACT DETAILS */}

            <div className="mt-10 space-y-5">

              {/* PHONE */}

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <Phone size={17} />
                </div>

                <div>

                  <p className="text-xs font-bold text-gray-400">
                    PHONE
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    +94 75 232 4532
                  </p>

                  <p className="text-sm font-semibold">
                    +94 11 208 6927
                  </p>

                </div>

              </div>


              {/* EMAIL */}

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <Mail size={17} />
                </div>

                <div>

                  <p className="text-xs font-bold text-gray-400">
                    EMAIL
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    info@metrobus.lk
                  </p>

                </div>

              </div>


              {/* LOCATION */}

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <MapPin size={17} />
                </div>

                <div>

                  <p className="text-xs font-bold text-gray-400">
                    MAIN HUB
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Makumbura Multimodal
                    <br />
                    Transport Center
                  </p>

                </div>

              </div>


              {/* SUPPORT */}

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <Clock3 size={17} />
                </div>

                <div>

                  <p className="text-xs font-bold text-gray-400">
                    SUPPORT
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Route & passenger enquiries
                  </p>

                  <p className="text-xs text-gray-500">
                    Contact us for the latest information.
                  </p>

                </div>

              </div>

            </div>


            {/* SOCIAL */}

            <div className="mt-10 border-t border-gray-200 pt-7">

              <p className="text-xs font-bold tracking-[0.15em] text-gray-400">
                FOLLOW METROBUS
              </p>

              <div className="mt-4 flex gap-3">

                {/* FACEBOOK */}

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                  aria-label="Facebook"
                >
                  <span className="text-sm font-bold">
                    f
                  </span>
                </a>


                {/* WHATSAPP */}

                <a
                  href="https://wa.me/94752324532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={17} />
                </a>


                {/* EMAIL */}

                <a
                  href="mailto:info@metrobus.lk"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#d71920] hover:bg-[#d71920] hover:text-white"
                  aria-label="Email"
                >
                  <Mail size={17} />
                </a>

              </div>

            </div>

          </div>


          {/* MAP */}

          <div>

            <div className="mb-5 flex items-end justify-between gap-5">

              <div>

                <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                  FIND US
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Makumbura Transport Hub
                </h2>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Makumbura+Multimodal+Transport+Center"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden shrink-0 items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-xs font-bold transition hover:border-[#d71920] hover:text-[#d71920] sm:flex"
              >
                Open Maps
                <ExternalLink size={13} />
              </a>

            </div>


            {/* GOOGLE MAP */}

            <div className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              <iframe
                title="Makumbura Multimodal Transport Center"
                src="https://www.google.com/maps?q=Makumbura+Multimodal+Transport+Center&output=embed"
                className="h-[430px] w-full border-0 grayscale-[15%] transition duration-700 group-hover:grayscale-0 sm:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* MAP INFO CARD */}

              <div className="absolute bottom-5 left-5 right-5">

                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-[#090909]/90 p-4 text-white shadow-2xl backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d71920]">
                      <Navigation size={17} />
                    </div>

                    <div>

                      <p className="text-xs font-bold">
                        MetroBus Main Hub
                      </p>

                      <p className="mt-1 text-[10px] text-white/50">
                        Makumbura Multimodal Transport Center
                      </p>

                    </div>

                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Makumbura+Multimodal+Transport+Center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#d71920] hover:text-white"
                    aria-label="Open Google Maps"
                  >
                    <ExternalLink size={15} />
                  </a>

                </div>

              </div>

            </div>


            {/* MOBILE MAP BUTTON */}

            <a
              href="https://www.google.com/maps/search/?api=1&query=Makumbura+Multimodal+Transport+Center"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-xs font-bold sm:hidden"
            >
              Open in Google Maps
              <ExternalLink size={13} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          PASSENGER SUPPORT
      ====================================================== */}

      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                PASSENGER SUPPORT
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Need help with
                <br />
                your journey?
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                For route information, timetable questions and
                passenger support, contact the MetroBus team
                directly.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {/* ROUTES */}

              <a
                href="/routes"
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d71920] hover:shadow-lg"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <Navigation size={18} />
                </div>

                <h3 className="mt-6 font-bold">
                  Find a route
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Explore MetroBus routes and find information
                  for your next journey.
                </p>

                <span className="mt-5 inline-block text-xs font-bold text-[#d71920]">
                  Explore routes →
                </span>

              </a>


              {/* LMT-GO */}

              <a
                href="/lmt-go"
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d71920] hover:shadow-lg"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111111] text-white">
                  <Headphones size={18} />
                </div>

                <h3 className="mt-6 font-bold">
                  Explore LMT-GO
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Discover digital transport services,
                  payments and journey tools.
                </p>

                <span className="mt-5 inline-block text-xs font-bold text-[#d71920]">
                  Explore LMT-GO →
                </span>

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem] bg-[#d71920] px-7 py-16 text-white sm:px-12 lg:px-16">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-white/10" />

          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[50px] border-white/10" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-white/60">
                METROBUS SRI LANKA
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Have a question?
                <br />
                Let&apos;s talk.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
                Choose the contact method that works best for
                you and connect with the MetroBus team.
              </p>

            </div>

            <div className="flex flex-col gap-3">

              <a
                href="tel:+94752324532"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#111111] transition hover:bg-gray-100"
              >
                <Phone size={16} />
                Call us
              </a>

              <a
                href="https://wa.me/94752324532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-[#111111]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}