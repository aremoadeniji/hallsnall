export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="font-semibold tracking-tight">Halls’n’All</div>
          <nav className="flex items-center gap-3">
            <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#venues">
              Venues
            </a>
            <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#vendors">
              List your venue
            </a>
            <button className="rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800">
              Join early access
            </button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium text-zinc-600">Boston-first launch</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Find the right venue fast — without endless calls.
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Search and compare event halls, banquet spaces, and party venues. Save time with clear
              pricing, capacity, amenities, and direct contact.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800">
                Browse venues
              </button>
              <button className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-zinc-50">
                List your venue
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Capacity</div>
                <div className="text-zinc-600">Know the fit</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Amenities</div>
                <div className="text-zinc-600">Compare easily</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Direct</div>
                <div className="text-zinc-600">Contact venues</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-zinc-50 p-6">
            <div className="text-sm font-semibold">Quick search</div>
            <div className="mt-4 grid gap-3">
              <input
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                placeholder="City (e.g., Boston)"
                defaultValue="Boston"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                  placeholder="Guests (e.g., 120)"
                />
                <select className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20">
                  <option>Any event type</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                  <option>Baby shower</option>
                </select>
              </div>
              <button className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800">
                Search
              </button>
              <p className="text-xs text-zinc-500">MVP: search UI now — results page next.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="venues" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured venues</h2>
            <p className="mt-1 text-sm text-zinc-600">Sample cards — we’ll connect real data next.</p>
          </div>
          <a className="text-sm font-medium text-zinc-900 hover:underline" href="#">
            View all
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { name: "Grand Palace Hall", city: "Boston", cap: "Up to 250" },
            { name: "Harborview Events", city: "Cambridge", cap: "Up to 180" },
            { name: "Blue Sky Banquet", city: "Somerville", cap: "Up to 120" },
          ].map((v) => (
            <div key={v.name} className="rounded-2xl border p-5 hover:shadow-sm">
              <div className="text-sm font-semibold">{v.name}</div>
              <div className="mt-1 text-sm text-zinc-600">{v.city}</div>
              <div className="mt-3 text-xs text-zinc-500">{v.cap}</div>
              <button className="mt-4 w-full rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-50">
                View details
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="vendors" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Own a venue in Boston?</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            Get listed early. We’re launching city-by-city and starting in Boston. You’ll get early
            visibility and direct inquiries.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800">
              Apply to list
            </button>
            <button className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-white">
              Learn how it works
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600">
          © {new Date().getFullYear()} TinTin Holdings LLC — Halls’n’All
        </div>
      </footer>
    </main>
  );
}
