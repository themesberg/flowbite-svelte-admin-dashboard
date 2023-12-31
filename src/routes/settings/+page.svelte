<script>
	import LanguageTime from '$lib/settings/LanguageTime.svelte';
	import ProfilePicture from '$lib/settings/ProfilePicture.svelte';
	import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
</script>

<main class="container">
	<div class="p-4 block sm:flex flex-col items-start justify-between lg:mt-1.5">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem
				class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
				href="/curd/users">Users</BreadcrumbItem
			>
			<BreadcrumbItem>Settings</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="mb-4 text-xl sm:text-2xl">User settings</Heading>
	</div>

	<div class="flex flex-col gap-4">
		<ProfilePicture />
		<LanguageTime />
	</div>
</main>
