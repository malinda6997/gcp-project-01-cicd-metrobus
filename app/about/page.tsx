export default function AboutPage() {
  return (
    <div>

      {/* Hero */}

      <section className="bg-[#111111] text-white">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            ABOUT METROBUS
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Rethinking how
            <span className="text-[#d71920]">
              {" "}Sri Lanka moves.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            MetroBus is a conceptual transportation platform
            focused on creating a clearer, more connected and
            more modern public transport experience.
          </p>

        </div>

      </section>


      {/* Story */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              OUR IDEA
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              Public transportation
              should feel simple.
            </h2>

          </div>


          <div>

            <p className="leading-8 text-gray-600">
              Getting from one place to another should not
              require passengers to understand complicated
              systems or search through unclear information.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              MetroBus explores a modern approach to public
              transportation by combining clear route
              information with a simple digital experience.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              The goal is to create an experience where
              passengers can quickly understand their route,
              destination and journey.
            </p>

          </div>

        </div>

      </section>


      {/* Vision / Mission */}

      <section className="bg-[#f7f7f7]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl bg-[#d71920] p-9 text-white sm:p-12">

              <p className="text-xs font-bold tracking-[0.2em] text-white/70">
                OUR VISION
              </p>

              <h2 className="mt-7 text-3xl font-bold">
                Connected cities.
                Better journeys.
              </h2>

              <p className="mt-6 leading-8 text-white/80">
                To create a transportation experience that
                connects people, communities and important
                destinations through simple and accessible
                mobility.
              </p>

            </div>


            <div className="rounded-3xl bg-white p-9 sm:p-12">

              <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                OUR MISSION
              </p>

              <h2 className="mt-7 text-3xl font-bold">
                Make every journey
                easier to understand.
              </h2>

              <p className="mt-6 leading-8 text-gray-500">
                We focus on clear information, intuitive
                interfaces and connected route concepts
                that put the passenger experience first.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Principles */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="max-w-2xl">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            OUR PRINCIPLES
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Designed around people.
          </h2>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-3">

          <div className="border-t-2 border-[#d71920] pt-6">

            <span className="text-xs font-bold text-gray-400">
              01
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Simplicity
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Remove unnecessary complexity and present
              travel information in a clear way.
            </p>

          </div>


          <div className="border-t-2 border-[#d71920] pt-6">

            <span className="text-xs font-bold text-gray-400">
              02
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Connectivity
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Connect important destinations and communities
              through an understandable network.
            </p>

          </div>


          <div className="border-t-2 border-[#d71920] pt-6">

            <span className="text-xs font-bold text-gray-400">
              03
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Accessibility
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Create digital experiences that are easy to
              understand and accessible to everyday users.
            </p>

          </div>

        </div>

      </section>


      {/* Final CTA */}

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">

        <div className="rounded-3xl bg-[#111111] px-7 py-14 text-white sm:px-12">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            THE FUTURE OF MOBILITY
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            Better information can create
            better journeys.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            MetroBus represents a concept for a cleaner,
            simpler and more connected transportation
            experience.
          </p>

        </div>

      </section>

    </div>
  );
}