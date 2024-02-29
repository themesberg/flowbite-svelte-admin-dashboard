<script>
	import AppsMenu from '$lib/widgets/AppsMenu.svelte';
	import UserMenu from '$lib/widgets/UserMenu.svelte';
	import {
		DarkMode,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Search,
		ToolbarButton
	} from 'flowbite-svelte';
	import { BellSolid } from 'flowbite-svelte-icons';
	import '../../app.pcss';
	import Users from '../data/users.json';

	export let fluid = true;
	export let drawerHidden = false;
</script>

<Navbar {fluid} class="mt-px" color="default">
	<NavHamburger
		onClick={() => (drawerHidden = !drawerHidden)}
		class="m-0 me-3 md:block lg:hidden"
	/>
	<NavBrand href="/" class="py-1.5 lg:w-60">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<div class="hidden lg:block lg:ps-4">
		<Search size="md" class="w-96 border" />
	</div>
	<div class="ms-auto flex items-center sm:order-2">
		<ToolbarButton size="lg"><BellSolid /></ToolbarButton>
		<AppsMenu />
		<DarkMode />
		<UserMenu {...Users[4]} />
	</div>
</Navbar>
<!--
	<Navbar {fluid} color="default">
	<Search size="md" class="w-96 border" />
	<NavBrand href="/" class="ms-2 md:me-24">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-8" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
			Flowbite
		</span>

	</NavBrand>
	<NavHamburger />

	<NavUl class="ms-auto flex items-center ">
		<NavLi>
			
		</NavLi>

	</NavUl>
</Navbar>
-->
