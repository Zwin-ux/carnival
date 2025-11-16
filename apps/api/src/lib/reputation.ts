export function calculateTrustScore(currentScore: number, newRating: number, alpha: number = 0.3): number {
  const normalizedRating = ((newRating - 1) / 4) * 100;
  const nextScore = alpha * normalizedRating + (1 - alpha) * currentScore;
  return Math.max(0, Math.min(100, nextScore));
}
