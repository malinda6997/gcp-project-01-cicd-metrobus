"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   LMT-GO APP SCREENS
========================================================= */

const screenshots = [
  {
    id: 1,
    src: "/ui-ss/LMT-GO1.jpg",
    title: "Welcome to LMT-GO",
    description:
      "Start your digital public transport experience and access your everyday travel services from one application.",
  },
  {
    id: 2,
    src: "/ui-ss/LMT-GO2.jpg",
    title: "Create your account",
    description:
      "Register your LMT-GO account and get started with the digital transport experience.",
  },
  {
    id: 3,
    src: "/ui-ss/LMT-GO3.jpg",
    title: "Secure wallet PIN",
    description:
      "Create a secure PIN to protect your digital wallet and travel information.",
  },
  {
    id: 4,
    src: "/ui-ss/LMT-GO4.jpg",
    title: "Your digital wallet",
    description:
      "Manage your wallet, balance and available digital transport services from one place.",
  },
  {
    id: 5,
    src: "/ui-ss/LMT-GO5.jpg",
    title: "Top up your wallet",
    description:
      "Add funds to your digital wallet and keep your account ready for your next journey.",
  },
  {
    id: 6,
    src: "/ui-ss/LMT-GO6.jpg",
    title: "Complete your payment",
    description:
      "Use the available digital payment options to complete your transport transactions.",
  },
  {
    id: 7,
    src: "/ui-ss/LMT-GO7.jpg",
    title: "Track your journey",
    description:
      "Explore the map experience and follow available buses while planning your journey.",
  },
  {
    id: 8,
    src: "/ui-ss/LMT-GO8.jpg",
    title: "Digital travel wallet",
    description:
      "Keep your digital travel information and wallet services accessible whenever you need them.",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    number: "01",
    title: "View schedules",
    icon: "◷",
    description:
      "Check available bus schedules and plan your journey before leaving home.",
  },
  {
    number: "02",
    title: "Live bus tracking",
    icon: "⌖",
    description:
      "Track available buses and understand your journey through the integrated map experience.",
  },
  {
    number: "03",
    title: "QR payments",
    icon: "▣",
    description:
      "Use convenient digital payment technology for your everyday transport needs.",
  },
  {
    number: "04",
    title: "Digital wallet",
    icon: "₨",
    description:
      "Manage your travel balance and access your digital wallet from one place.",
  },
  {
    number: "05",
    title: "Digital bus pass",
    icon: "▤",
    description:
      "Keep your transport pass digitally accessible through the LMT-GO application.",
  },
  {
    number: "06",
    title: "Travel history",
    icon: "↺",
    description:
      "Review your previous travel activity and keep your journey information organized.",
  },
];

/* =========================================================
   GET STARTED
========================================================= */

