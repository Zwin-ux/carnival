/**
 * KILT Protocol Attestation Utilities
 * Provides verifiable credentials for experts and session completions
 */

import { FLAGS } from './flags';

/**
 * Attestation types for EchoID Carnival
 */
export enum AttestationType {
  EXPERT_QUALIFICATION = 'expert_qualification',
  SESSION_COMPLETION = 'session_completion',
  TRUST_MILESTONE = 'trust_milestone',
}

/**
 * Expert qualification categories
 */
export enum ExpertQualification {
  WEB3_DEVELOPER = 'Web3 Developer',
  SMART_CONTRACT_AUDITOR = 'Smart Contract Auditor',
  BLOCKCHAIN_ARCHITECT = 'Blockchain Architect',
  DEFI_SPECIALIST = 'DeFi Specialist',
  NFT_EXPERT = 'NFT Expert',
  SECURITY_RESEARCHER = 'Security Researcher',
  POLKADOT_DEVELOPER = 'Polkadot Developer',
}

/**
 * Trust score milestone levels
 */
export enum TrustMilestone {
  NEWCOMER = 'Newcomer', // First session
  ACTIVE = 'Active', // 5+ sessions
  TRUSTED = 'Trusted', // 10+ sessions with 4.0+ rating
  VETERAN = 'Veteran', // 25+ sessions with 4.5+ rating
  LEGENDARY = 'Legendary', // 50+ sessions with 4.8+ rating
}

/**
 * Attestation data structure
 */
export interface AttestationData {
  type: AttestationType;
  subject: string; // Wallet address
  claim: AttestationClaim;
  timestamp: number;
  issuer?: string; // Issuer wallet address (for expert attestations)
  cTypeHash?: string; // KILT CType identifier
}

/**
 * Claim data for different attestation types
 */
export type AttestationClaim =
  | ExpertQualificationClaim
  | SessionCompletionClaim
  | TrustMilestoneClaim;

export interface ExpertQualificationClaim {
  qualification: ExpertQualification;
  specialization: string[];
  verified: boolean;
  issuedDate: string;
}

export interface SessionCompletionClaim {
  sessionId: string;
  expertAddress: string;
  clientAddress: string;
  boothId: string;
  boothTitle: string;
  duration: number; // minutes
  rating?: number; // 1-5
  completedAt: string;
}

export interface TrustMilestoneClaim {
  milestone: TrustMilestone;
  trustScore: number;
  totalSessions: number;
  averageRating: number;
  achievedAt: string;
}

/**
 * Mock attestation response (for testing without KILT blockchain)
 */
export interface MockAttestationResponse {
  attestationId: string;
  attestationData: AttestationData;
  blockNumber?: number;
  txHash?: string;
}

/**
 * Create an expert qualification attestation
 */
export async function createExpertQualificationAttestation(
  expertAddress: string,
  qualification: ExpertQualification,
  specialization: string[],
  issuerAddress?: string
): Promise<MockAttestationResponse> {
  const claim: ExpertQualificationClaim = {
    qualification,
    specialization,
    verified: true,
    issuedDate: new Date().toISOString(),
  };

  const attestationData: AttestationData = {
    type: AttestationType.EXPERT_QUALIFICATION,
    subject: expertAddress,
    claim,
    timestamp: Date.now(),
    issuer: issuerAddress,
  };

  // For hackathon: Create mock attestation
  // In production: Submit to KILT chain
  if (FLAGS.KILT_INTEGRATION) {
    return createMockAttestation(attestationData);
  }

  throw new Error('KILT integration not enabled');
}

/**
 * Create a session completion attestation
 */
export async function createSessionCompletionAttestation(params: {
  sessionId: string;
  expertAddress: string;
  clientAddress: string;
  boothId: string;
  boothTitle: string;
  duration: number;
  rating?: number;
}): Promise<MockAttestationResponse> {
  const claim: SessionCompletionClaim = {
    sessionId: params.sessionId,
    expertAddress: params.expertAddress,
    clientAddress: params.clientAddress,
    boothId: params.boothId,
    boothTitle: params.boothTitle,
    duration: params.duration,
    rating: params.rating,
    completedAt: new Date().toISOString(),
  };

  const attestationData: AttestationData = {
    type: AttestationType.SESSION_COMPLETION,
    subject: params.clientAddress, // Client receives the attestation
    claim,
    timestamp: Date.now(),
    issuer: params.expertAddress,
  };

  if (FLAGS.KILT_INTEGRATION) {
    return createMockAttestation(attestationData);
  }

  throw new Error('KILT integration not enabled');
}

