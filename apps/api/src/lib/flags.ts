export const FLAGS = {
  CHAIN_ATTESTATION: true,
  KILT_INTEGRATION: true,
  MOCK_ESCROW: true,
  VIDEO_SESSIONS: false,
} as const;

export type FeatureFlags = typeof FLAGS;