const steps = [
  {
    number: "01",
    title: "Download LMT-GO",
    description:
      "Install the LMT-GO application from the official Google Play Store or Apple App Store.",
  },
  {
    number: "02",
    title: "Create your account",
    description:
      "Open the application and follow the registration process to create your personal account.",
  },
  {
    number: "03",
    title: "Set up your wallet",
    description:
      "Secure your account and add funds to your digital wallet when required.",
  },
  {
    number: "04",
    title: "Start travelling",
    description:
      "Explore routes, check schedules, track buses and use the available digital services.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function LMTGoPage() {
  const [activeScreenshot, setActiveScreenshot] =
    useState(0);

  /* =======================================================
     REFS
  ======================================================= */

  const appExperienceRef =
    useRef<HTMLElement | null>(null);

  const phoneImageRef =
    useRef<HTMLImageElement | null>(null);

  const screenInfoRef =
    useRef<HTMLDivElement | null>(null);

  const activeIndexRef = useRef(0);

  const touchStartXRef = useRef<number | null>(null);

  /* =======================================================
     CHANGE SCREEN
  ======================================================= */

  const changeScreen = (index: number) => {
    const nextIndex =
      (index + screenshots.length) %
      screenshots.length;

    if (
      nextIndex === activeIndexRef.current
    ) {
      return;
    }

    activeIndexRef.current = nextIndex;

    setActiveScreenshot(nextIndex);
  };

  /* =======================================================
     SCREEN TRANSITION
  ======================================================= */

  useLayoutEffect(() => {
    const image = phoneImageRef.current;
    const info = screenInfoRef.current;

    if (!image || !info) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          image,
          {
            opacity: 0,
            scale: 1.045,
            filter: "blur(4px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          }
        )
        .fromTo(
          info,
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.35"
        );
    });

    return () => {
      context.revert();
    };
  }, [activeScreenshot]);

  /* =======================================================
     DESKTOP GSAP SCROLLTRIGGER
======================================================= */

  useLayoutEffect(() => {
    const section =
      appExperienceRef.current;

    if (!section) {
      return;
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      /* ===================================================
         DESKTOP
      ================================================== */

      media.add("(min-width: 1024px)", () => {
        const trigger =
          ScrollTrigger.create({
            trigger: section,

            start: "top top",

            end: "+=4000",

            pin: true,

            pinSpacing: true,

            scrub: false,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const total =
                screenshots.length;

              const calculatedIndex = Math.min(
                total - 1,
                Math.floor(
                  self.progress * total
                )
              );

              if (
                calculatedIndex !==
                activeIndexRef.current
              ) {
                activeIndexRef.current =
                  calculatedIndex;

                setActiveScreenshot(
                  calculatedIndex
                );
              }
            },
          });

        return () => {
          trigger.kill();
        };
      });

      /* ===================================================
         MOBILE
         No ScrollTrigger pin.
         Automatic animation is used instead.
      ================================================== */

      media.add("(max-width: 1023px)", () => {
        const interval =
          window.setInterval(() => {
            setActiveScreenshot(
              (current) => {
                const next =
                  current >=
                  screenshots.length - 1
                    ? 0
                    : current + 1;

                activeIndexRef.current =
                  next;

                return next;
              }
            );
          }, 3200);

        return () => {
          window.clearInterval(
            interval
          );
        };
      });

      return () => {
        media.revert();
      };
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  /* =======================================================
     TOUCH / SWIPE
  ======================================================= */

  const handleTouchStart = (
    event: React.TouchEvent
  ) => {
    touchStartXRef.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = (
    event: React.TouchEvent
  ) => {
    if (
      touchStartXRef.current === null
    ) {
      return;
    }

    const endX =
      event.changedTouches[0].clientX;

    const difference =
      touchStartXRef.current - endX;

    const minimumSwipe = 45;

    if (Math.abs(difference) >= minimumSwipe) {
      if (difference > 0) {
        changeScreen(
          activeIndexRef.current + 1
        );
      } else {
        changeScreen(
          activeIndexRef.current - 1
        );
      }
    }

    touchStartXRef.current = null;
  };

  const currentScreen =
    screenshots[activeScreenshot];

  return (
    <main className="overflow-hidden bg-white text-[#111111]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#090909] text-white">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">

          <div className="max-w-4xl">

            <p className="text-xs font-bold tracking-[0.22em] text-[#ed1c24]">
              LMT-GO DIGITAL TRANSPORT
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">

              Your everyday journey,

              <span className="block text-[#ed1c24]">
                made more connected.
              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#9ca3af] sm:text-lg">
              LMT-GO brings schedules, live bus tracking,
              digital payments, wallet services and essential
              travel information together in one simple
              mobile experience.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#download"
                className="rounded-full bg-[#d71920] px-7 py-3.5 text-center text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b51218]"
              >
                Get LMT-GO →
              </a>

              <a
                href="#app-preview"
                className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[#111111]"
              >
                Explore the App
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section
        id="features"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >

        <div className="max-w-2xl">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            LMT-GO FEATURES
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need
            <br />
            for your journey.
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            Important transport services brought together
            in one simple digital experience.
          </p>

        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.number}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d71920] hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl font-bold text-[#d71920]">
                  {feature.icon}
                </div>

                <span className="text-xs font-bold text-gray-300">
                  {feature.number}
                </span>

              </div>

              <h3 className="mt-8 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {feature.description}
              </p>

              <div className="mt-7 h-px w-10 bg-[#d71920] transition-all duration-300 group-hover:w-full" />

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                GET STARTED
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Start your digital
                <br />
                journey.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                Getting started with LMT-GO is simple.
                Download the application, create your account
                and start exploring your transport services.
              </p>

            </div>

            <div className="space-y-4">

              {steps.map((step) => (

                <div
                  key={step.number}
                  className="group flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-[#d71920] hover:shadow-sm"
                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white transition group-hover:bg-[#d71920]">
                    {step.number}
                  </span>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {step.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APP EXPERIENCE
      ====================================================== */}

      <section
        ref={appExperienceRef}
        id="app-preview"
        className="bg-white"
      >

        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">

          <div
            className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            {/* =================================================
                PHONE
            ================================================== */}

            <div className="flex justify-center">

              <div className="relative">

                {/* Background glow */}

                <div className="absolute inset-0 scale-90 rounded-full bg-[#d71920]/10 blur-3xl" />

                {/* Phone */}

                <div className="relative h-[540px] w-[260px] overflow-hidden rounded-[40px] border-[7px] border-[#151515] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:h-[570px] sm:w-[275px]">

                  <img
                    ref={phoneImageRef}
                    src={currentScreen.src}
                    alt={currentScreen.title}
                    draggable={false}
                    className="h-full w-full select-none object-cover"
                  />

                </div>

                {/* Phone shadow */}

                <div className="absolute -bottom-7 left-1/2 h-8 w-44 -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />

              </div>

            </div>


            {/* =================================================
                RIGHT CONTENT
            ================================================== */}

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                APP EXPERIENCE
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl">

                Explore LMT-GO

                <br />

                in action.

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">

                Take a closer look at the application and explore
                the different features available throughout the
                LMT-GO experience.

              </p>


              {/* =================================================
                  DYNAMIC SCREEN INFORMATION
              ================================================== */}

              <div
                ref={screenInfoRef}
                className="mt-8 border-l-2 border-[#d71920] pl-5"
              >

                <p className="text-xs font-bold tracking-[0.16em] text-[#d71920]">

                  SCREEN{" "}

                  {String(
                    currentScreen.id
                  ).padStart(2, "0")}

                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">

                  {currentScreen.title}

                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500">

                  {currentScreen.description}

                </p>

              </div>


              {/* =================================================
                  DESKTOP THUMBNAILS
                  DISPLAY ONLY
              ================================================== */}

              <div className="mt-9 hidden grid-cols-4 gap-3 sm:grid-cols-8 lg:grid">

                {screenshots.map(
                  (screen, index) => (

                    <div
                      key={screen.id}
                      className={`overflow-hidden rounded-xl border-2 bg-gray-100 transition-all duration-500 ${
                        activeScreenshot ===
                        index
                          ? "border-[#d71920] opacity-100 shadow-md"
                          : "border-gray-200 opacity-50"
                      }`}
                    >

                      <img
                        src={screen.src}
                        alt=""
                        draggable={false}
                        className="h-[90px] w-full select-none object-cover object-top"
                      />

                    </div>

                  )
                )}

              </div>


              {/* =================================================
                  DESKTOP INSTRUCTION
              ================================================== */}

              <p className="mt-4 hidden text-xs text-gray-400 lg:block">
                Scroll to explore the LMT-GO application.
              </p>


              {/* =================================================
                  MOBILE PROGRESS
              ================================================== */}

              <div className="mt-7 lg:hidden">

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-bold tracking-[0.16em] text-gray-400">
                    SCREEN{" "}
                    {String(
                      currentScreen.id
                    ).padStart(2, "0")}
                    {" / "}
                    08
                  </span>

                  <span className="text-[10px] text-gray-400">
                    Auto preview
                  </span>

                </div>


                <div className="mt-3 flex gap-1.5">

                  {screenshots.map(
                    (screen, index) => (

                      <span
                        key={screen.id}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          activeScreenshot ===
                          index
                            ? "w-8 bg-[#d71920]"
                            : "w-1.5 bg-gray-200"
                        }`}
                      />

                    )
                  )}

                </div>


                <p className="mt-4 text-xs text-gray-400">
                  Swipe or wait for the next screen.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOWNLOAD
      ====================================================== */}

      <section
        id="download"
        className="bg-[#090909] text-white"
      >

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            <div>

              <p className="text-xs font-bold tracking-[0.2em] text-[#ed1c24]">
                DOWNLOAD LMT-GO
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

                Ready to start
                <br />
                your journey?

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">

                Download LMT-GO from the official app store
                for your device, create your account and start
                using the digital transport experience.

              </p>


              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#"
                  className="rounded-xl bg-white px-6 py-4 text-center text-sm font-bold text-[#111111] transition hover:bg-gray-100"
                >
                  Download on Google Play
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-white/20 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#111111]"
                >
                  Download on App Store
                </a>

              </div>

              <p className="mt-4 text-[11px] text-white/30">
                Official store links will be added when the
                application download URLs are available.
              </p>

            </div>


            {/* Download information */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <p className="text-xs font-bold tracking-[0.2em] text-white/40">
                GET STARTED
              </p>

              <div className="mt-7 space-y-6">

                {[
                  {
                    number: "1",
                    title: "Choose your platform",
                    description:
                      "Select Google Play or App Store based on your device.",
                  },
                  {
                    number: "2",
                    title: "Install LMT-GO",
                    description:
                      "Download and install the application on your device.",
                  },
                  {
                    number: "3",
                    title: "Create your account",
                    description:
                      "Follow the in-app registration process.",
                  },
                  {
                    number: "4",
                    title: "Start travelling",
                    description:
                      "Explore routes, schedules and digital transport services.",
                  },
                ].map((item) => (

                  <div
                    key={item.number}
                    className="flex gap-4"
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d71920] text-xs font-bold">
                      {item.number}
                    </span>

                    <div>

                      <h3 className="text-sm font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-white/40">
                        {item.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

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

          <div className="relative z-10 max-w-2xl">

            <p className="text-xs font-bold tracking-[0.2em] text-white/70">
              LMT-GO
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              A simpler way to
              <br />
              move around.

            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">

              Plan your journey, discover routes and access
              digital transport services from one place.

            </p>

            <a
              href="#download"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#d71920] transition hover:bg-gray-100"
            >
              Get LMT-GO →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}