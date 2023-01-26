<script lang="ts">
	import { SignIn } from '$lib';
	const registerLink = 'sign-up';
	const lostPasswordLink = 'forgot-password';
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

<SignIn {registerLink} {lostPasswordLink} on:submit={onSubmit} />
