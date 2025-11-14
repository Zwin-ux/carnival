/**
 * Reputation and trust score algorithms
 * Uses Exponentially Weighted Moving Average (EWMA)
 */

/**
 * Calculate new trust score using EWMA
 * Formula: newScore = alpha * rating + (1 - alpha) * oldScore
 *
 * @param currentScore - Current trust score (0-100)
 * @param newRating - New rating (1-5)
 * @param alpha - Smoothing factor (0-1), default 0.3
 * @returns Updated trust score clamped to 0-100
 */
export function calculateTrustScore(
  currentScore: number,
  newRating: number,
  alpha: number = 0.3
): number {
  // Normalize rating from 1-5 scale to 0-100 scale
  const normalizedRating = ((newRating - 1) / 4) * 100;

  // Apply EWMA
  const newScore = alpha * normalizedRating + (1 - alpha) * currentScore;

  // Clamp to valid range
  return Math.max(0, Math.min(100, newScore));
}

/**
 * Calculate trust score from array of ratings
 * Useful for batch calculation or initial score
 */
export function calculateInitialTrustScore(ratings: number[]): number {
  if (ratings.length === 0) return 0;

  let score = 0;
  for (const rating of ratings) {
    score = calculateTrustScore(score, rating);
  }

  return score;
}

/**
 * Get trust badge level based on score
 */
export function getTrustBadge(score: number): {
  level: string;
  color: string;
  emoji: string;
} {
  if (score >= 90) return { level: "Legendary", color: "rust", emoji: "🏆" };
  if (score >= 75) return { level: "Trusted", color: "brass", emoji: "⭐" };
  if (score >= 50) return { level: "Reliable", color: "mint", emoji: "✓" };
  if (score >= 25) return { level: "Building", color: "cyan", emoji: "🔨" };
  return { level: "New", color: "candy", emoji: "🎪" };
}
