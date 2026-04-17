
import { Page } from '@playwright/test';

export async function selectFromDropdown(page: Page, label: string, values: string[]) {
  // Ubica el bloque "Filter by"
  const filterSection = page.locator('text=Filter by').locator('..').locator('..');

  // Encuentra el dropdown por label visible
  const dropdown = filterSection.locator(`text=${label}`).first();

  // Click en el contenedor clickable (sibling)
  const trigger = dropdown.locator('xpath=following-sibling::*[1]');
  await trigger.click();

  for (const value of values) {
    const option = page.locator(`[role="listitem"][data-value="${value}"]`);
  await option.click();
  }

  await page.keyboard.press('Escape');
}