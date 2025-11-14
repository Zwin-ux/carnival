import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data
  await prisma.review.deleteMany();
  await prisma.session.deleteMany();
  await prisma.booth.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      walletAddress: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
      displayName: "Carnival Admin",
      bio: "Managing the EchoID Carnival experience",
      role: Role.ADMIN,
    },
  });

  // Create expert users
  const alice = await prisma.user.create({
    data: {
      walletAddress: "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
      displayName: "Alice Chen",
      bio: "Web3 architect with 8+ years building decentralized systems. Specialized in Substrate, Polkadot, and smart contract security.",
      role: Role.EXPERT,
    },
  });

  const bob = await prisma.user.create({
    data: {
      walletAddress: "5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y",
      displayName: "Bob Kumar",
      bio: "Smart contract auditor and DeFi protocol designer. Former security lead at major L1 blockchain.",
      role: Role.EXPERT,
    },
  });

  // Create visitor for testing
  const visitor = await prisma.user.create({
    data: {
      walletAddress: "5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",
      displayName: "Demo Visitor",
      bio: "Test user for carnival sessions",
      role: Role.VISITOR,
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
      pricePerMin: 10,
      tags: ["web3", "substrate", "polkadot", "architecture"],
      trustScore: 92.5,
      active: true,
    },
  });

  const booth2 = await prisma.booth.create({
    data: {
      ownerId: bob.id,
      title: "Smart Contract Security Audit",
      slug: "security-audit-bob",
      description:
        "Live smart contract review and security consultation. I'll help identify vulnerabilities, suggest best practices, and review your code in real-time.",
      pricePerMin: 15,
      tags: ["security", "audit", "smart-contracts", "solidity"],
      trustScore: 87.3,
      active: true,
    },
  });

  const booth3 = await prisma.booth.create({
    data: {
      ownerId: alice.id,
      title: "Career Coaching: Breaking into Web3",
      slug: "career-coaching-alice",
      description:
        "Navigate your transition into Web3 development. Resume review, interview prep, portfolio building, and career strategy for blockchain engineers.",
      pricePerMin: 8,
      tags: ["career", "coaching", "web3", "mentorship"],
      trustScore: 95.1,
      active: true,
    },
  });

  // Create a sample completed session with review
  const completedSession = await prisma.session.create({
    data: {
      boothId: booth1.id,
      clientId: visitor.id,
      expertId: alice.id,
      status: "COMPLETED",
      startedAt: new Date(Date.now() - 600000), // 10 minutes ago
      endedAt: new Date(Date.now() - 300000), // 5 minutes ago
      durationSec: 300,
    },
  });

  // Create a sample review
  const reviewPayload = {
    sessionId: completedSession.id,
    fromUserId: visitor.id,
    toUserId: alice.id,
    rating: 5,
    comment: "Excellent session! Alice helped me understand Substrate runtime design clearly.",
    timestamp: Date.now(),
  };

  await prisma.review.create({
    data: {
      sessionId: completedSession.id,
      fromUserId: visitor.id,
      toUserId: alice.id,
      rating: 5,
      comment: reviewPayload.comment,
      payload: JSON.stringify(reviewPayload),
      payloadHash: "0xdemo" + Math.random().toString(36).substring(2, 15), // Mock hash
      signature: "mockSignature123", // Mock signature
      verified: true,
    },
  });

  console.log("✅ Seed data created:");
  console.log(`   - Admin: ${admin.displayName} (${admin.walletAddress})`);
  console.log(`   - Expert: ${alice.displayName} (${alice.walletAddress})`);
  console.log(`   - Expert: ${bob.displayName} (${bob.walletAddress})`);
  console.log(`   - Visitor: ${visitor.displayName} (${visitor.walletAddress})`);
  console.log(`   - Booths: ${booth1.title}, ${booth2.title}, ${booth3.title}`);
  console.log(`   - Sample session and review created`);
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
