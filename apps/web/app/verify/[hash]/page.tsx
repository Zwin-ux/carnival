import { ShieldCheck, TriangleAlert, Star } from "lucide-react";
import { HoloBadge } from "@echoid/ui";
import { GlassPanel } from "@/components/ui/GlassPanel";

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
        <div className="mx-auto max-w-3xl space-y-6">
          <GlassPanel tone="neon" padding="lg" className="text-center space-y-4">
            <TriangleAlert className="mx-auto h-12 w-12 text-neon-pink" />
            <div>
              <p className="text-xs font-data uppercase tracking-[0.4em] text-steel-200/80">Verification failed</p>
              <h1 className="font-heading text-3xl text-chrome-100">Unable to verify review</h1>
            </div>
            <p className="text-sm text-steel-200/80">{data?.error || "Could not verify this review hash."}</p>
          </GlassPanel>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-6">
        <GlassPanel tone="steel" padding="lg" className="text-center space-y-3">
          <ShieldCheck className="mx-auto h-12 w-12 text-neon-cyan" />
          <div>
            <p className="text-xs font-data uppercase tracking-[0.4em] text-steel-200/80">Review verified</p>
            <h1 className="font-heading text-3xl text-chrome-100">Cryptographic proof intact</h1>
          </div>
          <p className="text-sm text-steel-200/80">This review hash and signature matched the attested payload.</p>
        </GlassPanel>

        <GlassPanel tone="steel" padding="lg" className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-data uppercase tracking-[0.3em] text-steel-200/80">Booth</p>
              <p className="font-heading text-2xl text-chrome-100">{review.booth.title}</p>
            </div>
            <HoloBadge tone="plasma" label="Rating" meta={`${review.rating}/5`} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ReviewerBlock label="From" {...review.from} />
            <ReviewerBlock label="To" {...review.to} />
          </div>

          <div>
            <p className="text-xs font-data uppercase tracking-[0.3em] text-steel-200/80">Stars</p>
            <div className="mt-2 flex gap-1" aria-label={`Rating ${review.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${index < review.rating ? "text-brass-200" : "text-steel-600"}`}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>

          {review.comment && (
            <div>
              <p className="text-xs font-data uppercase tracking-[0.3em] text-steel-200/80">Comment</p>
              <p className="mt-2 text-sm text-steel-200/80">{review.comment}</p>
            </div>
          )}
        </GlassPanel>

        <GlassPanel tone="steel" padding="lg" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-data uppercase tracking-[0.3em] text-steel-200/80">Verification details</p>
            <HoloBadge tone="plasma" label="Hash" meta={hash.slice(0, 8)} />
          </div>
          <div className="space-y-3 text-sm text-steel-200/80">
            <VerificationRow label="Hash match" passed={verification.hashMatches} />
            <VerificationRow label="Signature valid" passed={verification.signatureValid} />
          </div>
        </GlassPanel>
      </div>
    </main>
  );
}

function ReviewerBlock({ label, displayName, walletAddress }: { label: string; displayName: string; walletAddress: string }) {
  return (
    <div className="rounded-2xl border border-steel-700/60 bg-chrome-950/50 p-4">
      <p className="text-xs font-data uppercase tracking-[0.3em] text-steel-200/80">{label}</p>
      <p className="mt-1 text-chrome-100">{displayName}</p>
      <p className="truncate font-mono text-xs text-steel-200/70">{walletAddress}</p>
    </div>
  );
}

function VerificationRow({ label, passed }: { label: string; passed: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-steel-700/50 bg-chrome-950/40 px-4 py-3">
      <span className="text-steel-200/80">{label}</span>
      <span className={passed ? "text-plasma-200" : "text-nova-200"}>{passed ? "Pass" : "Fail"}</span>
    </div>
  );
}
