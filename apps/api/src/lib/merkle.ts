import { createHash } from "crypto";
import { MerkleTree } from "merkletreejs";
import { FLAGS } from "./flags";

const SORT_PAIRS = true;

export interface MerkleProof {
  leaf: string;
  proof: string[];
  root: string;
  position: number[];
}

export interface OnChainAnchor {
  merkleRoot: string;
  blockNumber?: number;
  txHash?: string;
  timestamp: number;
  leafCount: number;
}

type MerkleProofStep = {
  position: "left" | "right";
  data: Buffer;
};

export function createReviewMerkleTree(reviewHashes: string[]): MerkleTree {
  if (reviewHashes.length === 0) {
    throw new Error("Cannot create merkle tree from empty array");
  }

  const leaves = reviewHashes.map((hash) => {
    const cleanHash = hash.startsWith("0x") ? hash.slice(2) : hash;
    return Buffer.from(cleanHash, "hex");
  });

  return new MerkleTree(leaves, hashFunc, {
    sortPairs: SORT_PAIRS,
    hashLeaves: false,
  });
}

function hashFunc(data: Buffer<ArrayBufferLike>): Buffer {
  return createHash("sha256").update(data).digest();
}

export function getMerkleRoot(tree: MerkleTree): string {
  const root = tree.getRoot();
  return `0x${root.toString("hex")}`;
}

export function generateMerkleProof(tree: MerkleTree, reviewHash: string, allHashes: string[]): MerkleProof {
  const position = allHashes.findIndex((hash) => hash === reviewHash);
  if (position === -1) {
    throw new Error("Review hash not found in tree");
  }

  const cleanHash = reviewHash.startsWith("0x") ? reviewHash.slice(2) : reviewHash;
  const leaf = Buffer.from(cleanHash, "hex");
  const proof = tree.getProof(leaf) as MerkleProofStep[];

  return {
    leaf: reviewHash,
    proof: proof.map((step) => `0x${step.data.toString("hex")}`),
    root: getMerkleRoot(tree),
    position: proof.map((step) => (step.position === "left" ? 0 : 1)),
  };
}

export function verifyMerkleProof(leaf: string, proof: string[], root: string, positions: number[]): boolean {
  try {
    const cleanLeaf = leaf.startsWith("0x") ? leaf.slice(2) : leaf;
    let current: Buffer<ArrayBufferLike> = Buffer.from(cleanLeaf, "hex");

    for (let i = 0; i < proof.length; i += 1) {
      const cleanProof = proof[i].startsWith("0x") ? proof[i].slice(2) : proof[i];
      const proofElement: Buffer<ArrayBufferLike> = Buffer.from(cleanProof, "hex");

      if (SORT_PAIRS) {
        const ordered = [current, proofElement].sort((a, b) => Buffer.compare(a, b)) as [Buffer, Buffer];
        const combined = Buffer.concat([ordered[0], ordered[1]]);
        current = hashFunc(Buffer.from(combined));
        continue;
      }

      if (positions[i] === 0) {
        const concatLeft = Buffer.concat([proofElement, current]);
        current = hashFunc(Buffer.from(concatLeft));
      } else {
        const concatRight = Buffer.concat([current, proofElement]);
        current = hashFunc(Buffer.from(concatRight));
      }
    }

    const computedRoot = `0x${current.toString("hex")}`.toLowerCase();
    return computedRoot === root.toLowerCase();
  } catch (error) {
    console.error("Merkle proof verification failed", error);
    return false;
  }
}

export async function anchorMerkleRoot(merkleRoot: string, leafCount: number): Promise<OnChainAnchor> {
  if (!FLAGS.CHAIN_ATTESTATION) {
    throw new Error("Chain attestation not enabled");
  }

  const anchor: OnChainAnchor = {
    merkleRoot,
    blockNumber: Math.floor(Math.random() * 1_000_000) + 5_000_000,
    txHash: `0x${Buffer.from(merkleRoot).toString("hex").substring(0, 64)}`,
    timestamp: Date.now(),
    leafCount,
  };

  await new Promise((resolve) => setTimeout(resolve, 500));

  return anchor;
}

export function getBlockExplorerUrl(txHash: string, network: "polkadot" | "spiritnet" | "peregrine" = "spiritnet"): string {
  const explorers = {
    polkadot: "https://polkadot.subscan.io",
    spiritnet: "https://spiritnet.subscan.io",
    peregrine: "https://peregrine.subscan.io",
  } as const;

  return `${explorers[network]}/extrinsic/${txHash}`;
}
