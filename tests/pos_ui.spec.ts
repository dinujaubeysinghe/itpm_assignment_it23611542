import { test, expect } from '@playwright/test';

test.describe('Positive UI Test', () => {
  test('Pos_UI_0001', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const singlishInput = page.locator('textarea').nth(0);
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    const clearButton = page.getByRole('button', { name: /clear/i }).first();

    await singlishInput.fill('api kaema kanna eliyata yanna hadanne');
    await expect(sinhalaOutput).not.toHaveText('', { timeout: 10000 });

    await clearButton.click();

    await expect(singlishInput).toHaveValue('');
    await expect(sinhalaOutput).toHaveText('');
  });
});