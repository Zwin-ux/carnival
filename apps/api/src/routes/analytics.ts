import { Router } from "express";
import { z } from "zod";
import * as DB from "@echoid/db";

// Define wheel analytics schema inline instead of importing from @echoid/core to avoid
// runtime ESM export resolution issues with tsx. Keep this schema in sync with
// `packages/core/src/schemas.ts`.
const WheelAnalyticsEventSchema = z.object({
  filter: z.string().min(1),
  event: z.enum(["spin", "visit"]),
});

const { prisma } = DB;

const WheelFilterSchema = z.object({
  filter: z.string().min(1),
});

export const analyticsRouter = Router();

analyticsRouter.post("/wheel", async (req, res, next) => {
  try {
    const { filter, event } = WheelAnalyticsEventSchema.parse(req.body);

    const metric = await prisma.wheelMetric.upsert({
      where: { filter },
      update: {
        spins: {
          increment: event === "spin" ? 1 : 0,
        },
        visits: {
          increment: event === "visit" ? 1 : 0,
        },
      },
      create: {
        filter,
        spins: event === "spin" ? 1 : 0,
        visits: event === "visit" ? 1 : 0,
      },
    });

    const allMetrics = await prisma.wheelMetric.findMany();
    res.json(formatMetricsResponse(allMetrics));
  } catch (error) {
    next(error);
  }
});

analyticsRouter.get("/wheel", async (_req, res, next) => {
  try {
    const metrics = await prisma.wheelMetric.findMany();
    res.json(formatMetricsResponse(metrics));
  } catch (error) {
    next(error);
  }
});

analyticsRouter.get("/wheel/:filter", async (req, res, next) => {
  try {
    const { filter } = WheelFilterSchema.parse(req.params);
    const metric = await prisma.wheelMetric.findUnique({ where: { filter } });
    if (!metric) {
      res.status(404).json({ error: "Filter not found" });
      return;
    }
    res.json({
      filter: metric.filter,
      spins: metric.spins,
      visits: metric.visits,
    });
  } catch (error) {
    next(error);
  }
});

function formatMetricsResponse(metrics: Array<{ filter: string; spins: number; visits: number }>) {
  const totals = metrics.reduce(
    (acc, metric) => {
      acc.totalSpins += metric.spins;
      acc.totalVisits += metric.visits;
      acc.perFilter[metric.filter] = {
        spins: metric.spins,
        visits: metric.visits,
      };
      return acc;
    },
    { totalSpins: 0, totalVisits: 0, perFilter: {} as Record<string, { spins: number; visits: number }> }
  );

  return totals;
}

