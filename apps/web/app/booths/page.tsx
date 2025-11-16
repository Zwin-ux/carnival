import Link from "next/link";
import { prisma } from "@echoid/db";
import { BoothCard, HoloBadge, NeoButton } from "@echoid/ui";
import { GlassPanel } from "@/components/ui/GlassPanel";

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
    <main className="flex-1 px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <GlassPanel tone="steel" padding="lg" className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-data uppercase tracking-[0.35em] text-steel-200/80">Browse experts</p>
              <h1 className="font-heading text-4xl text-chrome-100">All Booths</h1>
            </div>
            <HoloBadge tone="plasma" label="Open" meta={`${booths.length} live`} />
          </div>
          <p className="max-w-3xl text-sm text-steel-200/80">
            Layered gunmetal staging, plasma cyan overlays, verifiable credentials. Filter by tag to pinpoint the right Web3 guide.
          </p>
          {tag && (
            <Link href="/booths" className="inline-flex">
              <NeoButton variant="graphite" size="sm">
                Clear filters
              </NeoButton>
            </Link>
          )}
        </GlassPanel>

        {allTags.length > 0 && (
          <div className="holo-toolbar flex flex-wrap gap-2 px-4 py-3 text-xs font-data uppercase tracking-[0.25em]">
            <Link
              href="/booths"
              className={`rounded-full px-4 py-1 transition ${!tag ? "bg-brass-500/20 text-brass-100" : "text-steel-200/70"}`}
            >
              All
            </Link>
            {allTags.map((t) => (
              <Link
                key={t}
                href={`/booths?tag=${t}`}
                className={`rounded-full px-4 py-1 transition ${
                  tag === t ? "bg-neon-pink/20 text-neon-pink" : "text-steel-200/70"
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
          <GlassPanel tone="steel" padding="lg" className="text-center text-sm text-steel-200/80">
            {tag ? `No booths found for "${tag}".` : "No booths available yet."}
          </GlassPanel>
        )}
      </div>
    </main>
  );
}



