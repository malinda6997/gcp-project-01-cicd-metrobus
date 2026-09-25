const routes = [
  {
    code: "MB01",
    name: "Colombo — Negombo",
    type: "Urban Connector",
    distance: "Approx. 40 km",
    frequency: "Every 20 min",
    stops: ["Colombo", "Peliyagoda", "Katunayake", "Negombo"],
  },
  {
    code: "MB02",
    name: "Colombo — Kaduwela",
    type: "City Connector",
    distance: "Approx. 25 km",
    frequency: "Every 15 min",
    stops: ["Colombo", "Battaramulla", "Malabe", "Kaduwela"],
  },
  {
    code: "MB03",
    name: "Colombo — Maharagama",
    type: "Urban Connector",
    distance: "Approx. 20 km",
    frequency: "Every 15 min",
    stops: ["Colombo", "Nugegoda", "Nawinna", "Maharagama"],
  },
  {
    code: "MB04",
    name: "Colombo — Moratuwa",
    type: "Coastal Connector",
    distance: "Approx. 22 km",
    frequency: "Every 20 min",
    stops: ["Colombo", "Dehiwala", "Mount Lavinia", "Moratuwa"],
  },
  {
    code: "MB05",
    name: "Colombo — Kadawatha",
    type: "Northern Connector",
    distance: "Approx. 20 km",
    frequency: "Every 15 min",
    stops: ["Colombo", "Kelaniya", "Kiribathgoda", "Kadawatha"],
  },
];

export default function RoutesPage() {
  return (
    <div>

      {/* Header */}

      <section className="bg-[#111111] text-white">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            METROBUS NETWORK
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Routes built around
            <span className="text-[#d71920]"> real journeys.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Explore proposed MetroBus connections designed
            to connect major destinations and communities
            across the urban network.
          </p>

        </div>

      </section>


      {/* Route Cards */}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              ROUTE DIRECTORY
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Proposed connections
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            The routes shown below are conceptual examples
            for this MetroBus project.
          </p>

        </div>


        <div className="space-y-5">

          {routes.map((route) => (

            <article
              key={route.code}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:border-[#d71920] hover:shadow-lg"
            >

              <div className="grid lg:grid-cols-[140px_1fr_220px]">

                {/* Route code */}

                <div className="flex items-center bg-[#f7f7f7] p-7 lg:justify-center">

                  <div>

                    <p className="text-xs font-bold text-gray-400">
                      ROUTE
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#d71920]">
                      {route.code}
                    </p>

                  </div>

                </div>


                {/* Details */}

                <div className="p-7">

                  <div className="flex flex-wrap items-center gap-3">

                    <h3 className="text-xl font-bold">
                      {route.name}
                    </h3>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#d71920]">
                      {route.type}
                    </span>

                  </div>


                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">

                    <span>
                      <strong className="text-gray-900">
                        Distance:
                      </strong>{" "}
                      {route.distance}
                    </span>

                    <span>
                      <strong className="text-gray-900">
                        Frequency:
                      </strong>{" "}
                      {route.frequency}
                    </span>

                  </div>


                  {/* Stops */}

                  <div className="mt-6 flex flex-wrap items-center gap-2">

                    {route.stops.map((stop, index) => (

                      <div
                        key={stop}
                        className="flex items-center gap-2"
                      >

                        <span className="text-xs font-medium">
                          {stop}
                        </span>

                        {index !== route.stops.length - 1 && (
                          <span className="text-gray-300">
                            →
                          </span>
                        )}

                      </div>

                    ))}

                  </div>

                </div>


                {/* CTA */}

                <div className="flex items-center border-t border-gray-200 p-7 lg:border-l lg:border-t-0">

                  <div>

                    <p className="text-xs text-gray-400">
                      SERVICE STATUS
                    </p>

                    <p className="mt-1 font-semibold text-green-600">
                      Planned Service
                    </p>

                    <button className="mt-5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold transition hover:border-[#d71920] hover:text-[#d71920]">
                      View route →
                    </button>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* Travel Information */}

      <section className="bg-[#f7f7f7]">

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              TRAVEL INFORMATION
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              A simpler way to plan your journey.
            </h2>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7">

              <div className="text-2xl">01</div>

              <h3 className="mt-8 font-bold">
                Check your route
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Identify your starting point, destination
                and the most suitable connection.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-7">

              <div className="text-2xl">02</div>

              <h3 className="mt-8 font-bold">
                Follow your stops
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Understand the main stops along the route
                before starting your journey.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-7">

              <div className="text-2xl">03</div>

              <h3 className="mt-8 font-bold">
                Enjoy the journey
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Travel with clear information and a simpler
                understanding of your route.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}