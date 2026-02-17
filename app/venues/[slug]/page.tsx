import Link from "next/link";
import { notFound } from "next/navigation";
import { venues } from "@/lib/venues";
import ContactForm from "@/components/ContactForm";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function VenueDetail({ params }: PageProps) {
  const { slug } = await params;

  const venue = venues.find((v) => v.slug === slug);
  if (!venue) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/venues" className="text-sm underline">
        &larr; Back to venues
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">{venue.name}</h1>
      <p className="mt-2 text-zinc-600">{venue.city}</p>

      <div className="mt-8 rounded-xl border p-6">
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold">Capacity</h2>
            <p className="text-zinc-700">{venue.capacity} guests</p>
          </div>
          <div>
            <h2 className="font-semibold">Price Range</h2>
            <p className="text-zinc-700">{venue.priceRange}</p>
          </div>
          <div>
            <h2 className="font-semibold">Amenities</h2>
            <ul className="list-inside list-disc text-zinc-700">
              {venue.amenities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ContactForm venueSlug={venue.slug} venueName={venue.name} />
    </main>
  );
}
