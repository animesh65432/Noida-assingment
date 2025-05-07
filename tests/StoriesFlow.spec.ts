import { test, expect } from '@playwright/test';

test.describe('Stories flow', () => {
  test('loads users and opens a story when clicked', async ({ page }) => {
    await page.goto('http://localhost:5173');


    await page.waitForSelector('#UsersConatainer');


    const users = page.locator('#userContainer');
    const usersCount = await users.count();

    expect(usersCount).toBeGreaterThan(0)

    const firstUser = page.locator('#UsersConatainer > div').first();
    await firstUser.click();

    await expect(page.locator('#overlay')).toBeVisible();


    const rightZone = page.locator('#rightClickZone');
    await rightZone.click();


    const leftZone = page.locator('#leftClickZone');
    await leftZone.click();


    await page.locator('#closeButton').click();
    await expect(page.locator('#overlay')).toHaveCount(0);

  });
});