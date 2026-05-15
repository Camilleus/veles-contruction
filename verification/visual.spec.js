import { test, expect } from '@playwright/test';

test('visual verification', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'verification/hero_final.png', fullPage: false });

  // Scroll to Oferta
  await page.evaluate(() => document.getElementById('oferta').scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/oferta_final.png' });
});
