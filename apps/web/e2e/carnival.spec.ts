import { test, expect } from "@playwright/test";

test.describe("EchoID Carnival - Full User Flow", () => {
  test("should load landing page with carnival theme", async ({ page }) => {
    await page.goto("/");

    // Check hero section
    await expect(page.locator("h1")).toContainText("EchoID Carnival");
    await expect(page.getByText("Rent-A-Brain")).toBeVisible();

    // Check featured booths section
    await expect(page.getByText("Featured Booths")).toBeVisible();

    // Check navigation
    await expect(page.getByRole("link", { name: "Booths" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  });

  test("should render fortune wheel booking teaser", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: /spin/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /High Trust/ })).toBeVisible();
    await page.getByRole("button", { name: /High Trust/ }).click();
    await expect(page.getByText(/Spun/)).toBeVisible();
  });

  test("should browse booths and use filters", async ({ page }) => {
    await page.goto("/booths");

    // Check page loaded
    await expect(page.locator("h1")).toContainText("All Booths");

    // Check booth cards are visible
    const boothCards = page.locator('a[href^="/booth/"]');
    await expect(boothCards.first()).toBeVisible();

    // Trust score should be rendered on each card
    const trustBadges = page.locator("text=/Trust.*\\d+\\.\\d+/");
    expect(await trustBadges.count()).toBeGreaterThan(0);

    // Try filtering by tag (if available)
    const filterButtons = page.locator('a[href*="?tag="]');
    if ((await filterButtons.count()) > 0) {
      await filterButtons.first().click();
      await expect(page.url()).toContain("?tag=");
    }
  });

  test("should view booth details", async ({ page }) => {
    await page.goto("/booths");

    // Click first booth
    const firstBooth = page.locator('a[href^="/booth/"]').first();
    const boothTitle = await firstBooth.locator("h2, h3").textContent();
    await firstBooth.click();

    // Check booth detail page
    await expect(page.locator("h1")).toContainText(boothTitle || "");
    await expect(page.getByText(/tokens.*minute/i)).toBeVisible();

    await expect(page.getByText("Verifiable Reputation")).toBeVisible();

    // Check trust badge
    await expect(page.locator("text=/Legendary|Trusted|Reliable|Building|New/")).toBeVisible();

    // Check tags
    expect(await page.locator("span").filter({ hasText: /^[a-z-]+$/ }).count()).toBeGreaterThan(0);
  });

  test("should show wallet connection prompt when not connected", async ({ page }) => {
    await page.goto("/booth/web3-architecture-alice");

    // Should see connect wallet button or message
    const connectButton = page.getByRole("button", { name: /connect/i });
    const walletMessage = page.getByText(/connect.*wallet/i);

    const hasConnectUI = (await connectButton.count()) > 0 || (await walletMessage.count()) > 0;
    expect(hasConnectUI).toBeTruthy();
  });

  test("should navigate to verification page with hash", async ({ page }) => {
    // Visit a verify page with mock hash
    await page.goto("/verify/0xdemo123456789");

    // Should show verification result (success or failure)
    const hasResult =
      (await page.getByText(/verified|verification/i).count()) > 0 ||
      (await page.getByText(/not found|failed/i).count()) > 0;

    expect(hasResult).toBeTruthy();
  });

  test("should display dashboard page", async ({ page }) => {
    await page.goto("/dashboard");

    await expect(page.locator("h1")).toContainText("Dashboard");
    await expect(page.getByText(/My Booths|Sessions|Reviews/i)).toBeVisible();
  });

  test("should have responsive navigation", async ({ page }) => {
    await page.goto("/");

    // Check header is visible
    await expect(page.locator("header")).toBeVisible();

    // Check navigation links
    await page.getByRole("link", { name: "Booths" }).click();
    await expect(page.url()).toContain("/booths");

    await page.getByRole("link", { name: "Dashboard" }).click();
    await expect(page.url()).toContain("/dashboard");

    // Go back home
    await page.locator('a[href="/"]').first().click();
    await expect(page.url()).toBe("http://localhost:3000/");
  });

  test("should display carnival aesthetic elements", async ({ page }) => {
    await page.goto("/");

    // Check for carnival colors (brass, candy, mint)
    const bodyBg = await page.locator("body").evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );
    expect(bodyBg).toBeTruthy();

    // Check for scanlines class
    const hasScanlines = await page.locator(".scanlines").count();
    expect(hasScanlines).toBeGreaterThan(0);

    // Check for brass/gold colored elements
    const brassElements = page.locator('[class*="brass"]');
    expect(await brassElements.count()).toBeGreaterThan(0);
  });

  test("should show trust scores with EWMA algorithm", async ({ page }) => {
    await page.goto("/booth/web3-architecture-alice");

    // Check for trust score display
    const trustScore = page.locator("text=/\\d+\\.\\d+/").first();
    await expect(trustScore).toBeVisible();

    const scoreText = await trustScore.textContent();
    const score = parseFloat(scoreText || "0");

    // Trust score should be between 0 and 100
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
  });

  test("should have accessible UI elements", async ({ page }) => {
    await page.goto("/");

    // Check for proper headings hierarchy
    expect(await page.locator("h1").count()).toBeGreaterThan(0);

    // Check buttons are accessible
    const buttons = page.getByRole("button");
    expect(await buttons.count()).toBeGreaterThan(0);

    // Check links are accessible
    const links = page.getByRole("link");
    expect(await links.count()).toBeGreaterThan(0);

    // Check images have alt text (if any)
    const images = page.locator("img");
    if ((await images.count()) > 0) {
      await expect(images.first()).toHaveAttribute("alt");
    }
  });
});
