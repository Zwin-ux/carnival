"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { HoloBadge, TrustBeacon } from "@echoid/ui";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SessionControls } from "./SessionControls";

interface ReviewSnippet {
  id: string;
  rating: number;
  comment?: string | null;
  author: string;
  createdAt: string;
}

interface BoothExperienceProps {
  booth: {
    id: string;
    title: string;
    description: string;
    pricePerMin: number;
    tags: string[];
    ownerName: string;
    ownerId: string;
    ownerBio?: string | null;
  };
  stats: {
    ratings: number[];
    sessionCount: number;
    averageRating: number;
  };
  reviews: ReviewSnippet[];
}

export function BoothExperience({ booth, stats, reviews }: BoothExperienceProps) {
  const reduceMotion = useReducedMotion();
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const reviewShell =
    "rounded-2xl border border-steel-700/70 bg-chrome-950/40 p-4 text-chrome-100 transition hover:border-brass-400/40";

  return (
    <div className="space-y-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
      >
        <GlassPanel tone="steel" padding="lg" className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <HoloBadge tone="plasma" label="Hosted by" meta={booth.ownerName} />
              <h1 className="mt-3 font-heading text-4xl text-chrome-100">{booth.title}</h1>
            </div>
            <div className="text-right">
              <p className="text-xs font-data uppercase tracking-[0.35em] text-steel-200/80">Rate</p>
              <p className="font-data text-3xl text-chrome-100">
                {booth.pricePerMin}
                <span className="text-base text-steel-200/70"> tokens/min</span>
              </p>
            </div>
          </div>
          {booth.ownerBio && <p className="text-sm text-steel-200/80">{booth.ownerBio}</p>}
          <div className="flex flex-wrap items-center gap-3 text-sm text-steel-200/70">
            <span className="rounded-full border border-brass-400/40 px-4 py-1 font-data text-xs uppercase tracking-[0.35em] text-brass-100">
              {stats.sessionCount} completed sessions
            </span>
            <span className="rounded-full border border-steel-600/70 px-4 py-1 text-xs text-steel-200/80">
              Avg rating {stats.averageRating.toFixed(1)}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {booth.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-steel-600/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-steel-200/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr,0.9fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.1 }}
        >
          <GlassPanel tone="steel" padding="lg">
            <SessionControls boothId={booth.id} expertId={booth.ownerId} pricePerMin={booth.pricePerMin} />
          </GlassPanel>
        </motion.div>

        <TrustBeacon ratings={stats.ratings} sessionCount={stats.sessionCount} averageRating={stats.averageRating} />
      </div>

      {reviews.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={reduceMotion ? undefined : { duration: 0.5, delay: 0.1 }}
        >
          <GlassPanel tone="steel" padding="lg" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-data uppercase tracking-[0.3em] text-steel-200/80">On-chain kudos</p>
                <h2 className="font-heading text-2xl text-chrome-100">Recent Reviews</h2>
              </div>
              <HoloBadge tone="plasma" label="Verified" meta={`${reviews.length}`} />
            </div>
            <div className="space-y-4">
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reduceMotion ? undefined : { duration: 0.4 }}
                  className={reviewShell}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="font-semibold text-chrome-100">{review.author}</div>
                    <div className="text-xs text-steel-200/70">{new Date(review.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div className="mt-2 flex items-center gap-1" aria-label={`Rating ${review.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${idx < review.rating ? "text-brass-300" : "text-steel-600"}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  {review.comment && <p className="mt-2 text-sm text-steel-200/80">{review.comment}</p>}
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      )}
    </div>
  );
}
