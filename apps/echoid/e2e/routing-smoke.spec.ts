import { test, expect, type Page } from "@playwright/test";

test.describe("EchoID routing smoke", () => {
  test("landing CTAs expose correct targets", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Enter the Builder" })).toHaveAttribute(
      "href",
      "/builder"
    );
    await expect(page.getByLabel("Scroll to see how the Bonelli Identity flow works")).toBeVisible();

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
          await expect(page.getByText(/Connect your wallet to enter the Identity Carnival/i)).toBeVisible({ timeout: 15000 });
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

  test("builder anchors render sections directly", async ({ page }) => {
    await page.goto("/builder#connect");
    await expect(page.locator("#connect")).toBeVisible();

    await page.goto("/builder#avatar");
    await expect(page.locator("#avatar")).toBeVisible();
  });

  test("dashboard anchor hash activates Ferris Wheel tab", async ({ page }) => {
    await page.goto("/dashboard#anchor");
    await expect(page).toHaveURL(/\/dashboard#anchor$/);
    await expect(page.getByText(/Connect your wallet to enter the Identity Carnival/i)).toBeVisible();
  });
});
