import Link from "next/link";

const VENUES = [
  {
    name: "Grand Palace Hall",
    city: "Boston",
    slug: "grand-palace-hall",
    priceFrom: 2500,
    capacity: 250,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60",
  },
  {
    name: "Harborview Events",
    city: "Cambridge",
    slug: "harborview-events",
    priceFrom: 1800,
    capacity: 180,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60",
  },
  {
    name: "Blue Sky Banquet",
    city: "Somerville",
    slug: "blue-sky-banquet",
    priceFrom: 1400,
    capacity: 140,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60",
  },
];

function money(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function VenuesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Venues</h1>
        <p className="text-zinc-600">
          Browse halls around Boston (Boston-first launch).
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VENUES.map((v) => (
          <Link
            key={v.slug}
            href={`/venues/${v.slug}`}
            className="group overflow-hidden rounded-2xl border bg-white hover:shadow-md transition"
          >
            <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
              <img
                src={v.image}
                alt={v.name}
                className="h-full w-full object-cover group-hover:scale-[1.03] transition"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{v.name}</h2>
                  <p className="text-sm text-zinc-600">{v.city}</p>
                </div>
                <span className="rounded-full border px-3 py-1 text-xs text-zinc-700">
                  From {money(v.priceFrom)}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm text-zinc-700">
                <span className="rounded-lg bg-zinc-50 px-2 py-1">
                  Capacity: {v.capacity}
                </span>
                <span className="rounded-lg bg-zinc-50 px-2 py-1">
                  Weddings • Parties • Corporate
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium underline underline-offset-4">
                  View details
                </span>
                <span className="text-sm text-zinc-500">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
