import { Router } from "express";
import { z } from "zod";
import * as DB from "@echoid/db";
import { requireAuth } from "../middleware/auth";
import { calculateTrustScore } from "../lib/reputation";
import { canonicalJson, hashPayload, verifySignature } from "../lib/crypto";
import { createReviewMerkleTree, getMerkleRoot, anchorMerkleRoot } from "../lib/merkle";
import { createSessionCompletionAttestation } from "../lib/attestations";

const { prisma, AttestationType: PrismaAttestationType } = DB;

const ReviewCreateSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
  rating: z.number().int().min(1).max(5, "Rating must be between 1 and 5"),
  comment: z.string().max(1000).optional(),
  timestamp: z.number().int().positive("Timestamp required"),
  signature: z.string().min(1, "Signature required"),
});

export const reviewRouter = Router();

// POST /v1/reviews - Submit review and update trust score
reviewRouter.post("/", requireAuth, async (req, res, next) => {
  try {
    const data = ReviewCreateSchema.parse(req.body);

    // Get session details
    const session = await prisma.session.findUnique({
      where: { id: data.sessionId },
      include: {
        booth: true,
        client: true,
        expert: true,
      },
    });

    if (!session) {
      res.status(404).json({ error: "Session not found" });
      return;
    }

    if (session.clientId !== req.auth!.userId) {
      res.status(403).json({ error: "Only the session participant can leave a review" });
      return;
    }

    if (session.status !== "COMPLETED") {
      res.status(400).json({ error: "Session must be completed before review" });
      return;
    }

    // Check if review already exists
    const existingReview = await prisma.review.findUnique({
      where: { sessionId: data.sessionId },
    });

    if (existingReview) {
      res.status(400).json({ error: "Review already exists for this session" });
      return;
    }

    // Build canonical payload
    const payload = {
      sessionId: data.sessionId,
      address: req.auth!.walletAddress,
      rating: data.rating,
      comment: data.comment ?? "",
      timestamp: data.timestamp,
    };

    const canonicalPayload = canonicalJson(payload);
    const payloadHash = hashPayload(payload);

    // Verify signature
    const isValidSignature = await verifySignature(
      canonicalPayload,
      data.signature,
      req.auth!.walletAddress
    );

    if (!isValidSignature) {
      res.status(400).json({ error: "Invalid signature" });
      return;
    }

    // Create review
    const review = await prisma.review.create({
      data: {
        sessionId: data.sessionId,
        fromUserId: session.clientId,
        toUserId: session.expertId,
        rating: data.rating,
        comment: data.comment,
        payload: canonicalPayload,
        payloadHash,
        signature: data.signature,
        verified: isValidSignature,
      },
    });

    // Update booth trust score using EWMA
    const currentScore = session.booth.trustScore;
    const newScore = calculateTrustScore(currentScore, data.rating);

    await prisma.booth.update({
      where: { id: session.boothId },
      data: { trustScore: newScore },
    });

    // Create session completion attestation
    let attestationData = null;
    try {
      const sessionDuration = session.endedAt && session.startedAt
        ? Math.floor((session.endedAt.getTime() - session.startedAt.getTime()) / 60000)
        : 5;

      const attestation = await createSessionCompletionAttestation({
        sessionId: session.id,
        expertAddress: session.expert.walletAddress,
        clientAddress: session.client.walletAddress,
        boothId: session.booth.id,
        boothTitle: session.booth.title,
        duration: sessionDuration,
        rating: data.rating,
      });

      // Store attestation in database
      await prisma.attestation.create({
        data: {
          attestationId: attestation.attestationId,
          type: PrismaAttestationType.SESSION_COMPLETION,
          subjectAddress: session.client.walletAddress,
          claimData: JSON.stringify(attestation.attestationData.claim),
          issuerAddress: session.expert.walletAddress,
          blockNumber: attestation.blockNumber,
          txHash: attestation.txHash,
          verified: true,
        },
      });

      attestationData = {
        attestationId: attestation.attestationId,
        blockNumber: attestation.blockNumber,
        txHash: attestation.txHash,
      };
    } catch (error) {
      console.error('Failed to create session attestation:', error);
      // Continue even if attestation fails
    }

    // Anchor review hash on-chain (batched with recent reviews)
    let anchorData = null;
    try {
      // Get recent unanchored reviews
      const recentReviews = await prisma.review.findMany({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 3600000), // Last hour
          },
        },
        select: { payloadHash: true },
        take: 10,
      });

      const reviewHashes = recentReviews.map((r) => r.payloadHash);

      if (reviewHashes.length >= 5) { // Batch when we have 5+ reviews
        const tree = createReviewMerkleTree(reviewHashes);
        const merkleRoot = getMerkleRoot(tree);
        const anchor = await anchorMerkleRoot(merkleRoot, reviewHashes.length);

        // Store anchor in database
        await prisma.merkleAnchor.create({
          data: {
            merkleRoot: anchor.merkleRoot,
            blockNumber: anchor.blockNumber,
            txHash: anchor.txHash,
            leafCount: anchor.leafCount,
            reviewHashes,
          },
        });

        anchorData = {
          merkleRoot: anchor.merkleRoot,
          blockNumber: anchor.blockNumber,
          txHash: anchor.txHash,
        };
      }
    } catch (error) {
      console.error('Failed to anchor review hash:', error);
      // Continue even if anchoring fails
    }

    res.status(201).json({
      review,
      trustScore: {
        previous: currentScore,
        current: newScore,
      },
      attestation: attestationData,
      anchor: anchorData,
    });
  } catch (error) {
    next(error);
  }
});

// GET /v1/reviews/:sessionId - Get review by session
reviewRouter.get("/:sessionId", async (req, res, next) => {
  try {
    const review = await prisma.review.findUnique({
      where: { sessionId: req.params.sessionId },
      include: {
        fromUser: { select: { id: true, handle: true } },
        toUser: { select: { id: true, handle: true } },
        session: {
          include: {
            booth: { select: { title: true, slug: true } },
          },
        },
      },
    });

    if (!review) {
      res.status(404).json({ error: "Review not found" });
      return;
    }

    res.json({ review });
  } catch (error) {
    next(error);
  }
});
