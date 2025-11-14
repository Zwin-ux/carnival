"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrustBeacon } from "@echoid/ui";
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

  return (
    <div className="space-y-10">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-ink-800 bg-ink-900/80 p-8 shadow-panel-glow"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-steel-400">Hosted by {booth.ownerName}</p>
        <h1 className="mt-2 text-4xl font-carnival text-candy-200 drop-shadow-marquee">{booth.title}</h1>
        {booth.ownerBio && <p className="mt-3 max-w-3xl text-sm text-candy-200/70">{booth.ownerBio}</p>}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-steel-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-aurora-400/30 px-4 py-1 uppercase tracking-widest text-aurora-300">
            {stats.sessionCount} completed sessions
          </span>
          <span className="font-mono text-2xl text-aurora-300">
            {booth.pricePerMin}
            <span className="text-base text-aurora-300/70"> tokens/min</span>
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {booth.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-steel-500/40 px-3 py-1 text-xs text-candy-200/70">
              {tag}
            </span>
          ))}
        </div>
      </motion.header>

      <div className="grid gap-6 lg:grid-cols-[1.4fr,0.9fr]">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-ink-800 bg-ink-900/80 p-6 shadow-panel-glow"
        >
          <SessionControls boothId={booth.id} expertId={booth.ownerId} pricePerMin={booth.pricePerMin} />
        </motion.section>

        <TrustBeacon ratings={stats.ratings} sessionCount={stats.sessionCount} averageRating={stats.averageRating} />
      </div>

      {reviews.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={reduceMotion ? undefined : { duration: 0.5, delay: 0.1 }}
          className="space-y-4 rounded-3xl border border-ink-800 bg-ink-900/70 p-6 shadow-panel-glow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-steel-300">On-chain kudos</p>
              <h2 className="text-2xl font-carnival text-brass-300">Recent Reviews</h2>
            </div>
          </div>
          <div className="space-y-4">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reduceMotion ? undefined : { duration: 0.4 }}
                className="rounded-2xl border border-ink-700/80 bg-ink-900/80 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="font-semibold text-candy-200">{review.author}</div>
                  <div className="text-xs text-steel-400">{new Date(review.createdAt).toLocaleDateString()}</div>
                </div>
                <div className="mt-2 flex items-center gap-1 text-brass-300" aria-label={`Rating ${review.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className={idx < review.rating ? "text-brass-300" : "text-ink-700"}>
                      ?
                    </span>
                  ))}
                </div>
                {review.comment && <p className="mt-2 text-sm text-candy-200/70">{review.comment}</p>}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
