import express from "express";
import cors from "cors";
import { boothRouter } from "./routes/booths";
import { sessionRouter } from "./routes/sessions";
import { reviewRouter } from "./routes/reviews";
import { verifyRouter } from "./routes/verify";
import { authRouter } from "./routes/auth";
import { attestationRouter } from "./routes/attestations";
import { analyticsRouter } from "./routes/analytics";
import { attachAuth } from "./middleware/auth";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(attachAuth);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

// API routes
app.use("/v1/auth", authRouter);
app.use("/v1/booths", boothRouter);
app.use("/v1/sessions", sessionRouter);
app.use("/v1/reviews", reviewRouter);
app.use("/v1/verify", verifyRouter);
app.use("/v1/attestations", attestationRouter);
app.use("/v1/analytics", analyticsRouter);

// Error handling
app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`🎪 EchoID Carnival API running on http://localhost:${PORT}`);
  });
}

export default app;
