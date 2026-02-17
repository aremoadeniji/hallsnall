import Link from "next/link";

export const VENUES = [
  {
    name: "Grand Palace Hall",
    city: "Boston",
    slug: "grand-palace-hall",
    priceFrom: 2500,
    capacity: 250,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60",
    about:
      "A spacious banquet hall with a clean modern look, flexible layouts, and ample parking.",
    amenities: ["On-site parking", "Kitchen access", "AV-ready", "Bar area"],
  },
  {
    name: "Harborview Events",
    city: "Cambridge",
    slug: "harborview-events",
    priceFrom: 1800,
    capacity: 180,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60",
    about:
      "Bright, elegant space ideal for receptions, birthdays, and corporate mixers near the city core.",
    amenities: ["Natural light", "Vendor-friendly", "Nearby transit", "Wi-Fi"],
  },
  {
    name: "Blue Sky Banquet",
    city: "Somerville",
    slug: "blue-sky-banquet",
    priceFrom: 1400,
    capacity: 140,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60",
    about:
      "A warm, welcoming venue with flexible packages and a layout that works for most events.",
    amenities: ["Flexible packages", "Tables/chairs", "Sound system", "Staff"],
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
            className="group overflow-hidden rounded-2xl border bg-white transition hover:shadow-md"
          >
            <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
              <img
                src={v.image}
                alt={v.name}
                className="h-full w-full object-cover transition group-hover:scale-[1.03]"
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
