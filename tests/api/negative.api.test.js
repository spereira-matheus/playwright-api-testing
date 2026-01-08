import { test, expect } from "@playwright/test";

test.describe("API Negative", { tag: ["@api", "@edge"] }, () => {
  test("GET non-existing resource returns 404", async ({ request }) => {
    const res = await request.get("https://jsonplaceholder.typicode.com/posts/999999999");
    expect(res.status()).toBe(404);
  });
});