import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});

// authentication
test('Forgot password page has expected h1', async ({ page }) => {
	await page.goto('/authentication/forgot-password');
	expect(await page.textContent('h1')).toBe('Forgot your password?');
});

test('Profile lock page has expected h1', async ({ page }) => {
	await page.goto('/authentication/profile-lock');
	expect(await page.textContent('h1')).toBe('Bonnie Green');
});

test('Reset password page has expected h1', async ({ page }) => {
	await page.goto('/authentication/reset-password');
	expect(await page.textContent('h1')).toBe('Reset your password');
});

test('sign-in page has expected h1', async ({ page }) => {
	await page.goto('/authentication/sign-in');
	expect(await page.textContent('h1')).toBe('Sign in to platform');
});

test('sign-up page has expected h1', async ({ page }) => {
	await page.goto('/authentication/sign-up');
	expect(await page.textContent('h1')).toBe('Create a Free Account');
});





// pages
test('404 page has expected h1', async ({ page }) => {
	await page.goto('/pages/404');
	expect(await page.textContent('h1')).toBe('Page not found');
});