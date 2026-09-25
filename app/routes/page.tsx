const routes = [
  {
    code: "CM01",
    name: "Makulbura → Pettah",
    distance: "23.3 km",
    time: "Approximately 1 hr 30 min",
    stops: "Kottawa, Battaramulla, Borella, Town Hall",
  },
  {
    code: "CM02",
    name: "Milleminium City → Colombo Fort",
    distance: "27.2 km",
    time: "Approximately 1 hr 30 min",
    stops: "Athurugiriya, Malabe, Battaramulla, Borella",
  },
  {
    code: "CM03",
    name: "Makulbura → Kadawatha",
    distance: "34.8 km",
    time: "Approximately 2 hrs",
    stops: "Apeixa, Nawagamuwa, Nugegoda, Kelaniya",
  },
  {
    code: "CM04",
    name: "Dematagoda → Panadura",
    distance: "28.7 km",
    time: "Approximately 1 hr 45 min",
    stops: "Borella, Colombo, Kottawa, Homagama",
  },
  {
    code: "CM05",
    name: "Battaramulla → Ekala",
    distance: "29.9 km",
    time: "Approximately 2 hrs",
    stops: "Rajagiriya, Peliyagoda, Wattala",
  },
  {
    code: "CM06",
    name: "Kollupitiya Circular",
    distance: "14 km",
    time: "Approximately 45 min",
    stops: "Bambalapitiya, Wellawatte, Liberty Plaza",
  },
  {
    code: "CM07",
    name: "Kesbewa → Pettah",
    distance: "35.7 km",
    time: "Approximately 2 hrs",
    stops: "Piliyandala, Werahera, Boralesgamuwa",
  },
];

export default function RoutesPage() {
  return (
    <div>

      {/* Header */}

      <section className="bg-[#101010] text-white">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
            METROBUS NETWORK
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Routes built around
            <span className="text-[#d71920]">
              {" "}real journeys.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Explore proposed MetroBus connections,
            destinations and example service information
            across the urban network.
          </p>

        </div>

      </section>


      {/* Search */}

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-7">

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              SEARCH TIMETABLE
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Where are you going?
            </h2>

          </div>


          <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">

            <div>

              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Starting point
              </label>

              <div className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-400">
                Search or select origin
              </div>

            </div>


            <div>

              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Destination
              </label>

              <div className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-400">
                Search or select destination
              </div>

            </div>


            <button className="self-end rounded-xl bg-[#d71920] px-7 py-3.5 text-sm font-bold text-white">
              Search
            </button>

          </div>

        </div>

      </section>


      {/* Route directory */}

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              ACTIVE ROUTES
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              MetroBus connections
            </h2>

          </div>

          <span className="hidden text-xs text-gray-400 sm:block">
            7 proposed routes
          </span>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {routes.map((route) => (

            <article
              key={route.code}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#d71920] hover:shadow-lg"
            >

              <div className="flex items-center justify-between bg-[#f7f7f5] px-6 py-4">

                <span className="text-sm font-bold text-[#d71920]">
                  {route.code}
                </span>

                <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold text-green-600">
                  PLANNED
                </span>

              </div>


              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {route.name}
                </h3>


                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-[10px] font-bold tracking-wide text-gray-400">
                      DISTANCE
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {route.distance}
                    </p>
                  </div>


                  <div>
                    <p className="text-[10px] font-bold tracking-wide text-gray-400">
                      TRAVEL TIME
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {route.time.replace("Approximately ", "")}
                    </p>
                  </div>

                </div>


                <div className="mt-6 border-t border-gray-100 pt-5">

                  <p className="text-[10px] font-bold tracking-wide text-gray-400">
                    KEY STOPS
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {route.stops}
                  </p>

                </div>


                <button className="mt-6 w-full rounded-full bg-[#d71920] py-3 text-xs font-bold text-white transition hover:bg-[#b51218]">
                  View Route →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* Timetable */}

      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-bold tracking-[0.2em] text-[#d71920]">
              SAMPLE TIMETABLE
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Next departures
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Example timetable data for the MetroBus concept.
            </p>

          </div>


          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">

            <div className="hidden grid-cols-4 bg-[#111111] px-6 py-4 text-[10px] font-bold tracking-wide text-gray-400 sm:grid">

              <span>TIME</span>
              <span>ROUTE</span>
              <span>DESTINATION</span>
              <span>STATUS</span>

            </div>


            {[
              ["13:00", "CM01", "Kadawatha", "On schedule"],
              ["13:30", "CM02", "Colombo Fort", "On schedule"],
              ["13:45", "CM03", "Kadawatha", "On schedule"],
              ["14:00", "CM01", "Pettah", "On schedule"],
              ["14:30", "CM04", "Panadura", "On schedule"],
            ].map((item) => (

              <div
                key={`${item[0]}-${item[1]}`}
                className="grid gap-2 border-b border-gray-100 px-6 py-5 last:border-0 sm:grid-cols-4 sm:gap-0"
              >

                <div className="font-bold">
                  {item[0]}
                </div>

                <div className="text-sm font-semibold text-[#d71920]">
                  {item[1]}
                </div>

                <div className="text-sm">
                  {item[2]}
                </div>

                <div className="text-xs font-semibold text-green-600">
                  ● {item[3]}
                </div>

              </div>

            ))}

          </div>

          <p className="mt-5 text-center text-xs text-gray-400">
            Timetable information shown above is conceptual
            and may change.
          </p>

        </div>

      </section>

    </div>
  );
}