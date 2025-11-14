import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import * as DB from "@echoid/db";
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

  return (
    <main className="flex-1 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-ink-800 bg-ink-900/80 p-8 shadow-panel-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Welcome back</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-carnival text-candy-200 drop-shadow-marquee">Dashboard</h1>
            <span className="rounded-full border border-brass-400/40 px-3 py-1 text-xs text-brass-200">
              {sessionCount} total sessions
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-candy-200/70">
            Track booth performance, wrap sessions with signed reviews, and keep the carnival trust loop glowing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/booths" className="rounded-full bg-brass-500 px-4 py-2 text-sm font-semibold text-ink-950">
              Browse marketplace
            </Link>
            <Link href="/dashboard?review=submitted" className="rounded-full border border-ink-700 px-4 py-2 text-sm text-candy-200/80">
              Recent reviews
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-ink-800 bg-ink-900/70 p-5 shadow-panel-glow">
            <p className="text-xs uppercase tracking-[0.35em] text-steel-400">My Booths</p>
            <p className="mt-2 text-3xl font-carnival text-brass-300">{booths.length}</p>
            <p className="text-xs text-steel-400">{booths.length ? "Keep listings fresh and legendary." : "Launch your first booth to get booked."}</p>
          </div>
          <div className="rounded-2xl border border-ink-800 bg-ink-900/70 p-5 shadow-panel-glow">
            <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Sessions</p>
            <p className="mt-2 text-3xl font-carnival text-aurora-300">{sessionCount}</p>
            <p className="text-xs text-steel-400">{upcomingSessions.length ? `${upcomingSessions.length} awaiting kickoff.` : "No pending sessions."}</p>
          </div>
          <div className="rounded-2xl border border-ink-800 bg-ink-900/70 p-5 shadow-panel-glow">
            <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Reviews</p>
            <p className="mt-2 text-3xl font-carnival text-candy-200">{reviews.length}</p>
            <p className="text-xs text-steel-400">Signed and anchored feedback from your clients.</p>
          </div>
        </section>

        {pendingReviews.length > 0 && (
          <section className="rounded-3xl border border-candy-400/30 bg-candy-400/5 p-6 shadow-panel-glow">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-steel-400">Pending reviews</p>
                <p className="text-2xl font-carnival text-candy-200">Sign your kudos</p>
              </div>
              <span className="rounded-full border border-candy-400/60 px-3 py-1 text-xs text-candy-200">
                {pendingReviews.length} awaiting
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {pendingReviews.map((session) => (
                <div key={session.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-candy-400/20 bg-ink-900/70 px-4 py-3 text-sm text-candy-200/80">
                  <div>
                    <p className="font-semibold text-candy-200">{session.booth.title}</p>
                    <p className="text-xs text-steel-400">
                      Hosted by {session.expert?.displayName || "Anonymous"} · completed {dayjs(session.endedAt ?? session.createdAt).fromNow()}
                    </p>
                  </div>
                  <Link href={`/dashboard/review/${session.id}`} className="text-xs font-semibold text-candy-200/90 hover:text-candy-200">
                    Sign review ?
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink-800 bg-ink-900/70 p-6 shadow-panel-glow">
            <h2 className="text-xl font-carnival text-brass-300">My Booths</h2>
            {booths.length === 0 ? (
              <p className="mt-3 text-sm text-candy-200/60">You haven’t created any booths yet.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {booths.map((booth) => (
                  <li key={booth.id} className="rounded-2xl border border-ink-700/60 bg-ink-900/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-candy-200">{booth.title}</p>
                        <p className="text-xs text-steel-400">Updated {dayjs(booth.updatedAt).fromNow()}</p>
                      </div>
                      <span className="text-xs text-steel-300">{booth._count.sessions} sessions</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-3xl border border-ink-800 bg-ink-900/70 p-6 shadow-panel-glow">
            <h2 className="text-xl font-carnival text-brass-300">Upcoming Sessions</h2>
            {upcomingSessions.length === 0 ? (
              <p className="mt-3 text-sm text-candy-200/60">No upcoming sessions.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {upcomingSessions.map((session) => (
                  <li key={session.id} className="rounded-2xl border border-ink-700/60 bg-ink-900/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-candy-200">{session.booth.title}</p>
                        <p className="text-xs text-steel-400">{session.client?.displayName || "Anonymous"}</p>
                      </div>
                      <span className="rounded-full border border-mint-400/40 px-3 py-1 text-xs text-mint-300">{session.status}</span>
                    </div>
                    <p className="mt-2 text-xs text-steel-400">Requested {dayjs(session.createdAt).fromNow()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink-800 bg-ink-900/70 p-6 shadow-panel-glow">
            <h2 className="text-xl font-carnival text-brass-300">Booking History</h2>
            {pastSessionsAsClient.length === 0 ? (
              <p className="mt-3 text-sm text-candy-200/60">You haven’t completed any sessions as a client yet.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {pastSessionsAsClient.map((session) => (
                  <li key={session.id} className="rounded-2xl border border-ink-700/60 bg-ink-900/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-candy-200">{session.booth.title}</p>
                        <p className="text-xs text-steel-400">
                          Hosted by {session.expert?.displayName || "Anonymous"} · {dayjs(session.endedAt ?? session.createdAt).fromNow()}
                        </p>
                      </div>
                      <span className="rounded-full border border-candy-400/40 px-3 py-1 text-xs text-candy-200">
                        {Math.round(session.durationSec / 60)} minutes
                      </span>
                    </div>
                    {!session.review && (
                      <Link href={`/dashboard/review/${session.id}`} className="text-xs font-semibold text-candy-200/90 hover:text-candy-200">
                        Sign review ?
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-3xl border border-ink-800 bg-ink-900/70 p-6 shadow-panel-glow">
            <h2 className="text-xl font-carnival text-brass-300">Host History</h2>
            {pastSessionsAsExpert.length === 0 ? (
              <p className="mt-3 text-sm text-candy-200/60">You haven’t completed any sessions as an expert yet.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {pastSessionsAsExpert.map((session) => (
                  <li key={session.id} className="rounded-2xl border border-ink-700/60 bg-ink-900/80 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-candy-200">{session.booth.title}</p>
                        <p className="text-xs text-steel-400">
                          {session.client?.displayName || "Anonymous"} · {dayjs(session.endedAt ?? session.createdAt).fromNow()}
                        </p>
                      </div>
                      <span className="rounded-full border border-mint-400/40 px-3 py-1 text-xs text-mint-300">
                        {Math.round(session.durationSec / 60)} minutes
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-ink-800 bg-ink-900/70 p-6 shadow-panel-glow">
          <h2 className="text-xl font-carnival text-brass-300">Latest Feedback</h2>
          {reviews.length === 0 ? (
            <p className="mt-3 text-sm text-candy-200/60">No reviews yet.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {reviews.map((review) => (
                <li key={review.id} className="rounded-2xl border border-ink-700/60 bg-ink-900/80 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-candy-200">{review.session.booth.title}</p>
                      <p className="text-xs text-steel-400">
                        {review.fromUser.displayName || review.fromUser.walletAddress}
                      </p>
                      <p className="text-xs text-steel-400">Reviewed {dayjs(review.createdAt).fromNow()}</p>
                    </div>
                    <span className="rounded-full border border-mint-400/40 px-3 py-1 text-xs text-mint-300">
                      {review.rating}?
                    </span>
                  </div>
                  {review.comment && <p className="mt-2 text-sm text-candy-200/70">“{review.comment}”</p>}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

