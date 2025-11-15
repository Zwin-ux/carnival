"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { HoloBadge, NeoButton } from "@echoid/ui";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { canonicalJson } from "@echoid/core";
import { celebrateSuccess } from "@/utils/confetti";
import { useWallet } from "@/providers/WalletProvider";

interface ReviewFormProps {
  sessionId: string;
  onSuccess?: () => void;
  successRedirect?: string;
}

const ratingLabels = ["Rough ride", "Needs polish", "Good", "Great", "Legendary"];

export function ReviewForm({ sessionId, onSuccess, successRedirect }: ReviewFormProps) {
  const { selectedAccount, ensureAuthenticated, signMessage } = useWallet();
  const reduceMotion = useReducedMotion();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const submitReview = async () => {
    if (!selectedAccount) return;

    try {
      setIsSubmitting(true);
      setError(null);

      const token = await ensureAuthenticated();
      const normalizedComment = comment.trim() || undefined;
      const timestamp = Date.now();

      const payload = canonicalJson({
        sessionId,
        walletAddress: selectedAccount.address,
        rating,
        comment: normalizedComment ?? "",
        timestamp,
      });

      const signature = await signMessage(payload);

      const res = await fetch(`${apiUrl}/v1/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sessionId, rating, comment: normalizedComment, timestamp, signature }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit review");
      }

      const { trustScore, attestation, anchor } = await res.json();
      setSuccess(true);
      celebrateSuccess();

      let description = `Trust score: ${trustScore.previous.toFixed(1)} -> ${trustScore.current.toFixed(1)}`;
      if (attestation) {
        description += `\nSession attestation created (Block ${attestation.blockNumber})`;
      }
      if (anchor) {
        description += `\nReview anchored on-chain (Block ${anchor.blockNumber})`;
      }

      toast.success("Review submitted", { description, duration: 6000 });
      onSuccess?.();
      if (successRedirect) {
        window.location.href = successRedirect;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? undefined : { duration: 0.5, ease: "easeOut" }}
      >
        <GlassPanel tone="neon" padding="lg" className="space-y-3 text-center">
          <div className="text-4xl">*</div>
          <p className="text-2xl font-heading text-chrome-100">Review anchored</p>
          <p className="text-sm text-steel-200/75">Thanks for keeping the graph glowing.</p>
        </GlassPanel>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? undefined : { duration: 0.5 }}
    >
      <GlassPanel tone="steel" padding="lg" className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-data uppercase tracking-[0.4em] text-mist-400">Signed kudos</p>
            <h3 className="font-heading text-2xl text-chrome-100">Leave a review</h3>
          </div>
          <HoloBadge tone="plasma" label="Attested" />
        </div>

        {error && (
          <div className="rounded-2xl border border-status-danger/30 bg-status-danger/10 px-4 py-3 text-sm text-status-danger" aria-live="assertive">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium text-chrome-200">Rating</label>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5].map((star) => {
              const isActive = star <= rating;
              return (
                <motion.button
                  key={star}
                  type="button"
                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  onClick={() => setRating(star)}
                  className={`w-28 rounded-2xl border px-3 py-2 text-center ${isActive ? "border-plasma-400/60 bg-plasma-400/10 text-plasma-200" : "border-steel-700/60 bg-chrome-950/50 text-steel-200/70"}`}
                >
                  <Star className="mx-auto h-6 w-6" fill="currentColor" />
                  <span className="mt-1 block text-xs text-steel-200/70">{ratingLabels[star - 1]}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-chrome-200">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={1000}
            rows={4}
            className="w-full rounded-2xl border border-steel-700/60 bg-chrome-950/70 px-4 py-3 text-sm text-chrome-100 placeholder:text-steel-200/30"
            placeholder="What stood out about this expert?"
          />
          <p className="text-right text-xs text-steel-200/60">{comment.length}/1000</p>
        </div>

        <NeoButton onClick={submitReview} disabled={isSubmitting || !selectedAccount} loading={isSubmitting} fullWidth>
          {isSubmitting ? "Submitting" : "Sign & Anchor Review"}
        </NeoButton>
      </GlassPanel>
    </motion.div>
  );
}
