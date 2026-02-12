export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="font-semibold tracking-tight">Halls’n’All</div>

          <nav className="flex items-center gap-4">
            <a href="/venues" className="text-sm hover:underline">
              Venues
            </a>
            <a href="#vendors" className="text-sm hover:underline">
              List your venue
            </a>
            <button className="rounded-lg bg-black px-4 py-2 text-sm text-white">
              Join early access
            </button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Find the right venue fast — without endless calls
        </h1>

        <p className="mt-4 text-zinc-600">
          Discover and compare event halls, banquet spaces, and party venues.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/venues"
            className="rounded-xl bg-black px-6 py-3 text-white"
          >
            Browse venues
          </a>

          <a
            href="#vendors"
            className="rounded-xl border px-6 py-3"
          >
            List your venue
          </a>
        </div>
      </section>

      <section id="vendors" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">
            Own a venue in Boston?
          </h2>

          <p className="mt-2 text-zinc-600">
            Get listed early and receive direct booking inquiries.
          </p>

          <button className="mt-4 rounded-xl bg-black px-6 py-3 text-white">
            Apply to list
          </button>
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} TinTin Holdings LLC — Halls’n’All
      </footer>
    </main>
  );
}
