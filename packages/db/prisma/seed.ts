import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data
  await prisma.review.deleteMany();
  await prisma.session.deleteMany();
  await prisma.booth.deleteMany();
  await prisma.user.deleteMany();
  await prisma.wheelMetric.deleteMany();

  // Create expert users
  const alice = await prisma.user.create({
    data: {
      walletAddress: "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      handle: "alice-chen",
      displayName: "Alice Chen",
      bio: "Web3 architect with 8+ years building decentralized systems. Specialized in Substrate, Polkadot, and smart contract security.",
      trustScore: 95,
      xp: 5000,
      level: 12,
      coins: 500,
    },
  });

  const bob = await prisma.user.create({
    data: {
      walletAddress: "5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y",
      handle: "bob-kumar",
      displayName: "Bob Kumar",
      bio: "Smart contract auditor and DeFi protocol designer. Former security lead at major L1 blockchain.",
      trustScore: 88,
      xp: 4200,
      level: 10,
      coins: 300,
    },
  });

  // Create visitor for testing
  const visitor = await prisma.user.create({
    data: {
      walletAddress: "5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",
      handle: "demo-visitor",
      displayName: "Demo Visitor",
      bio: "Test user for carnival sessions",
      trustScore: 50,
      xp: 100,
      level: 1,
    },
  });

  // Create booths  
  const booth1 = await prisma.booth.create({
    data: {
      ownerId: alice.id,
      title: "Web3 Architecture Consulting",
      slug: "web3-architecture-alice",
      description:
        "Get expert advice on building scalable Web3 applications. Topics: Substrate pallets, runtime design, parachain architecture, cross-chain messaging, and more.",
      pricePerMin: 1000,
      tags: ["web3", "substrate", "polkadot", "architecture"],
    },
  });

  const booth2 = await prisma.booth.create({
    data: {
      ownerId: bob.id,
      title: "Smart Contract Security Audit",
      slug: "security-audit-bob",
      description:
        "Live smart contract review and security consultation. I'll help identify vulnerabilities, suggest best practices, and review your code in real-time.",
      pricePerMin: 1500,
      tags: ["security", "audit", "smart-contracts", "solidity"],
    },
  });

  const booth3 = await prisma.booth.create({
    data: {
      ownerId: alice.id,
      title: "Career Coaching: Breaking into Web3",
      slug: "career-coaching-alice",
      description:
        "Navigate your transition into Web3 development. Resume review, interview prep, portfolio building, and career strategy for blockchain engineers.",
      pricePerMin: 800,
      tags: ["career", "coaching", "web3", "mentorship"],
    },
  });

  // Create wheel metrics for the Fortune Wheel
  await prisma.wheelMetric.create({
    data: {
      filter: "all",
      spins: 1250,
      visits: 3840,
    },
  });

  await prisma.wheelMetric.create({
    data: {
      filter: "substrate",
      spins: 380,
      visits: 1200,
    },
  });

  // Create a sample completed session with review
  const completedSession = await prisma.session.create({
    data: {
      boothId: booth1.id,
      clientId: visitor.id,
      expertId: alice.id,
      status: "COMPLETED",
      startedAt: new Date(Date.now() - 600000),
      endedAt: new Date(Date.now() - 300000),
      durationSec: 300,
    },
  });

  // Create a sample review
  await prisma.review.create({
    data: {
      sessionId: completedSession.id,
      fromUserId: visitor.id,
      toUserId: alice.id,
      rating: 5,
      comment: "Excellent session! Alice helped me understand Substrate runtime design clearly.",
      payload: JSON.stringify({
        sessionId: completedSession.id,
        address: visitor.walletAddress,
        rating: 5,
        comment: "Excellent session! Alice helped me understand Substrate runtime design clearly.",
        timestamp: Date.now(),
      }),
      payloadHash: "0xdemo" + Math.random().toString(36).substring(2, 15),
      signature: "mockSignature123",
    },
  });

  console.log("✅ Seed data created:");
  console.log(`   - Expert: ${alice.handle} (${alice.walletAddress})`);
  console.log(`   - Expert: ${bob.handle} (${bob.walletAddress})`);
  console.log(`   - Visitor: ${visitor.handle} (${visitor.walletAddress})`);
  console.log(`   - Booths: ${booth1.title}, ${booth2.title}, ${booth3.title}`);
  console.log(`   - Sample session and review created`);
  console.log(`   - Wheel metrics seeded`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
