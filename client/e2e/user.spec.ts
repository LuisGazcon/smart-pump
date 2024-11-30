import { test, expect } from '@playwright/test';

test('updated successfully 2 times the user first name in details', async ({ page }) => {
  await page.goto('http://localhost:5173/auth/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('test@test.com');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('123123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.locator('input[name="name\\.first"]').click();
  await page.locator('input[name="name\\.first"]').fill('first name');
  await page.getByRole('button', { name: 'Save' }).dblclick();
  await expect(page.locator('#root')).toContainText('first name');
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.locator('input[name="name\\.first"]').click();
  await page.locator('input[name="name\\.first"]').fill('first name 2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('first name 2').click();
  await expect(page.locator('#root')).toContainText('first name 2');
});
