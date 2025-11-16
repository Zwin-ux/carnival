'use client';

import {
  getAttestationBadge,
  type AttestationData,
  AttestationType,
} from '@echoid/core';

interface AttestationBadgeProps {
  attestation: {
    type: string;
    claim: unknown;
    blockNumber?: number;
    txHash?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  showBlockchain?: boolean;
}

export function AttestationBadge({
  attestation,
  size = 'md',
  showBlockchain = false,
}: AttestationBadgeProps) {
  // Convert database attestation to AttestationData format
  const attestationData: AttestationData = {
    type: attestation.type as AttestationType,
    subject: "",
    claim: attestation.claim as AttestationData["claim"],
    timestamp: Date.now(),
  };

  const badge = getAttestationBadge(attestationData);

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  const colorClasses: Record<string, string> = {
    blue: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
    green: 'bg-mint-300/10 text-mint-300 border-mint-300/30',
    purple: 'bg-purple-400/10 text-purple-300 border-purple-400/30',
    gold: 'bg-brass-500/20 text-brass-300 border-brass-400/40',
    gray: 'bg-gray-400/10 text-gray-300 border-gray-400/30',
  };

  return (
    <div className="inline-flex flex-col gap-1">
      <div
        className={`
          inline-flex items-center gap-1.5 rounded-md border font-mono
          ${sizeClasses[size]}
          ${colorClasses[badge.color] || colorClasses.gray}
          transition-all duration-150 hover:scale-105
        `}
        title={`Verified on KILT Protocol ${
          attestation.blockNumber ? `(Block ${attestation.blockNumber})` : ''
        }`}
      >
        <span className="text-base">{badge.icon}</span>
        <span className="font-medium">{badge.label}</span>
      </div>

      {showBlockchain && attestation.blockNumber && (
        <a
          href={`https://spiritnet.subscan.io/extrinsic/${attestation.txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
          title="View on Block Explorer"
        >
          Block {attestation.blockNumber} ↗
        </a>
      )}
    </div>
  );
}

/**
 * Attestation Grid - Display multiple attestations
 */
interface AttestationGridProps {
  attestations: Array<{
    id: string;
    type: string;
    claim: unknown;
    blockNumber?: number;
    txHash?: string;
  }>;
  title?: string;
}

export function AttestationGrid({ attestations, title }: AttestationGridProps) {
  if (attestations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {title && (
        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap gap-2">
        {attestations.map((attestation) => (
          <AttestationBadge
            key={attestation.id}
            attestation={attestation}
            size="md"
            showBlockchain
          />
        ))}
      </div>
    </div>
  );
}
