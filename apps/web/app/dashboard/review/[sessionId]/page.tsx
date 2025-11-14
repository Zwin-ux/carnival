import { notFound, redirect } from "next/navigation";
import { prisma } from "@echoid/db";
import { ReviewForm } from "@/components/ReviewForm";
import { requireServerAuth } from "@/lib/server-auth";
import { GlassPanel, HoloBadge } from "@echoid/ui";

interface ReviewSessionPageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function ReviewSessionPage({ params }: ReviewSessionPageProps) {
  const auth = await requireServerAuth();
  const { sessionId } = await params;

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: {
      booth: { select: { title: true, slug: true, pricePerMin: true } },
      expert: { select: { displayName: true, walletAddress: true } },
      review: { select: { id: true } },
    },
  });

  if (!session) {
    notFound();
  }

  if (session.clientId !== auth.userId) {
    redirect("/dashboard?error=not-authorized");
  }

  if (session.status !== "COMPLETED") {
    redirect(`/dashboard?session=${session.id}&review=pending`);
  }

  if (session.review) {
    redirect(`/dashboard?session=${session.id}&review=exists`);
  }

  const formattedEndedAt = session.endedAt
    ? new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(session.endedAt)
    : "Just now";

  const detailItems = [
    {
      label: "Expert",
      value: session.expert?.displayName || "Anonymous Expert",
    },
    {
      label: "Rate",
      value: `${session.booth.pricePerMin} tokens / min`,
    },
    {
      label: "Completed",
      value: formattedEndedAt,
    },
  ];

  return (
    <main className="flex-1 px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <GlassPanel depth="lg" padding="lg" accent="graphite" className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-data uppercase tracking-[0.35em] text-mist-400">Session ready for review</p>
              <h1 className="font-heading text-3xl text-ice-100">{session.booth.title}</h1>
            </div>
            <HoloBadge tone="plasma" label="Review" meta="Pending" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {detailItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-graphite-700/60 bg-graphite-900/50 p-4">
                <p className="text-xs font-data uppercase tracking-[0.3em] text-mist-400">{item.label}</p>
                <p className="mt-1 text-sm text-ice-100">{item.value}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <ReviewForm sessionId={session.id} successRedirect="/dashboard?review=submitted" />
      </div>
    </main>
  );
}
