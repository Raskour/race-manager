import { test, expect } from '@playwright/test';

test('should add race result', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Creatng a race
  await page.getByRole('button', { name: '+ Add New Race' }).click();
  await page.getByPlaceholder('Enter race title').fill('100m Dash');

  await page.getByRole('button', { name: '+ Add New Participant' }).click();
  await page.getByRole('button', { name: '+ Add New Participant' }).click();

  const nameInputs = await page.getByLabel('Name:').all();
  const laneInputs = await page.getByLabel('Lane:').all();

  await nameInputs[0].fill('Alice');
  await laneInputs[0].fill('1');

  await nameInputs[1].fill('Bob');
  await laneInputs[1].fill('2');

  await page.getByRole('button', { name: 'Create Race' }).click();

  // Add Result------------
  await page.getByRole('button', { name: 'Add Result' }).click();

  const table = page.getByRole('table');
  await expect(table).toBeVisible();
  await expect(table.getByText('Alice')).toBeVisible();
  await expect(table.getByText('Bob')).toBeVisible();

  const inputs = await table.getByTestId('position').all();
  await inputs[0].fill('1');
  await inputs[1].fill('2');

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(table).toBeHidden();

  await expect(page.getByTestId('race-status')).toHaveText('Status: Completed');
});
