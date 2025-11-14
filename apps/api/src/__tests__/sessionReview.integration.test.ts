import request from "supertest";
import jwt from "jsonwebtoken";
import cuid from "cuid";
import app from "../index";

type SessionStatus = "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELED";

type UserRecord = {
  id: string;
  walletAddress: string;
  displayName: string;
};

type BoothRecord = {
  id: string;
  ownerId: string;
  title: string;
  slug: string;
  description: string;
  pricePerMin: number;
  active: boolean;
  tags: string[];
  trustScore: number;
  createdAt: Date;
  updatedAt: Date;
};

type SessionRecord = {
  id: string;
  boothId: string;
  clientId: string;
  expertId: string;
  status: SessionStatus;
  startedAt: Date | null;
  endedAt: Date | null;
  durationSec: number;
  createdAt: Date;
  updatedAt: Date;
};

type ReviewRecord = {
  id: string;
  sessionId: string;
  fromUserId: string;
  toUserId: string;
  rating: number;
  comment?: string | null;
  payload: string;
  payloadHash: string;
  signature: string;
  verified: boolean;
  createdAt: Date;
};

type MerkleAnchorRecord = {
  id: string;
  createdAt: Date;
  merkleRoot: string;
  blockNumber?: number | null;
  txHash?: string | null;
  leafCount: number;
  reviewHashes: string[];
};

type SelectArg<T> = {
  select?: Partial<Record<keyof T, boolean>>;
};

type SessionIncludeArg = {
  booth?: boolean | SelectArg<BoothRecord>;
  client?: boolean | SelectArg<UserRecord>;
  expert?: boolean | SelectArg<UserRecord>;
};

type ReviewIncludeArg = {
  fromUser?: boolean | SelectArg<UserRecord>;
  toUser?: boolean | SelectArg<UserRecord>;
  session?:
    | boolean
    | (SelectArg<SessionRecord> & { include?: SessionIncludeArg });
};

type InMemoryState = {
  users: Map<string, UserRecord>;
  booths: Map<string, BoothRecord>;
  sessions: Map<string, SessionRecord>;
  reviews: Map<string, ReviewRecord>;
  merkleAnchors: MerkleAnchorRecord[];
  reviewSeq: number;
  sessionSeq: number;
  merkleSeq: number;
  defaults: {
    client: UserRecord;
    expert: UserRecord;
    booth: BoothRecord;
  };
};

