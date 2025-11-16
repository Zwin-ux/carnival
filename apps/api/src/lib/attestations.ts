import { FLAGS } from "./flags";

export enum AttestationType {
  EXPERT_QUALIFICATION = "expert_qualification",
  SESSION_COMPLETION = "session_completion",
  TRUST_MILESTONE = "trust_milestone",
}

export enum ExpertQualification {
  WEB3_DEVELOPER = "Web3 Developer",
  SMART_CONTRACT_AUDITOR = "Smart Contract Auditor",
  BLOCKCHAIN_ARCHITECT = "Blockchain Architect",
  DEFI_SPECIALIST = "DeFi Specialist",
  NFT_EXPERT = "NFT Expert",
  SECURITY_RESEARCHER = "Security Researcher",
  POLKADOT_DEVELOPER = "Polkadot Developer",
}

export enum TrustMilestone {
  NEWCOMER = "Newcomer",
  ACTIVE = "Active",
  TRUSTED = "Trusted",
  VETERAN = "Veteran",
  LEGENDARY = "Legendary",
}

export interface AttestationData {
  type: AttestationType;
  subject: string;
  claim: AttestationClaim;
  timestamp: number;
  issuer?: string;
}

export type AttestationClaim = ExpertQualificationClaim | SessionCompletionClaim | TrustMilestoneClaim;

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
  duration: number;
  rating?: number;
  completedAt: string;
}

export interface TrustMilestoneClaim {
  milestone: TrustMilestone;
  trustScore: number;
  totalSessions: number;
  averageRating: number;
  achievedAt: string;
}

export interface MockAttestationResponse {
  attestationId: string;
  attestationData: AttestationData;
  blockNumber?: number;
  txHash?: string;
}

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

  if (FLAGS.KILT_INTEGRATION) {
    return createMockAttestation(attestationData);
  }

  throw new Error("KILT integration not enabled");
}

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
    subject: params.clientAddress,
    claim,
    timestamp: Date.now(),
    issuer: params.expertAddress,
  };

  if (FLAGS.KILT_INTEGRATION) {
    return createMockAttestation(attestationData);
  }

  throw new Error("KILT integration not enabled");
}

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
    issuer: "ECHOID_PLATFORM",
  };

  if (FLAGS.KILT_INTEGRATION) {
    return createMockAttestation(attestationData);
  }

  throw new Error("KILT integration not enabled");
}

function createMockAttestation(attestationData: AttestationData): MockAttestationResponse {
  const attestationId = generateAttestationId(attestationData);
  const blockNumber = Math.floor(Math.random() * 1_000_000) + 5_000_000;
  const txHash = `0x${Buffer.from(attestationId).toString("hex").substring(0, 64)}`;

  return {
    attestationId,
    attestationData,
    blockNumber,
    txHash,
  };
}

function generateAttestationId(data: AttestationData): string {
  const payload = JSON.stringify({
    type: data.type,
    subject: data.subject,
    timestamp: data.timestamp,
  });
  return `att_${Buffer.from(payload).toString("base64").substring(0, 32)}`;
}

export function calculateTrustMilestone(totalSessions: number, averageRating: number): TrustMilestone {
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
