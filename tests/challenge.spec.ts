import { test, expect } from "@playwright/test";
import { selectFromDropdown } from "../pages/case_studies";

test("challenge", async ({ page }) => {
  // 1. Visit https://stxnext.com/
  await page.goto("https://stxnext.com/");
  // 2. Go to "Case Studies” section
  await page.getByRole("link", { name: "Case Studies" }).click();
  // 3. In Country dropdown choose "Netherlands"
  await selectFromDropdown(page, "Country", ["Netherlands"]);
  // 4. In Country dropdown choose "United States"
  await selectFromDropdown(page, "Country", ["United States"]);
  // 5. Check if there are 9 results on the page
 const results = page
  .locator("section:has-text('Project insights')")
  .getByRole("listitem");

  await expect(results).toHaveCount(9);
  // 6. Check if there are 2 pages of results
  await expect(page.getByRole("listitem").locator("a")).toHaveCount(2);
  // 7. In Industry dropdown select "Hospitality"
  await page
    .getByRole("combobox", { name: "Industry" })
    .selectOption("Hospitality");
  // 8. Check if there is only one result
  await expect(page.getByRole("listitem")).toHaveCount(1);
  // 9. Check if there are no additional pages
  await expect(page.getByRole("listitem").locator("a")).toHaveCount(1);
  // 10. Remove "Netherlands" from chosen options
  await page
    .getByRole("combobox", { name: "Country" })
    .selectOption("Netherlands");
  // 11. Check if there are no results and no additional pages
  await expect(page.getByRole("listitem")).toHaveCount(0);
  await expect(page.getByRole("listitem").locator("a")).toHaveCount(0);
});
test.skip("Code Challenge", async ({ page }) => {
  // 1. Visit https://stxnext.com/
  await page.goto("https://www.stxnext.com/");
  await page.getByRole("button", { name: "Industries" }).click();
  await page.getByRole("button", { name: "Allow all" }).click();
  await page.getByRole("link", { name: "Case Studies" }).click();
  await page
    .locator("multi-select")
    .filter({
      hasText:
        "AustraliaAustriaFranceGermanyIndonesiaIrelandIsraelNetherlandsPolandSaudi",
    })
    .click();
  await page.locator("label").filter({ hasText: "Netherlands" }).click();
  await page.locator(".multi-select-arrow").first().click();
  await page
    .locator("multi-select")
    .filter({
      hasText:
        "AustraliaAustriaFranceGermanyIndonesiaIrelandIsraelNetherlandsPolandSaudi",
    })
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Netherlands$/ })
    .nth(1)
    .click();
  await page.locator("label").filter({ hasText: "United States" }).click();
});
