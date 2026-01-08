import { test, expect } from "@playwright/test";

test.describe("API Contract", { tag: ["@api", "@regression"] }, () => {
  test("Response fields types are consistent", async ({ request }) => {
    const res = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(res.status()).toBe(200);

    const body = await res.json();

    expect(typeof body.id).toBe("number");
    expect(typeof body.userId).toBe("number");
    expect(typeof body.title).toBe("string");
    expect(typeof body.body).toBe("string");
  });
});