import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug?: string }> | { slug?: string };
};

const VENUES = [
  { name: "Grand Palace Hall", city: "Boston", slug: "grand-palace-hall" },
  { name: "Harborview Events", city: "Cambridge", slug: "harborview-events" },
  { name: "Blue Sky Banquet", city: "Somerville", slug: "blue-sky-banquet" },
];

export default async function VenueDetail({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const slug = p?.slug;

  if (!slug) return notFound();

  const venue = VENUES.find((v) => v.slug === slug);
  if (!venue) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/venues" className="text-sm underline">
        ← Back to venues
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">{venue.name}</h1>
      <p className="mt-2 text-zinc-600">{venue.city}</p>

      <div className="mt-8 rounded-xl border p-6">
        <p className="text-zinc-700">
          Venue details coming next (capacity, amenities, photos, pricing, contact).
        </p>
      </div>
    </main>
  );
}

