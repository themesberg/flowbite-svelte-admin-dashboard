<script lang="ts">
	import { Label, Input, Checkbox, A, Button } from 'flowbite-svelte';
	export let title = 'Sign in to platform';
	export let site = {
		name: 'Flowbite',
		img: 'https://flowbite-admin-dashboard.vercel.app/images/logo.svg',
		link: 'https://flowbite-admin-dashboard.vercel.app/',
		imgAlt: 'FlowBite Logo'
	};
	export let rememberMe = true;
	export let lostPassword = true;
	export let createAccount = true;
	export let lostPasswordLink = '';
	export let loginTitle = 'Login to your account';
	export let registerLink = '';
	export let createAccountTitle = 'Create account';
</script>

<main class="bg-gray-50 dark:bg-gray-900">
	<div
		class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
	>
		<a
			href={site.link}
			class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
		>
			<img src={site.img} class="mr-4 h-11" alt={site.imgAlt} />
			<span>{site.name}</span>
		</a>
		<!-- Card -->
		<div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white">
				{title}
			</h2>
			<form class="mt-8 space-y-6" on:submit|preventDefault>
				<div>
					<Label for="email" class="mb-2">Your email</Label>
					<Input type="email" name="email" id="email" placeholder="name@company.com" required />
				</div>
				<div>
					<Label for="password" class="mb-2">Your password</Label>
					<Input type="password" name="password" id="password" placeholder="••••••••" required />
				</div>
				<div class="flex items-start">
					{#if rememberMe}
						<div class="flex items-center h-5">
							<Checkbox id="remember" aria-describedby="remember" name="remember" value={1} />
						</div>
						<div class="ml-3 text-sm">
							<Label for="remember">Remember me</Label>
						</div>
					{/if}
					{#if lostPassword}
						<A href={lostPasswordLink} aClass="ml-auto text-sm">Lost Password?</A>
					{/if}
				</div>
				<Button type="submit">{loginTitle}</Button>
				{#if createAccount}
					<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
						Not registered? <a
							href={registerLink}
							class="text-primary-700 hover:underline dark:text-primary-500">{createAccountTitle}</a
						>
					</div>
				{/if}
			</form>
		</div>
	</div>
</main>
