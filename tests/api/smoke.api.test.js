import { test, expect } from "@playwright/test";

test.describe("API Smoke", { tag: ["@api", "@smoke"] }, () => {
  test("GET /posts/1 returns 200 and valid payload", async ({ request }) => {
    const res = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty("id", 1);
    expect(body).toHaveProperty("userId");
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");
  });
});