function createInMemoryDb() {
  const state: InMemoryState = {
    users: new Map(),
    booths: new Map(),
    sessions: new Map(),
    reviews: new Map(),
    merkleAnchors: [],
    reviewSeq: 1,
    sessionSeq: 1,
    merkleSeq: 1,
    defaults: null as unknown as InMemoryState["defaults"],
  };

  const clone = <T extends Record<string, any>>(value: T): T => ({ ...value });

  const resolveSelection = <T extends Record<string, any>>(
    entity: T | undefined,
    descriptor?: boolean | SelectArg<T>
  ) => {
    if (!entity || descriptor === undefined) {
      return undefined;
    }

    if (descriptor === true) {
      return clone(entity);
    }

    if (descriptor && descriptor.select) {
      const selected: Partial<T> = {};
      for (const [key, enabled] of Object.entries(descriptor.select)) {
        if (enabled && key in entity) {
          (selected as any)[key] = (entity as any)[key];
        }
      }
      return selected;
    }

    return clone(entity);
  };

  const withSessionInclude = (session: SessionRecord, include?: SessionIncludeArg) => {
    const base: any = clone(session);
    if (!include) {
      return base;
    }

    if (include.booth) {
      const booth = state.booths.get(session.boothId);
      base.booth = resolveSelection(booth, include.booth);
    }

    if (include.client) {
      const client = state.users.get(session.clientId);
      base.client = resolveSelection(client, include.client);
    }

    if (include.expert) {
      const expert = state.users.get(session.expertId);
      base.expert = resolveSelection(expert, include.expert);
    }

    return base;
  };

  const withReviewInclude = (review: ReviewRecord, include?: ReviewIncludeArg) => {
    const base: any = clone(review);
    if (!include) {
      return base;
    }

    if (include.fromUser) {
      const from = state.users.get(review.fromUserId);
      base.fromUser = resolveSelection(from, include.fromUser);
    }

    if (include.toUser) {
      const to = state.users.get(review.toUserId);
      base.toUser = resolveSelection(to, include.toUser);
    }

    if (include.session) {
      const session = state.sessions.get(review.sessionId);
      if (session) {
        if (include.session === true) {
          base.session = clone(session);
        } else if (include.session.include) {
          base.session = withSessionInclude(session, include.session.include);
        } else {
          base.session = resolveSelection(session, include.session);
        }
      }
    }

    return base;
  };

  const findReviewByWhere = (where: { id?: string; sessionId?: string; payloadHash?: string }) => {
    if (where.id) {
      return state.reviews.get(where.id) ?? null;
    }

    if (where.sessionId) {
      return Array.from(state.reviews.values()).find((r) => r.sessionId === where.sessionId) ?? null;
    }

    if (where.payloadHash) {
      return Array.from(state.reviews.values()).find((r) => r.payloadHash === where.payloadHash) ?? null;
    }

    return null;
  };

  const seedDefaults = () => {
    const client: UserRecord = {
      id: cuid(),
      walletAddress: "5ClientWallet",
      displayName: "Hackathon Client",
    };

    const expert: UserRecord = {
      id: cuid(),
      walletAddress: "5ExpertWallet",
      displayName: "Carnival Expert",
    };

    state.users.set(client.id, client);
    state.users.set(expert.id, expert);

    const booth: BoothRecord = {
      id: cuid(),
      ownerId: expert.id,
      title: "Zero-Knowledge Consults",
      slug: "zk-consults",
      description: "Deep dive on verifiable credentials",
      pricePerMin: 25,
      active: true,
      tags: ["web3", "polkadot"],
      trustScore: 82,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    state.booths.set(booth.id, booth);
    state.defaults = { client, expert, booth };
  };

  const seedAnchorableReviews = () => {
    const now = Date.now();
    for (let i = 0; i < 4; i += 1) {
      const sessionId = cuid();
      const session: SessionRecord = {
        id: sessionId,
        boothId: state.defaults.booth.id,
        clientId: state.defaults.client.id,
        expertId: state.defaults.expert.id,
        status: "COMPLETED",
        startedAt: new Date(now - 900000),
        endedAt: new Date(now - 840000),
        durationSec: 300,
        createdAt: new Date(now - 900000),
        updatedAt: new Date(now - 840000),
      };
      state.sessions.set(sessionId, session);

      const payloadObject = {
        sessionId,
        walletAddress: state.defaults.client.walletAddress,
        rating: 5,
        comment: `Seed review ${i}`,
        timestamp: now - i * 1000,
      };

      const payload = JSON.stringify(payloadObject);
      const payloadHash = `0x${((i + 1) * 123456).toString(16).padStart(64, "0")}`;

      const review: ReviewRecord = {
        id: `seed_review_${i}`,
        sessionId,
        fromUserId: state.defaults.client.id,
        toUserId: state.defaults.expert.id,
        rating: 5,
        comment: payloadObject.comment,
        payload,
        payloadHash,
        signature: "0xseed",
        verified: true,
        createdAt: new Date(now - 830000),
      };

      state.reviews.set(review.id, review);
    }
  };

  const reset = () => {
    state.users.clear();
    state.booths.clear();
    state.sessions.clear();
    state.reviews.clear();
    state.merkleAnchors = [];
    state.reviewSeq = 1;
    state.sessionSeq = 1;
    state.merkleSeq = 1;
    seedDefaults();
    seedAnchorableReviews();
  };

  const prisma = {
    booth: {
      findUnique: async ({ where }: any) => {
        if (where?.id) {
          return state.booths.get(where.id) ?? null;
        }
        if (where?.slug) {
          return Array.from(state.booths.values()).find((booth) => booth.slug === where.slug) ?? null;
        }
        return null;
      },
      update: async ({ where, data }: any) => {
        const booth = state.booths.get(where.id);
        if (!booth) {
          throw new Error("Booth not found");
        }
        const updated = { ...booth, ...data, updatedAt: new Date() };
        state.booths.set(where.id, updated);
        return updated;
      },
    },
    session: {
      create: async ({ data, include }: any) => {
        const id = data.id ?? cuid();
        const record: SessionRecord = {
          id,
          boothId: data.boothId,
          clientId: data.clientId,
          expertId: data.expertId,
          status: data.status ?? "PENDING",
          startedAt: data.startedAt ?? null,
          endedAt: data.endedAt ?? null,
          durationSec: data.durationSec ?? 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        state.sessions.set(id, record);
        return include ? withSessionInclude(record, include) : record;
      },
      update: async ({ where, data, include }: any) => {
        const session = state.sessions.get(where.id);
        if (!session) {
          throw new Error("Session not found");
        }
        const updated: SessionRecord = {
          ...session,
          ...data,
          updatedAt: new Date(),
        };
        state.sessions.set(where.id, updated);
        return include ? withSessionInclude(updated, include) : updated;
      },
      findUnique: async ({ where, include }: any) => {
        const session = state.sessions.get(where.id ?? where.sessionId);
        if (!session) {
          return null;
        }
        return include ? withSessionInclude(session, include) : session;
      },
    },
    review: {
      findUnique: async ({ where, include }: any) => {
        const review = findReviewByWhere(where);
        if (!review) {
          return null;
        }
        return include ? withReviewInclude(review, include) : review;
      },
      create: async ({ data }: any) => {
        const id = data.id ?? `review_${state.reviewSeq++}`;
        const record: ReviewRecord = {
          id,
          sessionId: data.sessionId,
          fromUserId: data.fromUserId,
          toUserId: data.toUserId,
          rating: data.rating,
          comment: data.comment,
          payload: data.payload,
          payloadHash: data.payloadHash,
          signature: data.signature,
          verified: data.verified ?? false,
          createdAt: new Date(),
        };
        state.reviews.set(id, record);
        return record;
      },
      findMany: async ({ where, select, take }: any) => {
        let reviews = Array.from(state.reviews.values());
        if (where?.createdAt?.gte) {
          reviews = reviews.filter((review) => review.createdAt >= where.createdAt.gte);
        }
        if (take) {
          reviews = reviews.slice(0, take);
        }
        if (select) {
          return reviews.map((review) => {
            const picked: Record<string, any> = {};
            for (const [key, enabled] of Object.entries(select)) {
              if (enabled) {
                picked[key] = (review as any)[key];
              }
            }
            return picked;
          });
        }
        return reviews;
      },
    },
    attestation: {
      create: async ({ data }: any) => ({ ...data, id: `att_${state.reviewSeq++}` }),
    },
    merkleAnchor: {
      create: async ({ data }: any) => {
        const record: MerkleAnchorRecord = {
          id: `anchor_${state.merkleSeq++}`,
          createdAt: new Date(),
          merkleRoot: data.merkleRoot,
          blockNumber: data.blockNumber,
          txHash: data.txHash,
          leafCount: data.leafCount,
          reviewHashes: data.reviewHashes,
        };
        state.merkleAnchors.push(record);
        return record;
      },
      findFirst: async ({ where }: any) => {
        if (!where?.reviewHashes?.has) {
          return null;
        }
        return (
          state.merkleAnchors.find((anchor) => anchor.reviewHashes.includes(where.reviewHashes.has)) ?? null
        );
      },
    },
  };

  reset();

  return {
    prisma,
    __testing: {
      reset,
      getDefaults: () => state.defaults,
    },
  };
}

jest.mock("@echoid/db", () => createInMemoryDb());

jest.mock("@echoid/core", () => {
  const actual = jest.requireActual("@echoid/core");
  return {
    ...actual,
    verifySignature: jest.fn(async () => true),
  };
});

type DbMock = ReturnType<typeof createInMemoryDb>;
const dbMock = jest.requireMock("@echoid/db") as DbMock;

const defaults = () => dbMock.__testing.getDefaults();

const buildAuthHeader = () => {
  const secret = process.env.AUTH_JWT_SECRET || "test-secret";
  const client = defaults().client;
  const token = jwt.sign(
    {
      walletAddress: client.walletAddress,
    },
    secret,
    {
      subject: client.id,
      expiresIn: "1h",
    }
  );
  return `Bearer ${token}`;
};

describe("session completion + review verification", () => {
  beforeEach(() => {
    dbMock.__testing.reset();
  });

  it("anchors a review and returns merkle proof", async () => {
    const boothId = defaults().booth.id;
    const authHeader = buildAuthHeader();

    const startRes = await request(app)
      .post("/v1/sessions/start")
      .set("Authorization", authHeader)
      .send({ boothId, durationSec: 300 });

    expect(startRes.status).toBe(201);
    const sessionId = startRes.body.session.id as string;

    const activateRes = await request(app)
      .post("/v1/sessions/activate")
      .set("Authorization", authHeader)
      .send({ sessionId });

    expect(activateRes.status).toBe(200);

    const endRes = await request(app)
      .post("/v1/sessions/end")
      .set("Authorization", authHeader)
      .send({ sessionId });

    expect(endRes.status).toBe(200);

    const timestamp = Date.now();
    const client = defaults().client;

    const signature = "0xdeadbeef";

    const reviewRes = await request(app)
      .post("/v1/reviews")
      .set("Authorization", authHeader)
      .send({
        sessionId,
        rating: 5,
        comment: "Legendary Polkadot wisdom",
        timestamp,
        signature,
      });

    expect(reviewRes.status).toBe(201);
    expect(reviewRes.body.anchor).toBeTruthy();
    const payloadHash = reviewRes.body.review.payloadHash as string;

    const verifyRes = await request(app).get(`/v1/verify/${payloadHash}`);

    expect(verifyRes.status).toBe(200);
    expect(verifyRes.body.verified).toBe(true);
    expect(verifyRes.body.verification.hashMatches).toBe(true);
    expect(verifyRes.body.verification.signatureValid).toBe(true);
    expect(verifyRes.body.merkle.anchored).toBe(true);
    expect(verifyRes.body.merkle.proof.verified).toBe(true);
    expect(verifyRes.body.merkle.merkleRoot).toMatch(/^0x/);
  });
});
