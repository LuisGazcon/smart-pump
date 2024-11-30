import { test, expect } from '@playwright/test';

test('logged in successfully and showed home page', async ({ page }) => {
  await page.goto('http://localhost:5173/auth/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('test@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#root')).toContainText('test@test.com');
});

test('logged in unsuccessfully and showed error dialog', async ({ page }) => {
  await page.goto('http://localhost:5173/auth/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('randomemail@.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('random');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('[id="headlessui-dialog-title-\\:rh\\:"]')).toContainText("Can't log in");
  await page.getByText('We couldn’t log you in.').dblclick();
});
