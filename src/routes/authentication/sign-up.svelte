<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import { SignUp } from '$lib';
	const title = 'Create a Free Account';
	const site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
	const acceptTerms = true;
	const haveAccount = true;
	const btnTitle = 'Create account';
	const termsLink = '/';
	const loginLink = 'sign-in';
	const labelClass = 'space-y-2';
	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);

		const data: Record<string, string | File> = {};
		for (const field of formData.entries()) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	};
</script>

<SignUp
	{title}
	{site}
	{acceptTerms}
	{haveAccount}
	{btnTitle}
	{termsLink}
	{loginLink}
	on:submit={onSubmit}
>
	<div>
		<Label class={labelClass}>
			<span>Your email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Your password</span>
			<Input type="password" name="password" placeholder="••••••••" required />
		</Label>
	</div>
	<div>
		<Label class={labelClass}>
			<span>Confirm password</span>
			<Input type="password" name="confirm-password" placeholder="••••••••" required />
		</Label>
	</div>
</SignUp>
