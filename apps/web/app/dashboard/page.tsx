import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowRight, Sparkles } from "lucide-react";
import * as DB from "@echoid/db";
import { GlassPanel, HoloBadge, NeoButton } from "@echoid/ui";
import { requireServerAuth } from "@/lib/server-auth";

export default async function DashboardPage() {
  const auth = await requireServerAuth();
  dayjs.extend(relativeTime);

  const [booths, sessionsAsClient, sessionsAsExpert, reviews] = await Promise.all([
    DB.prisma.booth.findMany({
      where: { ownerId: auth.userId },
      include: { _count: { select: { sessions: true } } },
      orderBy: { updatedAt: "desc" },
    }),
    DB.prisma.session.findMany({
      where: { clientId: auth.userId },
      include: {
        booth: { select: { title: true, slug: true, pricePerMin: true } },
        expert: { select: { displayName: true } },
        review: { select: { id: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    DB.prisma.session.findMany({
      where: { expertId: auth.userId },
      include: {
        booth: { select: { title: true, slug: true, pricePerMin: true } },
        client: { select: { displayName: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    DB.prisma.review.findMany({
      where: { toUserId: auth.userId },
      include: {
        fromUser: { select: { displayName: true, walletAddress: true } },
        session: {
          select: {
            booth: { select: { title: true, slug: true } },
            createdAt: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
  ]);

  const upcomingSessions = sessionsAsExpert.filter((session) => session.status === "PENDING");
  const pastSessionsAsClient = sessionsAsClient.filter((session) => session.status === "COMPLETED");
  const pastSessionsAsExpert = sessionsAsExpert.filter((session) => session.status === "COMPLETED");
  const pendingReviews = pastSessionsAsClient.filter((session) => !session.review);
  const sessionCount = sessionsAsExpert.length + sessionsAsClient.length;

  const statCards = [
    {
      label: "My Booths",
      value: booths.length,
      meta: booths.length ? "Keep listings fresh and legendary." : "Launch your first booth to get booked.",
    },
    {
      label: "Sessions",
      value: sessionCount,
      meta: upcomingSessions.length ? `${upcomingSessions.length} awaiting kickoff.` : "No pending sessions.",
    },
    {
      label: "Reviews",
      value: reviews.length,
      meta: "Signed and anchored feedback from your clients.",
    },
  ];

  const listShell =
    "rounded-2xl border border-graphite-700/60 bg-graphite-900/50 p-4 text-ice-200 transition hover:border-plasma-400/40";

  return (
    <main className="flex-1 px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <GlassPanel depth="lg" padding="lg" accent="graphite" className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-3">
              <HoloBadge tone="plasma" label="Command Deck" meta="Live telemetry" />
              <div>
                <p className="text-xs font-data uppercase tracking-[0.35em] text-mist-400">Welcome back</p>
                <h1 className="font-heading text-4xl text-ice-100">Dashboard</h1>
              </div>
              <p className="max-w-3xl text-sm text-ice-300/80">
                Track booth performance, wrap every session with signed reviews, and keep the plasma trust loop glowing.
              </p>
            </div>
            <span className="rounded-full border border-plasma-400/40 px-4 py-1 font-data text-xs uppercase tracking-[0.3em] text-plasma-200">
              {sessionCount} total sessions
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/booths" className="w-full sm:w-auto">
              <NeoButton variant="plasma" iconLeft={<Sparkles className="h-4 w-4" />} fullWidth>
                Browse Marketplace
              </NeoButton>
            </Link>
            <Link href="/dashboard?review=submitted" className="w-full sm:w-auto">
              <NeoButton variant="graphite" iconRight={<ArrowRight className="h-4 w-4" />} fullWidth>
                Recent Reviews
              </NeoButton>
            </Link>
          </div>
        </GlassPanel>

        <section className="grid gap-4 md:grid-cols-3">
          {statCards.map((card) => (
            <GlassPanel key={card.label} depth="sm" padding="md" accent="graphite" className="space-y-2">
              <p className="text-xs font-data uppercase tracking-[0.35em] text-mist-400">{card.label}</p>
              <p className="font-heading text-3xl text-ice-100">{card.value}</p>
              <p className="text-xs text-ice-300/70">{card.meta}</p>
            </GlassPanel>
          ))}
        </section>

        {pendingReviews.length > 0 && (
          <GlassPanel depth="md" padding="lg" accent="nova" className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-data uppercase tracking-[0.35em] text-mist-400">Pending reviews</p>
                <h2 className="font-heading text-2xl text-ice-100">Sign and anchor</h2>
              </div>
              <span className="rounded-full border border-nova-400/40 px-4 py-1 text-xs font-data uppercase tracking-[0.3em] text-nova-200">
                {pendingReviews.length} waiting
              </span>
            </div>
            <div className="space-y-3">
              {pendingReviews.map((session) => (
                <div key={session.id} className={listShell}>
                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-ice-100">{session.booth.title}</p>
                      <p className="text-xs text-mist-400">
                        Hosted by {session.expert?.displayName || "Anonymous"} - {dayjs(session.endedAt ?? session.createdAt).fromNow()}
                      </p>
                    </div>
                    <Link
                      href={`/dashboard/review/${session.id}`}
                      className="text-xs font-semibold uppercase tracking-[0.35em] text-plasma-200 hover:text-plasma-100"
                    >
                      Sign review
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        )}

        <section className="grid gap-6 lg:grid-cols-2">
          <GlassPanel depth="md" padding="lg" accent="graphite" className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-heading text-2xl text-ice-100">My Booths</h2>
              <HoloBadge tone="plasma" label="Live" meta={`${booths.length} total`} />
            </div>
            {booths.length === 0 ? (
              <p className="text-sm text-ice-300/70">You haven&apos;t created any booths yet.</p>
            ) : (
              <ul className="space-y-3">
                {booths.map((booth) => (
                  <li key={booth.id} className={listShell}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-ice-100">{booth.title}</p>
                        <p className="text-xs text-mist-400">Updated {dayjs(booth.updatedAt).fromNow()}</p>
                      </div>
                      <span className="text-xs text-mist-300">{booth._count.sessions} sessions</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </GlassPanel>

          <GlassPanel depth="md" padding="lg" accent="graphite" className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-heading text-2xl text-ice-100">Upcoming Sessions</h2>
              <HoloBadge tone="plasma" label="Queue" meta={`${upcomingSessions.length}`} />
            </div>
            {upcomingSessions.length === 0 ? (
              <p className="text-sm text-ice-300/70">No upcoming sessions.</p>
            ) : (
              <ul className="space-y-3">
                {upcomingSessions.map((session) => (
                  <li key={session.id} className={listShell}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-ice-100">{session.booth.title}</p>
                        <p className="text-xs text-mist-400">{session.client?.displayName || "Anonymous"}</p>
                      </div>
                      <span className="rounded-full border border-plasma-400/40 px-3 py-1 text-xs text-plasma-200">
                        {session.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-mist-400">Requested {dayjs(session.createdAt).fromNow()}</p>
                  </li>
                ))}
              </ul>
            )}
          </GlassPanel>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <GlassPanel depth="md" padding="lg" accent="graphite" className="space-y-4">
            <h2 className="font-heading text-2xl text-ice-100">Booking History</h2>
            {pastSessionsAsClient.length === 0 ? (
              <p className="text-sm text-ice-300/70">You haven&apos;t completed any sessions as a client yet.</p>
            ) : (
              <ul className="space-y-3">
                {pastSessionsAsClient.map((session) => (
                  <li key={session.id} className={listShell}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-ice-100">{session.booth.title}</p>
                        <p className="text-xs text-mist-400">
                          Hosted by {session.expert?.displayName || "Anonymous"} - {dayjs(session.endedAt ?? session.createdAt).fromNow()}
                        </p>
                      </div>
                      <span className="rounded-full border border-nova-400/40 px-3 py-1 text-xs text-nova-200">
                        {Math.round(session.durationSec / 60)} minutes
                      </span>
                    </div>
                    {!session.review && (
                      <Link
                        href={`/dashboard/review/${session.id}`}
                        className="text-xs font-semibold uppercase tracking-[0.35em] text-plasma-200 hover:text-plasma-100"
                      >
                        Sign review
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </GlassPanel>

          <GlassPanel depth="md" padding="lg" accent="graphite" className="space-y-4">
            <h2 className="font-heading text-2xl text-ice-100">Host History</h2>
            {pastSessionsAsExpert.length === 0 ? (
              <p className="text-sm text-ice-300/70">You haven&apos;t completed any sessions as an expert yet.</p>
            ) : (
              <ul className="space-y-3">
                {pastSessionsAsExpert.map((session) => (
                  <li key={session.id} className={listShell}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-ice-100">{session.booth.title}</p>
                        <p className="text-xs text-mist-400">
                          {session.client?.displayName || "Anonymous"} - {dayjs(session.endedAt ?? session.createdAt).fromNow()}
                        </p>
                      </div>
                      <span className="rounded-full border border-plasma-400/40 px-3 py-1 text-xs text-plasma-200">
                        {Math.round(session.durationSec / 60)} minutes
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </GlassPanel>
        </section>

        <GlassPanel depth="md" padding="lg" accent="graphite" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-heading text-2xl text-ice-100">Latest Feedback</h2>
            <HoloBadge tone="plasma" label="Reviews" meta={`${reviews.length}`} />
          </div>
          {reviews.length === 0 ? (
            <p className="text-sm text-ice-300/70">No reviews yet.</p>
          ) : (
            <ul className="space-y-3">
              {reviews.map((review) => (
                <li key={review.id} className={listShell}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-ice-100">{review.session.booth.title}</p>
                      <p className="text-xs text-mist-400">{review.fromUser.displayName || review.fromUser.walletAddress}</p>
                      <p className="text-xs text-mist-400">Reviewed {dayjs(review.createdAt).fromNow()}</p>
                    </div>
                    <span className="rounded-full border border-plasma-400/40 px-3 py-1 text-xs text-plasma-200">
                      {review.rating} / 5
                    </span>
                  </div>
                  {review.comment && <p className="mt-2 text-sm text-ice-300/80">{review.comment}</p>}
                </li>
              ))}
            </ul>
          )}
        </GlassPanel>
      </div>
    </main>
  );
}
