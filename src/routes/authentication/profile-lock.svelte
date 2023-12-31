<script lang="ts">
	import { ProfileLock } from '$lib';
	import { Input, Label } from 'flowbite-svelte';
	import Users from '../data/users.json';

	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData);
	};

	let user = {
		img: 'https://flowbite-admin-dashboard.vercel.app/images/users/' + Users[0].avatar,
		imgAlt: Users[0].name,
		name: Users[0].name
	};
</script>

<ProfileLock on:submit={onSubmit} {user}>
	<div>
		<Label for="email" class="mb-2">Your email</Label>
		<Input type="email" name="email" id="email" placeholder="name@company.com" required />
	</div>
</ProfileLock>
