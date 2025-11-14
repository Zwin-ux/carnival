import { notFound } from "next/navigation";
import { prisma } from "@echoid/db";
import { BoothExperience } from "@/components/BoothExperience";

export const dynamic = "force-dynamic";

interface BoothPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BoothPage({ params }: BoothPageProps) {
  const { slug } = await params;

  const booth = await prisma.booth.findUnique({
    where: { slug },
    include: {
      owner: {
        select: {
          id: true,
          displayName: true,
          bio: true,
        },
      },
      sessions: {
        where: { status: "COMPLETED" },
        include: {
          review: {
            select: {
              rating: true,
              comment: true,
              createdAt: true,
              fromUser: { select: { displayName: true } },
            },
          },
        },
        orderBy: { endedAt: "desc" },
      },
    },
  });

  if (!booth) {
    notFound();
  }

  const ratings = booth.sessions
    .map((session) => session.review?.rating)
    .filter((rating): rating is number => typeof rating === "number");

  const averageRating = ratings.length
    ? ratings.reduce((total, rating) => total + rating, 0) / ratings.length
    : 0;

  const reviews = booth.sessions
    .filter((session) => session.review)
    .slice(0, 6)
    .map((session) => ({
      id: session.id,
      rating: session.review!.rating,
      comment: session.review!.comment,
      author: session.review!.fromUser?.displayName ?? "Anonymous",
      createdAt: session.review!.createdAt.toISOString(),
    }));

  return (
    <main className="flex-1 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <BoothExperience
          booth={{
            id: booth.id,
            title: booth.title,
            description: booth.description,
            pricePerMin: booth.pricePerMin,
            tags: booth.tags,
            ownerName: booth.owner.displayName ?? "Anonymous",
            ownerId: booth.owner.id,
            ownerBio: booth.owner.bio,
          }}
          stats={{
            ratings,
            sessionCount: booth.sessions.length,
            averageRating,
          }}
          reviews={reviews}
        />
      </div>
    </main>
  );
}
