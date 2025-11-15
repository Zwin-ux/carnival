import { Router } from "express";
import { z } from "zod";
import * as DB from "@echoid/db";
import { requireAuth } from "../middleware/auth";

const { prisma } = DB;

const SessionStartSchema = z.object({
  boothId: z.string().cuid("Invalid booth ID"),
  durationSec: z.number().int().positive().default(300),
});

const SessionActivateSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
});

const SessionEndSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
});

const SessionHeartbeatSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
  clientTimestamp: z.number().int().positive(),
});

export const sessionRouter = Router();

// Store heartbeat timestamps in memory (for MVP)
// TODO: Move to Redis for production
const heartbeats = new Map<string, number>();

// POST /v1/sessions/start - Create pending session
sessionRouter.post("/start", requireAuth, async (req, res, next) => {
  try {
    const data = SessionStartSchema.parse(req.body);

    // Validate booth exists and is active
    const booth = await prisma.booth.findUnique({
      where: { id: data.boothId },
      include: { owner: true },
    });

    if (!booth) {
      res.status(404).json({ error: "Booth not found" });
      return;
    }

    if (!booth.active) {
      res.status(400).json({ error: "Booth is not active" });
      return;
    }

    // Create session
    const session = await prisma.session.create({
      data: {
        boothId: data.boothId,
        clientId: req.auth!.userId,
        expertId: booth.ownerId,
        durationSec: data.durationSec,
        status: "PENDING",
      },
      include: {
        booth: true,
        client: { select: { id: true, displayName: true, walletAddress: true } },
        expert: { select: { id: true, displayName: true, walletAddress: true } },
      },
    });

    res.status(201).json({ session });
  } catch (error) {
    next(error);
  }
});

// POST /v1/sessions/activate - Start session timer
sessionRouter.post("/activate", requireAuth, async (req, res, next) => {
  try {
    const { sessionId } = SessionActivateSchema.parse(req.body);

    const session = await prisma.session.update({
      where: { id: sessionId },
      data: {
        status: "ACTIVE",
        startedAt: new Date(),
      },
      include: {
        booth: true,
        client: { select: { id: true, handle: true } },
        expert: { select: { id: true, handle: true } },
      },
    });

    // Initialize heartbeat
    heartbeats.set(sessionId, Date.now());

    res.json({ session });
  } catch (error) {
    next(error);
  }
});

// POST /v1/sessions/heartbeat - Keep session alive
sessionRouter.post("/heartbeat", requireAuth, async (req, res, next) => {
  try {
    const { sessionId, clientTimestamp } = SessionHeartbeatSchema.parse(req.body);

    // Update heartbeat timestamp
    heartbeats.set(sessionId, Date.now());

    res.json({ ok: true, serverTimestamp: Date.now() });
  } catch (error) {
    next(error);
  }
});

// POST /v1/sessions/end - End session and calculate duration
sessionRouter.post("/end", requireAuth, async (req, res, next) => {
  try {
    const { sessionId } = SessionEndSchema.parse(req.body);

    const existingSession = await prisma.session.findUnique({
      where: { id: sessionId },
    });

    if (!existingSession) {
      res.status(404).json({ error: "Session not found" });
      return;
    }

    if (existingSession.status !== "ACTIVE") {
      res.status(400).json({ error: "Session is not active" });
      return;
    }

    if (existingSession.clientId !== req.auth!.userId && existingSession.expertId !== req.auth!.userId) {
      res.status(403).json({ error: "Not authorized to modify this session" });
      return;
    }

    const endedAt = new Date();
    const startedAt = existingSession.startedAt;

    if (!startedAt) {
      res.status(400).json({ error: "Session has no start time" });
      return;
    }

    // Calculate actual duration in seconds
    const actualDurationSec = Math.floor((endedAt.getTime() - startedAt.getTime()) / 1000);

    const session = await prisma.session.update({
      where: { id: sessionId },
      data: {
        status: "COMPLETED",
        endedAt,
        durationSec: actualDurationSec,
      },
      include: {
        booth: true,
        client: { select: { id: true, handle: true } },
        expert: { select: { id: true, handle: true } },
      },
    });

    // Clear heartbeat
    heartbeats.delete(sessionId);

    res.json({ session });
  } catch (error) {
    next(error);
  }
});

// Background job to auto-end stale sessions (heartbeat timeout)
if (process.env.NODE_ENV !== "test") {
  setInterval(async () => {
    const now = Date.now();
    const timeout = 30000; // 30 seconds

    for (const [sessionId, lastHeartbeat] of heartbeats.entries()) {
      if (now - lastHeartbeat > timeout) {
        try {
          const session = await prisma.session.findUnique({
            where: { id: sessionId },
          });

          if (session && session.status === "ACTIVE" && session.startedAt) {
            await prisma.session.update({
              where: { id: sessionId },
              data: {
                status: "COMPLETED",
                endedAt: new Date(),
                durationSec: Math.floor((Date.now() - session.startedAt.getTime()) / 1000),
              },
            });

            console.log(`Auto-ended stale session: ${sessionId}`);
          }

          heartbeats.delete(sessionId);
        } catch (error) {
          console.error(`Error auto-ending session ${sessionId}:`, error);
        }
      }
    }
  }, 10000); // Check every 10 seconds
}
