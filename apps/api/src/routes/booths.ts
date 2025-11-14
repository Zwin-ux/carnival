import { Router } from "express";
import * as DB from "@echoid/db";
import * as CoreSchemas from "@echoid/core";
import { requireAuth } from "../middleware/auth";

const { prisma } = DB;

const { BoothCreateSchema, BoothUpdateSchema, BoothFilterSchema } = CoreSchemas;

export const boothRouter = Router();

// GET /v1/booths - List booths with optional filters
boothRouter.get("/", async (req, res, next) => {
  try {
    const filters = BoothFilterSchema.parse({
      tags: req.query.tags ? String(req.query.tags).split(",") : undefined,
      minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
      maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
      active: req.query.active ? req.query.active === "true" : undefined,
      ownerId: req.query.ownerId ? String(req.query.ownerId) : undefined,
    });

    const booths = await prisma.booth.findMany({
      where: {
        active: filters.active,
        ownerId: filters.ownerId,
        pricePerMin: {
          gte: filters.minPrice,
          lte: filters.maxPrice,
        },
        tags: filters.tags ? { hasSome: filters.tags } : undefined,
      },
      include: {
        owner: {
          select: {
            id: true,
            displayName: true,
            avatarUrl: true,
            walletAddress: true,
          },
        },
        _count: {
          select: {
            sessions: true,
          },
        },
      },
      orderBy: {
        trustScore: "desc",
      },
    });

    res.json({ booths });
  } catch (error) {
    next(error);
  }
});

// GET /v1/booths/:slug - Get single booth
boothRouter.get("/:slug", async (req, res, next) => {
  try {
    const booth = await prisma.booth.findUnique({
      where: { slug: req.params.slug },
      include: {
        owner: {
          select: {
            id: true,
            displayName: true,
            bio: true,
            avatarUrl: true,
            walletAddress: true,
          },
        },
        sessions: {
          where: { status: "COMPLETED" },
          take: 5,
          orderBy: { endedAt: "desc" },
        },
      },
    });

    if (!booth) {
      res.status(404).json({ error: "Booth not found" });
      return;
    }

    res.json({ booth });
  } catch (error) {
    next(error);
  }
});

// POST /v1/booths - Create booth
boothRouter.post("/", requireAuth, async (req, res, next) => {
  try {
    const data = BoothCreateSchema.parse(req.body);

    const booth = await prisma.booth.create({
      data: {
        ...data,
        ownerId: req.auth!.userId,
      },
      include: {
        owner: {
          select: {
            id: true,
            displayName: true,
            walletAddress: true,
          },
        },
      },
    });

    res.status(201).json({ booth });
  } catch (error) {
    next(error);
  }
});

// PATCH /v1/booths/:id - Update booth
boothRouter.patch("/:id", requireAuth, async (req, res, next) => {
  try {
    const data = BoothUpdateSchema.parse(req.body);

    const booth = await prisma.booth.update({
      where: {
        id: req.params.id,
        ownerId: req.auth!.userId,
      },
      data,
      include: {
        owner: {
          select: {
            id: true,
            displayName: true,
            walletAddress: true,
          },
        },
      },
    });

    res.json({ booth });
  } catch (error) {
    next(error);
  }
});
