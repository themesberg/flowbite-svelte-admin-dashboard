<script>
	import LanguageTime from '$lib/settings/LanguageTime.svelte';
	import ProfilePicture from '$lib/settings/ProfilePicture.svelte';
	import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
	import GeneralInfo from '../dashboard/GeneralInfo.svelte';
	import Footer from '../footer.svelte';
	import PasswordInfo from '$lib/settings/PasswordInfo.svelte';
	import Sessions from '$lib/settings/Sessions.svelte';
	import SocialAccounts from '$lib/settings/SocialAccounts.svelte';
	import Accounts from '$lib/settings/Accounts.svelte';
	import Alerts from '$lib/settings/Alerts.svelte';
	import Emails from '$lib/settings/Emails.svelte';
</script>

<main class="relative w-full h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
	<Breadcrumb class="mb-5">
		<BreadcrumbItem home>Home</BreadcrumbItem>
		<BreadcrumbItem
			class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
			href="/curd/users">Users</BreadcrumbItem
		>
		<BreadcrumbItem>Settings</BreadcrumbItem>
	</Breadcrumb>

	<Heading tag="h1" class="mb-4 font-semibold tracking-wide text-xl sm:text-2xl"
		>User settings</Heading
	>

	<div class="grid grid-cols-1 pt-2 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
		<div class="col-span-full xl:col-auto space-y-4">
			<ProfilePicture />
			<LanguageTime />
			<SocialAccounts />
			<Accounts />
		</div>
		<div class="col-span-2 space-y-4">
			<GeneralInfo />
			<PasswordInfo />
			<Sessions />
		</div>
	</div>
	<div class="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 mt-4">
		<Alerts />
		<Emails />
	</div>
	<Footer />
</main>
