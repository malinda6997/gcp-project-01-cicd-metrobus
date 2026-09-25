export default function AboutPage() {
  return (
    <div>

      {/* Hero */}

      <section className="bg-[#101010] text-white">

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
            focused on creating a clearer, simpler and more
            connected public transport experience.
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

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Public transportation
              should feel simple.
            </h2>

          </div>


          <div className="text-gray-600">

            <p className="leading-8">
              Finding your way through a public transportation
              network should not feel complicated. Passengers
              need clear information about routes, destinations,
              stops and journey times.
            </p>

            <p className="mt-6 leading-8">
              MetroBus explores a modern digital approach to
              public transportation by bringing important
              journey information into one simple experience.
            </p>

            <p className="mt-6 leading-8">
              The concept is focused on making everyday travel
              information easier to discover and understand.
            </p>

          </div>

        </div>

      </section>


      {/* Vision / Mission */}

      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl bg-[#d71920] p-8 text-white sm:p-12">

              <span className="text-xs font-bold tracking-[0.2em] text-white/70">
                OUR VISION
              </span>

              <h2 className="mt-7 text-3xl font-bold">
                Connected cities.
                Better journeys.
              </h2>

              <p className="mt-6 leading-8 text-white/80">
                To create a transportation experience that
                connects people, communities and destinations
                through clear and accessible mobility information.
              </p>

            </div>


            <div className="rounded-3xl bg-white p-8 sm:p-12">

              <span className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
                OUR MISSION
              </span>

              <h2 className="mt-7 text-3xl font-bold">
                Make every journey
                easier to understand.
              </h2>

              <p className="mt-6 leading-8 text-gray-500">
                We focus on clear information, intuitive
                interfaces and connected route concepts that
                put the passenger experience first.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Principles */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div>

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            OUR PRINCIPLES
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Designed around people.
          </h2>

        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {[
            {
              number: "01",
              title: "Simplicity",
              text: "Present route and journey information without unnecessary complexity.",
            },
            {
              number: "02",
              title: "Connectivity",
              text: "Create a network experience that helps people understand how destinations connect.",
            },
            {
              number: "03",
              title: "Accessibility",
              text: "Design digital experiences that are easy to navigate on any device.",
            },
          ].map((item) => (

            <div
              key={item.number}
              className="border-t-2 border-[#d71920] pt-7"
            >

              <span className="text-xs font-bold text-gray-400">
                {item.number}
              </span>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Concept */}

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-[#111111] px-7 py-16 text-white sm:px-12 lg:px-16">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            THE METROBUS CONCEPT
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            Better information can create
            better journeys.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            MetroBus represents a concept for a cleaner,
            simpler and more connected transportation experience
            built around everyday passengers.
          </p>

        </div>

      </section>

    </div>
  );
}