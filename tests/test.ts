import { expect, test } from '@playwright/test';

test('index page has expected h3', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h3')).toContain('$345');
});

test('dashboard page has expected h3', async ({ page }) => {
	await page.goto('dashboard');
	expect(await page.textContent('h3')).toContain('$345');
});

test('layout stacked page has expected h3', async ({ page }) => {
	await page.goto('layouts/stacked');
	expect(await page.textContent('h3')).toContain('$345');
});

// CRUD
test('products page has expected h1', async ({ page }) => {
	await page.goto('crud/products');
	expect(await page.textContent('h1')).toContain('All users');
});

test('users page has expected h1', async ({ page }) => {
	await page.goto('crud/users');
	expect(await page.textContent('h1')).toContain('All users');
});

test('user settings page has expected h1', async ({ page }) => {
	await page.goto('settings');
	expect(await page.textContent('h1')).toContain('User settings');
});

// authentication
test('Forgot password page has expected h1', async ({ page }) => {
	await page.goto('authentication/forgot-password');
	expect(await page.textContent('h1')).toContain('Forgot your password?');
});

test('Profile lock page has expected h1', async ({ page }) => {
	await page.goto('authentication/profile-lock');
	expect(await page.textContent('h1')).toContain('Neil Sims');
});

test('Reset password page has expected h1', async ({ page }) => {
	await page.goto('authentication/reset-password');
	expect(await page.textContent('h1')).toContain('Reset your password');
});

test('sign-in page has expected h1', async ({ page }) => {
	await page.goto('authentication/sign-in');
	expect(await page.textContent('h1')).toContain('Sign in to platform');
});

test('sign-up page has expected h1', async ({ page }) => {
	await page.goto('authentication/sign-up');
	expect(await page.textContent('h1')).toContain('Create a Free Account');
});

// pages
test('pricing page has expected h1', async ({ page }) => {
	await page.goto('pages/pricing');
	expect(await page.textContent('h1')).toContain('Our pricing plan made simple');
});

test('errors 400 has expected h1', async ({ page }) => {
	await page.goto('errors/400');
	expect(await page.textContent('h1')).toContain('Under Maintenance');
});

test('errors/404 has expected h1', async ({ page }) => {
	await page.goto('errors/404');
	expect(await page.textContent('h1')).toContain('Page not found');
});

test('errors/500 has expected h1', async ({ page }) => {
	await page.goto('errors/500');
	expect(await page.textContent('h1')).toContain('Something has gone seriously wrong');
});
