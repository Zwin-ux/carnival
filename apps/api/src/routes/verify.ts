import { Router } from "express";
import { ZodError } from "zod";
import * as DB from "@echoid/db";
import * as Core from "@echoid/core";

const { prisma } = DB;
const {
  hashPayload,
  verifySignature,
  VerifyHashSchema,
  createReviewMerkleTree,
  generateMerkleProof,
  verifyMerkleProof,
  getBlockExplorerUrl,
} = Core;

export const verifyRouter = Router();

// GET /v1/verify/:hash - Verify review by hash
verifyRouter.get("/:hash", async (req, res, next) => {
  try {
    const { hash } = VerifyHashSchema.parse({ hash: req.params.hash });
    const normalizedHash = hash.toLowerCase();

    // Find review by hash
    const review = await prisma.review.findUnique({
      where: { payloadHash: normalizedHash },
      include: {
        fromUser: {
          select: {
            id: true,
            displayName: true,
            walletAddress: true,
          },
        },
        toUser: {
          select: {
            id: true,
            displayName: true,
            walletAddress: true,
          },
        },
        session: {
          include: {
            booth: {
              select: {
                title: true,
                slug: true,
              },
            },
          },
        },
      },
    });

    if (!review) {
      res.status(404).json({
        verified: false,
        error: "No cryptographic record exists for that payload hash.",
        merkle: {
          anchored: false,
          error: "Hash was never recorded in Carnival review storage.",
        },
      });
      return;
    }

    let payloadObject: unknown;
    try {
      payloadObject = JSON.parse(review.payload);
    } catch (parseError) {
      res.status(500).json({
        verified: false,
        error: "Stored review payload is malformed JSON.",
        details: parseError instanceof Error ? parseError.message : String(parseError),
      });
      return;
    }

    // Re-hash payload to verify integrity
    if (typeof payloadObject !== "object" || payloadObject === null) {
      res.status(500).json({
        verified: false,
        error: "Stored review payload is not an object and cannot be hashed.",
      });
      return;
    }

    const recomputedHash = hashPayload(payloadObject as Record<string, unknown>);

    const hashMatches = recomputedHash === review.payloadHash;

    // Re-verify signature
    const signatureValid = await verifySignature(
      review.payload,
      review.signature,
      review.fromUser.walletAddress
    );

    // Determine overall verification status
    const verified = hashMatches && signatureValid;

    // Locate merkle anchor containing this hash
    const anchor = await prisma.merkleAnchor.findFirst({
      where: {
        reviewHashes: {
          has: normalizedHash,
        },
      },
    });

    let merkleResponse:
      | {
          anchored: true;
          merkleRoot: string;
          leafCount: number;
          blockNumber: number | null;
          txHash: string | null;
          blockExplorerUrl: string | null;
          anchoredAt: string;
          proof: {
            leaf: string;
            siblings: string[];
            positions: number[];
            verified: boolean;
          };
        }
      | {
          anchored: false;
          error: string;
        } = {
      anchored: false,
      error: "Review hash has not been anchored in a Merkle batch yet.",
    };

    if (anchor) {
      try {
        const tree = createReviewMerkleTree(anchor.reviewHashes);
        const proof = generateMerkleProof(tree, normalizedHash, anchor.reviewHashes);
        const proofVerified = verifyMerkleProof(proof.leaf, proof.proof, proof.root, proof.position);

        merkleResponse = {
          anchored: true,
          merkleRoot: anchor.merkleRoot,
          leafCount: anchor.leafCount,
          blockNumber: anchor.blockNumber ?? null,
          txHash: anchor.txHash ?? null,
          blockExplorerUrl: anchor.txHash ? getBlockExplorerUrl(anchor.txHash) : null,
          anchoredAt: anchor.createdAt.toISOString(),
          proof: {
            leaf: proof.leaf,
            siblings: proof.proof,
            positions: proof.position,
            verified: proofVerified,
          },
        };
      } catch (merkleError) {
        merkleResponse = {
          anchored: false,
          error:
            merkleError instanceof Error
              ? `Failed to generate Merkle proof: ${merkleError.message}`
              : "Failed to generate Merkle proof.",
        };
      }
    }

    res.json({
      verified,
      review: {
        id: review.id,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.createdAt,
        from: {
          displayName: review.fromUser.displayName,
          walletAddress: review.fromUser.walletAddress,
        },
        to: {
          displayName: review.toUser.displayName,
          walletAddress: review.toUser.walletAddress,
        },
        booth: {
          title: review.session.booth.title,
          slug: review.session.booth.slug,
        },
      },
      verification: {
        hashMatches,
        signatureValid,
        storedHash: review.payloadHash,
        recomputedHash,
      },
      merkle: merkleResponse,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        verified: false,
        error: "Invalid review hash format.",
        details: error.issues.map((issue) => issue.message),
      });
      return;
    }

    next(error);
  }
});
