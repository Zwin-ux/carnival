import { prisma } from "@echoid/db";
import { BoothCard } from "@echoid/ui";
import { MidwayHero } from "@/components/MidwayHero";
import { FortuneWheel } from "@/components/FortuneWheel";

const THEME_TAGS = [
  {
    key: "kilt",
    label: "KILT Stewards",
    description: "Credentialed KILT builders",
    tag: "kilt",
  },
  {
    key: "rust",
    label: "Rust Mentors",
    description: "Systems engineers on standby",
    tag: "rust",
  },
];

export const dynamic = "force-dynamic";

async function getFeaturedBooths() {
  return prisma.booth.findMany({
    where: { active: true },
    include: {
      owner: { select: { displayName: true } },
      _count: { select: { sessions: true } },
    },
    orderBy: { trustScore: "desc" },
    take: 12,
  });
}

async function getWheelMetrics() {
  const metrics = await prisma.wheelMetric.findMany();
  return metrics.reduce(
    (acc, metric) => {
      acc.totalSpins += metric.spins;
      acc.totalVisits += metric.visits;
      acc.perFilter[metric.filter] = {
        spins: metric.spins,
        visits: metric.visits,
      };
      return acc;
    },
    { totalSpins: 0, totalVisits: 0, perFilter: {} as Record<string, { spins: number; visits: number }> }
  );
}

export default async function HomePage() {
  const [featuredBooths, wheelStats] = await Promise.all([getFeaturedBooths(), getWheelMetrics()]);

  const tagFilters = THEME_TAGS.filter((theme) =>
    featuredBooths.some((booth) => booth.tags.some((tag) => tag.toLowerCase() === theme.tag.toLowerCase()))
  );

  return (
    <main className="flex-1">
      <MidwayHero primaryCtaHref="/booths" secondaryCtaHref="/dashboard" />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <FortuneWheel booths={featuredBooths} initialStats={wheelStats} tagFilters={tagFilters} />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Trusted performers</p>
            <h2 className="text-5xl font-carnival text-brass-400 drop-shadow-lg">Featured Booths</h2>
            <p className="mt-2 text-sm text-candy-200/70">High-signal experts with verifiable reviews.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredBooths.map((booth, index) => (
              <BoothCard
                key={booth.id}
                title={booth.title}
                description={booth.description}
                pricePerMin={booth.pricePerMin}
                trustScore={booth.trustScore}
                tags={booth.tags}
                sessionCount={booth._count.sessions}
                ownerName={booth.owner.displayName || "Anonymous"}
                boothNumber={index + 1}
                isOpen={booth.active}
                onClick={() => {
                  window.location.href = `/booth/${booth.slug}`;
                }}
              />
            ))}
          </div>

          {featuredBooths.length === 0 && (
            <p className="text-center text-candy-200/40">
              No booths available. Run <code className="rounded bg-ink-800 px-2 py-1">pnpm db:seed</code> to populate demo data.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
