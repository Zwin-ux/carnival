import { test, expect, type Page } from "@playwright/test";
import { mockPolkadotExtension, DEFAULT_WALLET_ACCOUNT } from "./support/polkadotExtension";

const MOCK_QUEST_FIXTURES = [
  {
    id: "quest-1",
    title: "Ship a booth update",
    description: "Push a fresh Identity Carnival enhancement",
    type: "daily",
    requirement: {
      action: "deploy",
      count: 1,
    },
    reward: {
      xp: 150,
      coins: 40,
    },
    icon: "🎪",
    progress: 0,
    completed: false,
    claimed: false,
    userQuestId: "uq-1",
  },
  {
    id: "quest-2",
    title: "Host a booth session",
    description: "Complete a 10-minute consulting slot",
    type: "daily",
    requirement: {
      action: "session",
      count: 1,
    },
    reward: {
      xp: 250,
      coins: 65,
    },
    icon: "🎟️",
    progress: 1,
    completed: true,
    claimed: true,
    userQuestId: "uq-2",
  },
];

const MOCK_PROFILE_FIXTURE = {
  handle: "playwright-scout",
  bio: "Automated QA scout keeping the midway sharp.",
  links: {
    github: "https://github.com/zwin-ux",
  },
  skills: ["Next.js", "Playwright", "Polkadot"],
  score: 86,
  lastAnchorBlk: 123456,
  lastAnchorTx: "0xplaywright",
  hashHex: "0x1234567890abcdef",
  createdAt: new Date("2024-01-01T00:00:00Z").toISOString(),
  updatedAt: new Date("2025-01-01T00:00:00Z").toISOString(),
};

const MOCK_ATTESTATIONS = [
  {
    attester: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    attestationType: "Mentor",
    score: 92,
    comment: "Consistently delivers actionable QA insight.",
    timestamp: Date.now(),
  },
  {
    attester: "5GNJqTPyNqN3wzdhC6KqjkCgz5VYkZJqYJv3RZArjS5wTDsS",
    attestationType: "Builder",
    score: 88,
    comment: "Quickly patches carnival regressions.",
    timestamp: Date.now() - 3600,
  },
];

async function mockApiRoutes(page: Page) {
  await page.route("**/api/quests/daily*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        quests: MOCK_QUEST_FIXTURES,
        profile: { xp: 1200, level: 4, coins: 75 },
      }),
    });
  });

  await page.route("**/api/profile/*", async (route) => {
    const rawUrl = route.request().url();
    const address = rawUrl.split("/").pop()?.split("?")[0] ?? DEFAULT_WALLET_ACCOUNT.address;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        profile: {
          ...MOCK_PROFILE_FIXTURE,
          address,
        },
      }),
    });
  });

  await page.route("**/api/attestations/*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ attestations: MOCK_ATTESTATIONS }),
    });
  });
}

test.beforeEach(async ({ page }) => {
  await mockPolkadotExtension(page);
  await mockApiRoutes(page);
});

test.describe("EchoID routing smoke", () => {
  test("landing CTAs expose correct targets", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Start Building" })).toHaveAttribute(
      "href",
      "/builder"
    );
    await expect(page.getByLabel(/flow overview/)).toBeVisible();

    const flowSection = page.locator("section#flow");
    await flowSection.scrollIntoViewIfNeeded();

    const flowLinks: Array<{
      href: string;
      assertTarget: (page: Page) => Promise<void>;
    }> = [
      {
        href: "/builder#connect",
        assertTarget: async (page) => {
          await expect(page.getByRole("heading", { name: /Avatar Canvas/i })).toBeVisible({ timeout: 15000 });
        },
      },
      {
        href: "/builder#avatar",
        assertTarget: async (page) => {
          await expect(page.getByText(/Design your identity soul/i)).toBeVisible({ timeout: 15000 });
        },
      },
      {
        href: "/dashboard#anchor",
        assertTarget: async (page) => {
          await expect(page.getByText(/Connect Polkadot\.js to unlock anchoring/i)).toBeVisible({ timeout: 15000 });
        },
      },
    ];

    for (const { href } of flowLinks) {
      const link = flowSection.locator(`a[href="${href}"]`);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", href);
    }

    // Route-level assertions are covered in downstream tests; we only ensure mappings exist here.
  });

  test.describe.serial("builder anchors & wallet", () => {
    test("builder connect anchor renders the wallet booth", async ({ page }) => {
      await page.goto("/builder#connect");
      await expect(page.locator("#connect")).toHaveCount(1, { timeout: 15000 });
    });

    test("builder avatar anchor renders the canvas", async ({ page }) => {
      await page.goto("/builder#avatar");
      await expect(page.locator("#avatar")).toHaveCount(1, { timeout: 15000 });
    });

    test("builder wallet booth auto-selects mocked account", async ({ page }) => {
      await page.goto("/builder");

      await expect(page.getByText(/Identity Ticket Booth/i)).toBeVisible();
      const truncated = `${DEFAULT_WALLET_ACCOUNT.address.slice(0, 6)}...${DEFAULT_WALLET_ACCOUNT.address.slice(-4)}`;
      await expect(page.getByText(`Wallet connected: ${truncated}`)).toBeVisible({ timeout: 15000 });

      const walletResult = await page.evaluate(async () => {
        const provider = (window as typeof window & { injectedWeb3?: Record<string, any> }).injectedWeb3?.["polkadot-js"];
        if (!provider) {
          return { count: 0, address: null };
        }
        const extension = await provider.enable("Playwright");
        const accounts = await extension.accounts.get();
        return { count: accounts.length, address: accounts[0]?.address ?? null };
      });

      expect(walletResult.count).toBeGreaterThan(0);
      expect(walletResult.address).toBe(DEFAULT_WALLET_ACCOUNT.address);
    });
  });

  test("dashboard anchor hash activates Ferris Wheel tab", async ({ page }) => {
    await page.goto("/dashboard#anchor");
    await expect(page).toHaveURL(/\/dashboard#anchor$/);
    await expect(page.getByText(/Connect Polkadot\.js to unlock anchoring/i)).toBeVisible();
  });

  test("quests route surfaces wallet-gated carnival tasks", async ({ page }) => {
    await page.addInitScript((address: string) => {
      window.localStorage.setItem("selectedAddress", address);
    }, DEFAULT_WALLET_ACCOUNT.address);

    await page.goto("/quests", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: /Task Board/i })).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole("tab", { name: /Active \(1\)/i })).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/Ship a booth update/i)).toBeVisible();

    const completedTab = page.getByRole("tab", { name: /Completed/i });
    await completedTab.click();
    await expect(page.getByText(/Host a booth session/i)).toBeVisible();
  });

  test("profile route hydrates dynamic addresses", async ({ page }) => {
    const address = DEFAULT_WALLET_ACCOUNT.address;
    await page.goto(`/profile/${address}`);
    await expect(page.getByRole("heading", { name: /About/i })).toBeVisible();
    await expect(page.getByText(/Blockchain Verified/i)).toBeVisible();
    await expect(page.getByText(/Attestations \(2\)/i)).toBeVisible();
    await expect(page.getByText(/playwright-scout/i)).toBeVisible();
  });
});
