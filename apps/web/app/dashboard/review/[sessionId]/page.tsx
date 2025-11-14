import { notFound, redirect } from "next/navigation";
import { prisma } from "@echoid/db";
import { ReviewForm } from "@/components/ReviewForm";
import { requireServerAuth } from "@/lib/server-auth";

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

  return (
    <main className="flex-1 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-ink-800 rounded-lg border-2 border-brass-600/40 p-6">
          <p className="text-sm text-candy-200/50 mb-2">Session ready for review</p>
          <h1 className="text-4xl font-carnival text-brass-400 tracking-wide mb-4">
            {session.booth.title}
          </h1>
          <div className="space-y-3 text-sm text-candy-200/70">
            <div className="flex items-center justify-between">
              <span>Expert</span>
              <span className="font-semibold text-mint-300">
                {session.expert?.displayName || "Anonymous Expert"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Rate</span>
              <span className="font-mono text-cyan-300">{session.booth.pricePerMin} tokens/min</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Completed</span>
              <span>{formattedEndedAt}</span>
            </div>
          </div>
        </div>

        <ReviewForm sessionId={session.id} successRedirect="/dashboard?review=submitted" />
      </div>
    </main>
  );
}
