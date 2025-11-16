import { prisma } from "@echoid/db";
import { BoothCard, HoloBadge } from "@echoid/ui";
import { MidwayHero } from "@/components/MidwayHero";
import { FortuneWheel } from "@/components/FortuneWheel";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { OnboardingShowcase } from "@/components/OnboardingShowcase";

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
    include: {
      owner: { select: { handle: true, displayName: true } },
      _count: { select: { sessions: true } },
    },
    orderBy: { createdAt: "desc" },
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
    <main className="flex-1 space-y-16">
      <MidwayHero primaryCtaHref="/booths" secondaryCtaHref="/dashboard" />
      <OnboardingShowcase />

      <section className="holo-section px-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <GlassPanel tone="steel" padding="lg" className="h-full">
              <FortuneWheel booths={featuredBooths} initialStats={wheelStats} tagFilters={tagFilters} />
            </GlassPanel>
          </div>
          <GlassPanel tone="brass" padding="lg" className="lg:w-80">
            <div className="space-y-3 text-left">
              <HoloBadge tone="plasma" label="Live Metrics" meta="Updated in real-time" />
              <p className="text-lg font-heading text-ice-100">Fortune Wheel v2</p>
              <p className="text-sm text-ice-300/80">
                Micro-texture background, holo orb tilt, and SVG-driven trust meters keep spins grounded in telemetry.
              </p>
            </div>
            <div className="mt-6 space-y-3 text-sm text-ice-300/70">
              <p>- Adaptive routing between wallet-only and credential-only filters.</p>
              <p>- Particle shader engages only on hero & dashboard to protect perf.</p>
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="holo-section px-4">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="accent-spine space-y-2 text-left">
            <HoloBadge tone="nova" label="Marketplace" meta="Booth Grid" />
            <h2 className="font-heading text-4xl text-ice-100">Featured Booths</h2>
            <p className="max-w-2xl text-sm text-ice-300/75">
              Each card surfaces trust data, availability, and credential capsules inside glassmorphism shells.
            </p>
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
            <p className="text-center text-ice-300/40">
              No booths available. Run{" "}
              <code className="rounded bg-graphite-900/80 px-2 py-1 text-ice-100">pnpm db:seed</code> to populate demo data.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
