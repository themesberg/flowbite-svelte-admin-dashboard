import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});

test('sign-in page has expected h1', async ({ page }) => {
	await page.goto('/authentication/sign-in');
	expect(await page.textContent('h2')).toBe('Sign in to platform');
});

