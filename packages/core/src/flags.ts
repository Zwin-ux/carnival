/**
 * Feature flags for MVP development
 * Set to false for initial release, abstracted for future enhancement
 */
export const FLAGS = {
  /**
   * Enable KILT blockchain attestation
   * Hackathon: true (showcase Polkadot ecosystem integration)
   */
  CHAIN_ATTESTATION: true,

  /**
   * Enable KILT DID integration
   * Hackathon: true (verifiable credentials for experts)
   */
  KILT_INTEGRATION: true,

  /**
   * Use mock escrow for payments
   * MVP: true (real escrow implementation later)
   */
  MOCK_ESCROW: true,

  /**
   * Enable video/audio for sessions
   * MVP: false (text only for now)
   */
  VIDEO_SESSIONS: false,
} as const;

export type FeatureFlags = typeof FLAGS;
