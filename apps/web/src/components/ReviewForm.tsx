"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { TicketButton } from "@echoid/ui";
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

      let description = `Trust score: ${trustScore.previous.toFixed(1)} ? ${trustScore.current.toFixed(1)}`;
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
        className="space-y-3 rounded-3xl border border-mint-400/40 bg-gradient-to-br from-mint-400/20 to-brass-400/20 p-8 text-center shadow-panel-glow"
      >
        <div className="text-6xl">?</div>
        <p className="text-2xl font-carnival text-mint-200">Review anchored!</p>
        <p className="text-sm text-candy-200/70">Thanks for keeping the carnival trust loop alive.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? undefined : { duration: 0.5 }}
      className="space-y-5 rounded-3xl border border-ink-800 bg-ink-900/80 p-6 shadow-panel-glow"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-steel-400">Signed Kudos</p>
        <h3 className="text-2xl font-carnival text-brass-300">Leave a review</h3>
      </div>

      {error && (
        <div className="rounded-2xl border border-rust-500/40 bg-rust-500/10 px-4 py-3 text-sm text-rust-200" aria-live="assertive">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium text-candy-200/80">Rating</label>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              type="button"
              whileHover={reduceMotion ? undefined : { scale: 1.1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              onClick={() => setRating(star)}
              className={`text-4xl transition-colors ${star <= rating ? "text-brass-300" : "text-ink-700"}`}
            >
              ?
              <span className="block text-xs text-steel-400">{ratingLabels[star - 1]}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-candy-200/80">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={1000}
          rows={4}
          className="w-full rounded-2xl border border-ink-700 bg-ink-950/70 px-4 py-3 text-sm text-candy-200 placeholder:text-candy-200/30"
          placeholder="What stood out about this expert?"
        />
        <p className="text-right text-xs text-steel-500">{comment.length}/1000</p>
      </div>

      <TicketButton onClick={submitReview} disabled={isSubmitting || !selectedAccount}>
        {isSubmitting ? "Submitting..." : "Sign & anchor review"}
      </TicketButton>
    </motion.div>
  );
}
