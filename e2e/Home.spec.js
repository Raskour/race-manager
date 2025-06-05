import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust path if needed
  });

  test('renders the heading and create race button', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 2, name: 'Races' })
    ).toBeVisible();

    const createRaceBtn = page.getByRole('button', { name: '+ Add New Race' });
    await expect(createRaceBtn).toBeVisible();
    await expect(createRaceBtn).toBeEnabled();
  });
});
