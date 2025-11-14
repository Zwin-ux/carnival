interface VerifyResponse {
  verified: boolean;
  error?: string;
  review?: {
    booth: { title: string };
    from: { displayName: string; walletAddress: string };
    to: { displayName: string; walletAddress: string };
    rating: number;
    comment?: string | null;
  };
  verification?: {
    hashMatches: boolean;
    signatureValid: boolean;
  };
}

interface VerifyPageProps {
  params: Promise<{ hash: string }>;
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { hash } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  let data: VerifyResponse | null = null;

  try {
    const response = await fetch(`${apiUrl}/v1/verify/${hash}`, {
      cache: "no-store",
    });

    if (response.ok) {
      data = (await response.json()) as VerifyResponse;
    }
  } catch (error) {
    console.error("Verification fetch error:", error);
  }

  const review = data?.review;
  const verification = data?.verification;

  if (!data || !data.verified || !review || !verification) {
    return (
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border-2 border-rust-500 bg-ink-800 p-8 text-center">
            <div className="mb-4 text-6xl">✗</div>
            <h1 className="mb-4 text-3xl font-bold text-rust-400">Verification Failed</h1>
            <p className="text-candy-200/60">{data?.error || "Could not verify this review hash"}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border-2 border-mint-400 bg-ink-800 p-8">
          <div className="mb-8 text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h1 className="mb-2 text-3xl font-bold text-mint-300">Review Verified</h1>
            <p className="text-candy-200/60">This review has been cryptographically verified</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-bold text-brass-400">Booth</h3>
              <p className="text-candy-200">{review.booth.title}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ReviewerBlock label="From" {...review.from} />
              <ReviewerBlock label="To" {...review.to} />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-bold text-brass-400">Rating</h3>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className={index < review.rating ? "text-brass-400" : "text-ink-700"}>
                    ★
                  </span>
                ))}
              </div>
            </div>

            {review.comment && (
              <div>
                <h3 className="mb-2 text-sm font-bold text-brass-400">Comment</h3>
                <p className="text-candy-200/80">{review.comment}</p>
              </div>
            )}

            <div className="border-t border-brass-600/30 pt-6">
              <h3 className="mb-2 text-sm font-bold text-brass-400">Verification Details</h3>
              <div className="space-y-2 text-sm">
                <VerificationRow label="Hash Match" passed={verification.hashMatches} />
                <VerificationRow label="Signature Valid" passed={verification.signatureValid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ReviewerBlock({ label, displayName, walletAddress }: { label: string; displayName: string; walletAddress: string }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold text-brass-400">{label}</h3>
      <p className="text-candy-200">{displayName}</p>
      <p className="truncate font-mono text-xs text-candy-200/40">{walletAddress}</p>
    </div>
  );
}

function VerificationRow({ label, passed }: { label: string; passed: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-candy-200/60">{label}:</span>
      <span className={passed ? "text-mint-300" : "text-rust-400"}>{passed ? "✓ Pass" : "✗ Fail"}</span>
    </div>
  );
}
