<script lang="ts">
	import { ProfileLock } from '$lib';
	import { Input, Label } from 'flowbite-svelte';
	import Users from '../data/users.json';
	import { avatarPath, imagesPath } from '$lib/variables';

	const onSubmit = (e: Event) => {
		const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData);
	};

	let user = {
		img: imagesPath(Users[0].avatar, 'users'),
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
