/**
 * Merkle Tree Utilities for Review Hash Anchoring
 * Batches review hashes into merkle tree for on-chain anchoring
 */

import { MerkleTree } from 'merkletreejs';
import { createHash } from 'crypto';
import { FLAGS } from './flags';

const SORT_PAIRS = true;

/**
 * Merkle proof structure
 */
export interface MerkleProof {
  leaf: string;
  proof: string[];
  root: string;
  position: number[];
}

/**
 * On-chain anchor data
 */
export interface OnChainAnchor {
  merkleRoot: string;
  blockNumber?: number;
  txHash?: string;
  timestamp: number;
  leafCount: number;
}

/**
 * Review hash with metadata
 */
export interface ReviewHashData {
  hash: string;
  sessionId: string;
  timestamp: number;
}

/**
 * Create a merkle tree from review hashes
 */
export function createReviewMerkleTree(reviewHashes: string[]): MerkleTree {
  if (reviewHashes.length === 0) {
    throw new Error('Cannot create merkle tree from empty array');
  }

  // Convert hashes to buffers
  const leaves = reviewHashes.map((hash) => {
    // Remove 0x prefix if present
    const cleanHash = hash.startsWith('0x') ? hash.slice(2) : hash;
    return Buffer.from(cleanHash, 'hex');
  });

  // Create merkle tree with SHA-256
  const tree = new MerkleTree(leaves, hashFunc, {
    sortPairs: SORT_PAIRS,
    hashLeaves: false, // Hashes are already provided
  });

  return tree;
}

/**
 * Hash function for merkle tree (SHA-256)
 */
function hashFunc(data: Buffer): Buffer {
  return createHash('sha256').update(data).digest();
}

/**
 * Get merkle root as hex string
 */
export function getMerkleRoot(tree: MerkleTree): string {
  const root = tree.getRoot();
  return `0x${root.toString('hex')}`;
}

/**
 * Generate merkle proof for a specific review hash
 */
export function generateMerkleProof(
  tree: MerkleTree,
  reviewHash: string,
  allHashes: string[]
): MerkleProof {
  // Find the position of this hash
  const position = allHashes.findIndex((h) => h === reviewHash);
  if (position === -1) {
    throw new Error('Review hash not found in tree');
  }

  // Remove 0x prefix if present
  const cleanHash = reviewHash.startsWith('0x') ? reviewHash.slice(2) : reviewHash;
  const leaf = Buffer.from(cleanHash, 'hex');

  // Get the proof
  const proof = tree.getProof(leaf);
  const proofHashes = proof.map((p) => `0x${p.data.toString('hex')}`);

  // Get positions (left/right indicators)
  const positions = proof.map((p) => (p.position === 'left' ? 0 : 1));

  return {
    leaf: reviewHash,
    proof: proofHashes,
    root: getMerkleRoot(tree),
    position: positions,
  };
}

/**
 * Verify a merkle proof
 */
export function verifyMerkleProof(
  leaf: string,
  proof: string[],
  root: string,
  positions: number[]
): boolean {
  try {
    // Convert hex strings to buffers
    const cleanLeaf = leaf.startsWith('0x') ? leaf.slice(2) : leaf;
    let current = Buffer.from(cleanLeaf, 'hex') as Buffer;

    // Rebuild the merkle root from proof
  for (let i = 0; i < proof.length; i++) {
    const cleanProof = proof[i].startsWith('0x') ? proof[i].slice(2) : proof[i];
      const proofElement = Buffer.from(cleanProof, 'hex') as Buffer;

    if (SORT_PAIRS) {
      const buffers = [current, proofElement].sort((a, b) => Buffer.compare(a, b));
      current = hashFunc(Buffer.concat([buffers[0], buffers[1]]));
      continue;
    }

    // Determine order based on position when not sorting pairs
    if (positions[i] === 0) {
      // Proof element on left
      current = hashFunc(Buffer.concat([proofElement, current]));
    } else {
      // Proof element on right
      current = hashFunc(Buffer.concat([current, proofElement]));
    }
    }

    // Compare computed root with expected root
    const computedRoot = `0x${current.toString('hex')}`;
    const expectedRoot = root.toLowerCase();
    return computedRoot.toLowerCase() === expectedRoot;
  } catch (error) {
    console.error('Merkle proof verification failed:', error);
    return false;
  }
}

/**
 * Create on-chain anchor for merkle root (mock implementation)
 */
export async function anchorMerkleRoot(
  merkleRoot: string,
  leafCount: number
): Promise<OnChainAnchor> {
  if (!FLAGS.CHAIN_ATTESTATION) {
    throw new Error('Chain attestation not enabled');
  }

  // Mock blockchain submission
  // In production: Submit to Polkadot/KILT chain via @polkadot/api
  const anchor: OnChainAnchor = {
    merkleRoot,
    blockNumber: Math.floor(Math.random() * 1000000) + 5000000,
    txHash: `0x${Buffer.from(merkleRoot).toString('hex').substring(0, 64)}`,
    timestamp: Date.now(),
    leafCount,
  };

  // Simulate blockchain delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return anchor;
}

/**
 * Batch review hashes and anchor to chain
 */
export async function batchAndAnchorReviews(
  reviews: ReviewHashData[],
  batchSize: number = 10
): Promise<OnChainAnchor[]> {
  if (reviews.length === 0) {
    return [];
  }

  const anchors: OnChainAnchor[] = [];

  // Split into batches
  for (let i = 0; i < reviews.length; i += batchSize) {
    const batch = reviews.slice(i, i + batchSize);
    const hashes = batch.map((r) => r.hash);

    // Create merkle tree
    const tree = createReviewMerkleTree(hashes);
    const root = getMerkleRoot(tree);

    // Anchor root to chain
    const anchor = await anchorMerkleRoot(root, batch.length);
    anchors.push(anchor);
  }

  return anchors;
}

/**
 * Get on-chain anchor info (mock retrieval)
 */
export async function getOnChainAnchor(
  merkleRoot: string
): Promise<OnChainAnchor | null> {
  // In production: Query blockchain for anchor data
  // For hackathon: Return mock data
  if (!FLAGS.CHAIN_ATTESTATION) {
    return null;
  }

  // Simulate blockchain query delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Mock response
  return {
    merkleRoot,
    blockNumber: 5123456,
    txHash: `0x${Buffer.from(merkleRoot).toString('hex').substring(0, 64)}`,
    timestamp: Date.now() - 3600000, // 1 hour ago
    leafCount: 10,
  };
}

/**
 * Format block explorer URL
 */
export function getBlockExplorerUrl(
  txHash: string,
  network: 'polkadot' | 'spiritnet' | 'peregrine' = 'spiritnet'
): string {
  const explorers = {
    polkadot: 'https://polkadot.subscan.io',
    spiritnet: 'https://spiritnet.subscan.io', // KILT mainnet
    peregrine: 'https://peregrine.subscan.io', // KILT testnet
  };

  return `${explorers[network]}/extrinsic/${txHash}`;
}