/**
 * Create a trust milestone attestation
 */
export async function createTrustMilestoneAttestation(params: {
  expertAddress: string;
  milestone: TrustMilestone;
  trustScore: number;
  totalSessions: number;
  averageRating: number;
}): Promise<MockAttestationResponse> {
  const claim: TrustMilestoneClaim = {
    milestone: params.milestone,
    trustScore: params.trustScore,
    totalSessions: params.totalSessions,
    averageRating: params.averageRating,
    achievedAt: new Date().toISOString(),
  };

  const attestationData: AttestationData = {
    type: AttestationType.TRUST_MILESTONE,
    subject: params.expertAddress,
    claim,
    timestamp: Date.now(),
    issuer: 'ECHOID_PLATFORM', // Platform-issued
  };

  if (FLAGS.KILT_INTEGRATION) {
    return createMockAttestation(attestationData);
  }

  throw new Error('KILT integration not enabled');
}

/**
 * Create a mock attestation (for hackathon demo)
 * In production, this would submit to KILT blockchain
 */
function createMockAttestation(
  attestationData: AttestationData
): MockAttestationResponse {
  // Generate deterministic attestation ID from data
  const attestationId = generateAttestationId(attestationData);

  // Mock blockchain data
  const mockBlockNumber = Math.floor(Math.random() * 1000000) + 5000000;
  const mockTxHash = `0x${Buffer.from(attestationId).toString('hex').substring(0, 64)}`;

  return {
    attestationId,
    attestationData,
    blockNumber: mockBlockNumber,
    txHash: mockTxHash,
  };
}

/**
 * Generate a deterministic attestation ID
 */
function generateAttestationId(data: AttestationData): string {
  const payload = JSON.stringify({
    type: data.type,
    subject: data.subject,
    timestamp: data.timestamp,
  });
  return `att_${Buffer.from(payload).toString('base64').substring(0, 32)}`;
}

/**
 * Verify an attestation (mock implementation)
 */
export async function verifyAttestation(
  attestationId: string
): Promise<boolean> {
  // In production: Query KILT chain for attestation
  // For hackathon: Mock verification
  if (FLAGS.KILT_INTEGRATION) {
    // Simulate blockchain query delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return attestationId.startsWith('att_');
  }
  return false;
}

/**
 * Get attestation trust badge based on type and claim
 */
export function getAttestationBadge(attestation: AttestationData): {
  label: string;
  color: string;
  icon: string;
} {
  switch (attestation.type) {
    case AttestationType.EXPERT_QUALIFICATION: {
      const claim = attestation.claim as ExpertQualificationClaim;
      return {
        label: `Verified ${claim.qualification}`,
        color: 'blue',
        icon: '✓',
      };
    }
    case AttestationType.SESSION_COMPLETION: {
      const claim = attestation.claim as SessionCompletionClaim;
      return {
        label: `${claim.duration}min Session`,
        color: 'green',
        icon: '✓',
      };
    }
    case AttestationType.TRUST_MILESTONE: {
      const claim = attestation.claim as TrustMilestoneClaim;
      const milestoneColors: Record<TrustMilestone, string> = {
        [TrustMilestone.NEWCOMER]: 'gray',
        [TrustMilestone.ACTIVE]: 'blue',
        [TrustMilestone.TRUSTED]: 'green',
        [TrustMilestone.VETERAN]: 'purple',
        [TrustMilestone.LEGENDARY]: 'gold',
      };
      return {
        label: claim.milestone,
        color: milestoneColors[claim.milestone] || 'gray',
        icon: '🏆',
      };
    }
    default:
      return { label: 'Verified', color: 'gray', icon: '✓' };
  }
}

/**
 * Calculate trust milestone based on stats
 */
export function calculateTrustMilestone(
  totalSessions: number,
  averageRating: number
): TrustMilestone {
  if (totalSessions >= 50 && averageRating >= 4.8) {
    return TrustMilestone.LEGENDARY;
  }
  if (totalSessions >= 25 && averageRating >= 4.5) {
    return TrustMilestone.VETERAN;
  }
  if (totalSessions >= 10 && averageRating >= 4.0) {
    return TrustMilestone.TRUSTED;
  }
  if (totalSessions >= 5) {
    return TrustMilestone.ACTIVE;
  }
  return TrustMilestone.NEWCOMER;
}
