// import { seed } from "@repo/db/seed";
import { expect, test } from "./fixtures";

// test.beforeAll(async () => {
//   await seed();
// });

test.describe("Pages - Home", () => {
  test(
    "homepage shows post list with all required fields",
    {
      tag: "@pages",
    },
    async ({ page }) => {
      await page.goto("/");

      //title
      await expect(page.getByText("Boost your coversion rate")).toBeVisible();

      //description (partial)
      await expect(page.getByText("Illo sint voluptas")).toBeVisible();

      //category
      await expect(page.getByText("Node")).toBeVisible();

      //date (partial)
      await expect(page.getByText("Mon")).toBeVisible();
    },
  );
});
