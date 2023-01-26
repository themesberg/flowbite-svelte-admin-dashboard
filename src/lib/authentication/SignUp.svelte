<script lang="ts">
	import { Label, Input, Checkbox, A, Button } from 'flowbite-svelte';
	export let title = '';
	export let site = {
		name: '',
		img: '',
		link: '',
		imgAlt: ''
	};
	export let acceptTerms: boolean;
	export let haveAccount: boolean;
	export let btnTitle = 'Create account';
	export let termsLink = '/';
	export let loginLink = '/';
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
				<div>
					<Label for="confirm-password" class="mb-2">Confirm password</Label>
					<Input
						type="password"
						name="confirm-password"
						id="confirm-password"
						placeholder="••••••••"
						required
					/>
				</div>
				{#if acceptTerms}
					<div class="flex items-start">
						<div class="flex items-center h-5">
							<Checkbox id="accept" aria-describedby="accept" name="accept" value={1} />
						</div>
						<div class="ml-3 text-sm">
							<Label for="accept"
								>I accept the <a
									href={termsLink}
									class="text-primary-700 hover:underline dark:text-primary-500"
									>Terms and Conditions</a
								></Label
							>
						</div>
					</div>
				{/if}
				<Button type="submit">{btnTitle}</Button>
				{#if haveAccount}
					<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
						Already have an account? <a
							href={loginLink}
							class="text-primary-700 hover:underline dark:text-primary-500">Login here</a
						>
					</div>
				{/if}
			</form>
		</div>
	</div>
</main>
