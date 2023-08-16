import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByText('Part of TodoMVC').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  await page.getByRole('link', { name: 'View on GitHub' }).click();
  await page.goto('https://todomvc.com/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('main').getByRole('link', { name: 'TasteJS', exact: true }).click();
});