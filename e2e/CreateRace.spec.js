import { test, expect } from '@playwright/test';

test.describe('CreateRaceModal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByRole('button', { name: '+ Add New Race' }).click();
  });

  test('renders modal with form fields and buttons', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Create New Race' })
    ).toBeVisible();
    await expect(page.getByLabel('Race Title:')).toBeVisible();
    await expect(
      page.getByRole('button', { name: '+ Add New Participant' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Create Race' })
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  });

  test('allows typing into race title field', async ({ page }) => {
    const input = page.getByPlaceholder('Enter race title');
    await input.fill('100m Finals');
    await expect(input).toHaveValue('100m Finals');
  });

  test('can add participants', async ({ page }) => {
    await page.getByRole('button', { name: '+ Add New Participant' }).click();

    const nameInputs = await page.getByLabel('Name:').all();
    const laneInputs = await page.getByLabel('Lane:').all();

    await expect(nameInputs[0]).toBeVisible();
    await expect(laneInputs[0]).toBeVisible();

    await nameInputs[0].fill('Alice');
    await laneInputs[0].fill('1');

    await expect(nameInputs[0]).toHaveValue('Alice');
    await expect(laneInputs[0]).toHaveValue('1');
  });

  test('successfully creates race with valid data', async ({ page }) => {
    await page.getByPlaceholder('Enter race title').fill('Sprint 200m');

    await page.getByRole('button', { name: '+ Add New Participant' }).click();
    await page.getByRole('button', { name: '+ Add New Participant' }).click();

    const nameInputs = await page.getByLabel('Name:').all();
    const laneInputs = await page.getByLabel('Lane:').all();

    await nameInputs[0].fill('Alice');
    await laneInputs[0].fill('1');

    await nameInputs[1].fill('Bob');
    await laneInputs[1].fill('2');

    await page.getByRole('button', { name: 'Create Race' }).click();

    await expect(page.getByTestId('create-race-form')).not.toBeVisible();

    await expect(page.getByTestId('race-card')).toBeVisible();
    await expect(
      page
        .getByTestId('race-card')
        .getByRole('heading', { name: 'Sprint 200m' })
    ).toBeVisible();
  });
});
