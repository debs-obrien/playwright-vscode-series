import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cloudtesting.contosotraders.com/');
  await page.getByPlaceholder('Search by product name or search by image').click();
  await page.getByPlaceholder('Search by product name or search by image').fill('xbox');
  await page.getByPlaceholder('Search by product name or search by image').press('Enter');
  await page.getByPlaceholder('Search by product name or search by image').click();
  await page.getByRole('img', { name: 'Xbox Wireless Controller Mineral Camo Special Edition' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByLabel('bag').click();
  await expect(page.locator('div').filter({ hasText: /^Xbox Wireless Controller Mineral Camo Special Edition$/ })).toBeVisible();

  await page.getByRole('link', { name: 'Remove' }).click();
  await expect(page.locator('div').filter({ hasText: /^Xbox Wireless Controller Mineral Camo Special Edition$/ })).not.toBeVisible();

});