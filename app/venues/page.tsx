export default function VenuesPage() {
  const venues = [
    { name: "Grand Palace Hall", city: "Boston", slug: "grand-palace-hall" },
    { name: "Harborview Events", city: "Cambridge", slug: "harborview-events" },
    { name: "Blue Sky Banquet", city: "Somerville", slug: "blue-sky-banquet" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold">Venues</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {venues.map((v) => (
          <a
            key={v.slug}
            href={`/venues/${v.slug}`}
            className="rounded-xl border p-6 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{v.name}</h2>
            <p className="text-zinc-600">{v.city}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
