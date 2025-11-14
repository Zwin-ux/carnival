import Link from "next/link";
import { prisma } from "@echoid/db";
import { BoothCard } from "@echoid/ui";

export const dynamic = "force-dynamic";

interface BoothsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BoothsPage({ searchParams }: BoothsPageProps) {
  const params = await searchParams;
  const tag = typeof params.tag === "string" ? params.tag : undefined;

  const booths = await prisma.booth.findMany({
    where: {
      active: true,
      ...(tag && { tags: { has: tag } }),
    },
    include: {
      owner: { select: { displayName: true, bio: true } },
      _count: { select: { sessions: true } },
    },
    orderBy: { trustScore: "desc" },
  });

  const allTags = Array.from(new Set(booths.flatMap((b) => b.tags))).sort();

  return (
    <main className="flex-1 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-3xl border border-ink-800 bg-ink-900/80 p-8 shadow-panel-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Browse experts</p>
          <div className="mt-2 flex flex-wrap items-baseline gap-4">
            <h1 className="text-4xl font-carnival text-candy-200 drop-shadow-marquee">All Booths</h1>
            <span className="rounded-full border border-brass-400/40 px-3 py-1 text-xs text-brass-200">
              {booths.length} open experiences
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-candy-200/70">
            Brass-lit workstations, neon signage, and verifiable credentials. Filter by tag to find the perfect Web3 guide.
          </p>
        </section>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            <Link
              href="/booths"
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                !tag ? "bg-brass-500 text-ink-950" : "border border-ink-700 text-candy-200"
              }`}
            >
              All
            </Link>
            {allTags.map((t) => (
              <Link
                key={t}
                href={`/booths?tag=${t}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  tag === t ? "bg-aurora-400/90 text-ink-950" : "border border-ink-700 text-candy-200/80"
                }`}
              >
                #{t}
              </Link>
            ))}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {booths.map((booth, index) => (
            <Link key={booth.id} href={`/booth/${booth.slug}`} className="focus-visible:outline-none">
              <BoothCard
                title={booth.title}
                description={booth.description}
                pricePerMin={booth.pricePerMin}
                trustScore={booth.trustScore}
                tags={booth.tags}
                sessionCount={booth._count.sessions}
                ownerName={booth.owner.displayName || "Anonymous"}
                boothNumber={index + 1}
                isOpen={booth.active}
              />
            </Link>
          ))}
        </div>

        {booths.length === 0 && (
          <div className="rounded-3xl border border-ink-800 bg-ink-900/80 p-8 text-center text-sm text-candy-200/70">
            {tag ? `No booths found for “${tag}”` : "No booths available yet."}
          </div>
        )}
      </div>
    </main>
  );
}

