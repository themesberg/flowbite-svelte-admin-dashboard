<script>
	import AppsMenu from '$lib/widgets/AppsMenu.svelte';
	import UserMenu from '$lib/widgets/UserMenu.svelte';
	import { DarkMode, NavBrand, NavHamburger, Navbar, Search } from 'flowbite-svelte';
	import Users from '../data/users.json';
	import Notifications from './dashboard/NotificationList.svelte';
	import '../../app.pcss';

	export let fluid = true;
	export let drawerHidden = false;
</script>

<Navbar {fluid} class="mt-px text-black" color="default">
	<NavHamburger
		onClick={() => (drawerHidden = !drawerHidden)}
		class="m-0 me-3 md:block lg:hidden"
	/>
	<NavBrand href="/" class="py-1.5 lg:w-60">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
			>Flowbite</span
		>
	</NavBrand>
	<div class="hidden lg:block lg:ps-4">
		<Search size="md" class="w-96 border focus:outline-none" />
	</div>
	<div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<Notifications />

		<AppsMenu />
		<DarkMode />
		<UserMenu {...Users[4]} />
	</div>
</Navbar>
