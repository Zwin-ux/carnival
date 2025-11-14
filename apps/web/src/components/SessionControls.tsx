"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { GlassPanel, NeoButton, TimerDisplay } from "@echoid/ui";
import { useWallet } from "@/providers/WalletProvider";

interface SessionControlsProps {
  boothId: string;
  expertId: string;
  pricePerMin: number;
}

export function SessionControls({ boothId, expertId: _expertId, pricePerMin }: SessionControlsProps) {
  const { selectedAccount, ensureAuthenticated } = useWallet();
  const routerApi = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const reduceMotion = useReducedMotion();

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearHeartbeat = () => {
    if (heartbeatIntervalRef.current) {
      clearInterval(heartbeatIntervalRef.current);
      heartbeatIntervalRef.current = null;
    }
  };

  useEffect(() => () => clearHeartbeat(), []);

  const buildHeaders = async () => {
    const token = await ensureAuthenticated();
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  };

  const startSession = async () => {
    if (!selectedAccount) return;

    try {
      setIsLoading(true);
      setError(null);

      const headers = await buildHeaders();
      const createRes = await fetch(`${routerApi}/v1/sessions/start`, {
        method: "POST",
        headers,
        body: JSON.stringify({ boothId, durationSec: 300 }),
      });

      if (!createRes.ok) {
        const payload = await createRes.json().catch(() => ({}));
        throw new Error(payload.error || "Failed to create session");
      }

      const { session } = await createRes.json();
      setSessionId(session.id);

      const activateRes = await fetch(`${routerApi}/v1/sessions/activate`, {
        method: "POST",
        headers,
        body: JSON.stringify({ sessionId: session.id }),
      });

      if (!activateRes.ok) {
        const payload = await activateRes.json().catch(() => ({}));
        throw new Error(payload.error || "Failed to activate session");
      }

      setIsActive(true);
      toast.success("Session started", {
        description: "Timer is rolling. Jam through your questions then leave a review!",
      });

      heartbeatIntervalRef.current = setInterval(async () => {
        try {
          await fetch(`${routerApi}/v1/sessions/heartbeat`, {
            method: "POST",
            headers,
            body: JSON.stringify({ sessionId: session.id, clientTimestamp: Date.now() }),
          });
        } catch (err) {
          console.error("Heartbeat failed", err);
        }
      }, 10000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to start session");
    } finally {
      setIsLoading(false);
    }
  };

  const endSession = async () => {
    if (!sessionId) return;

    try {
      setIsLoading(true);
      clearHeartbeat();

      const headers = await buildHeaders();
      const endRes = await fetch(`${routerApi}/v1/sessions/end`, {
        method: "POST",
        headers,
        body: JSON.stringify({ sessionId }),
      });

      if (!endRes.ok) {
        const payload = await endRes.json().catch(() => ({}));
        throw new Error(payload.error || "Failed to end session");
      }

      setIsActive(false);
      setSessionId(null);
      toast.success("Session completed", {
        description: "Redirecting you to sign and anchor your review.",
      });
      window.setTimeout(() => {
        window.location.href = `/dashboard/review/${sessionId}`;
      }, 300);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to end session");
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedAccount) {
    return (
      <GlassPanel depth="sm" padding="md" accent="graphite" className="text-center text-sm text-ice-300/80">
        Connect your Polkadot wallet to reserve a slot.
      </GlassPanel>
    );
  }

  if (isActive && sessionId) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? undefined : { duration: 0.4 }}
        className="space-y-4"
      >
        <GlassPanel depth="md" padding="lg" accent="plasma" className="text-center space-y-4">
          <p className="text-xs font-data uppercase tracking-[0.4em] text-mist-400">Live session</p>
          <div className="flex flex-col items-center gap-4">
            <TimerDisplay durationSec={300} autoStart onComplete={endSession} />
            <p className="text-xs text-ice-300/70">Server tracks precise duration for billing.</p>
            <NeoButton variant="nova" onClick={endSession} disabled={isLoading}>
              {isLoading ? "Ending..." : "End Session"}
            </NeoButton>
          </div>
        </GlassPanel>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? undefined : { duration: 0.5 }}
      className="space-y-4"
    >
      {error && (
        <div className="rounded-2xl border border-status-danger/30 bg-status-danger/10 px-4 py-3 text-sm text-status-danger" aria-live="assertive">
          {error}
        </div>
      )}

      <GlassPanel depth="md" padding="lg" accent="graphite">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-data uppercase tracking-[0.4em] text-mist-400">Five-minute consult</p>
            <p className="font-data text-3xl text-plasma-300">
              {pricePerMin * 5}
              <span className="text-base text-ice-300/70"> tokens</span>
            </p>
            <p className="text-xs text-ice-300/70">{pricePerMin} tokens / min - mock escrow</p>
          </div>
          <NeoButton onClick={startSession} disabled={isLoading}>
            {isLoading ? "Starting..." : "Book Session"}
          </NeoButton>
        </div>
      </GlassPanel>

      <p className="text-xs text-ice-300/70">
        We&apos;ll prompt you to sign an attested review immediately after the call, keeping the trust loop alive.
      </p>
    </motion.div>
  );
}
