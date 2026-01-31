import { test, expect } from '@playwright/test';

test.describe('Negative UI Test', () => {
  test('Neg_UI_0001', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const singlishInput = page.locator('textarea').first();
    
    
    const copyButton = page.locator('button').filter({ 
      has: page.locator('path[d*="M8 16H6a2"]') 
    }).first();

    
    await singlishInput.clear();
    
    
    await copyButton.click();


    const bugToast = page.getByText(/copied/i);
    
    await expect(bugToast).not.toBeVisible({ timeout: 5000 });
  });
});