import { test, expect } from "@playwright/test";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

test.describe("API Integration Tests", () => {
  test("should fetch booths from API", async ({ request }) => {
    const response = await request.get(`${API_URL}/v1/booths`);
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data).toHaveProperty("booths");
    expect(Array.isArray(data.booths)).toBeTruthy();
  });

  test("should filter booths by tag", async ({ request }) => {
    const response = await request.get(`${API_URL}/v1/booths?tags=web3`);
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    if (data.booths.length > 0) {
      expect(data.booths[0].tags).toContain("web3");
    }
  });

  test("should get booth by slug", async ({ request }) => {
    // First get all booths
    const listResponse = await request.get(`${API_URL}/v1/booths`);
    const listData = await listResponse.json();

    if (listData.booths.length > 0) {
      const firstBooth = listData.booths[0];

      // Get specific booth
      const boothResponse = await request.get(`${API_URL}/v1/booths/${firstBooth.slug}`);
      expect(boothResponse.ok()).toBeTruthy();

      const boothData = await boothResponse.json();
      expect(boothData.booth.id).toBe(firstBooth.id);
    }
  });

  test("should verify review hash", async ({ request }) => {
    // Try with a non-existent hash
    const response = await request.get(`${API_URL}/v1/verify/0xinvalidhash`);

    // Should return 404 or verification failed
    const data = await response.json();
    expect(data).toHaveProperty("verified");
    expect(data.verified).toBeFalsy();
  });

  test("should validate zod schemas on invalid data", async ({ request }) => {
    // Try to create session with invalid data
    const response = await request.post(`${API_URL}/v1/sessions/start`, {
      data: {
        boothId: "invalid",
        clientId: "invalid",
        durationSec: -1, // Invalid: negative
      },
    });

    expect(response.status()).toBeGreaterThanOrEqual(400);
  });

  test("should check API health", async ({ request }) => {
    const response = await request.get(`${API_URL}/health`);
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data).toHaveProperty("status");
    expect(data.status).toBe("ok");
    expect(data).toHaveProperty("timestamp");
  });
});
