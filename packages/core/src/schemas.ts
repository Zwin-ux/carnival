import { z } from "zod";

/**
 * Validation schemas for EchoID Carnival MVP
 * All runtime validation with TypeScript inference
 */

// User schemas
export const UserCreateSchema = z.object({
  walletAddress: z.string().min(1, "Wallet address required"),
  displayName: z.string().min(1).max(100).optional(),
  bio: z.string().max(500).optional(),
  avatarUrl: z.string().url().optional(),
});

export type UserCreate = z.infer<typeof UserCreateSchema>;

// Booth schemas
export const BoothCreateSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  description: z.string().min(10).max(1000),
  pricePerMin: z.number().int().positive("Price must be positive"),
  tags: z.array(z.string()).min(1, "At least one tag required").max(10),
});

export type BoothCreate = z.infer<typeof BoothCreateSchema>;

export const BoothUpdateSchema = BoothCreateSchema.partial().extend({
  active: z.boolean().optional(),
});

export type BoothUpdate = z.infer<typeof BoothUpdateSchema>;

export const BoothFilterSchema = z.object({
  tags: z.array(z.string()).optional(),
  minPrice: z.number().int().nonnegative().optional(),
  maxPrice: z.number().int().positive().optional(),
  active: z.boolean().optional(),
  ownerId: z.string().optional(),
});

export type BoothFilter = z.infer<typeof BoothFilterSchema>;

// Session schemas
export const SessionStartSchema = z.object({
  boothId: z.string().cuid("Invalid booth ID"),
  durationSec: z.number().int().positive().default(300), // 5 minutes
});

export type SessionStart = z.infer<typeof SessionStartSchema>;

export const SessionActivateSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
});

export type SessionActivate = z.infer<typeof SessionActivateSchema>;

export const SessionEndSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
});

export type SessionEnd = z.infer<typeof SessionEndSchema>;

export const SessionHeartbeatSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
  clientTimestamp: z.number().int().positive(),
});

export type SessionHeartbeat = z.infer<typeof SessionHeartbeatSchema>;

// Review schemas
export const ReviewCreateSchema = z.object({
  sessionId: z.string().cuid("Invalid session ID"),
  rating: z.number().int().min(1).max(5, "Rating must be 1-5"),
  comment: z.string().max(1000).optional(),
  timestamp: z.number().int().positive("Timestamp required"),
  signature: z.string().min(1, "Signature required"),
});

export type ReviewCreate = z.infer<typeof ReviewCreateSchema>;

export const ReviewPayloadSchema = z.object({
  sessionId: z.string(),
  walletAddress: z.string(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().optional(),
  timestamp: z.number().int(),
});

export type ReviewPayload = z.infer<typeof ReviewPayloadSchema>;

// Verification schemas
export const VerifyHashSchema = z.object({
  hash: z.string().regex(/^0x[a-f0-9]+$/i, "Invalid hash format"),
});

export type VerifyHash = z.infer<typeof VerifyHashSchema>;

// Analytics schemas
export const WheelAnalyticsEventSchema = z.object({
  filter: z.string().min(1),
  event: z.enum(["spin", "visit"]),
});

export type WheelAnalyticsEvent = z.infer<typeof WheelAnalyticsEventSchema>;

// Wallet auth schemas
export const WalletChallengeRequestSchema = z.object({
  walletAddress: z.string().min(1, "Wallet address required"),
});

export type WalletChallengeRequest = z.infer<typeof WalletChallengeRequestSchema>;

export const WalletVerifyRequestSchema = z.object({
  walletAddress: z.string().min(1, "Wallet address required"),
  nonce: z.string().min(1, "Nonce required"),
  signature: z.string().min(1, "Signature required"),
});

export type WalletVerifyRequest = z.infer<typeof WalletVerifyRequestSchema>;
