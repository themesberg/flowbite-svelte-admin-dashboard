<script>
	import UserMenu from '$lib/widgets/UserMenu.svelte';
	import { DarkMode, NavBrand, NavHamburger, Navbar, Search, ToolbarButton } from 'flowbite-svelte';
	import { BellSolid, GridSolid } from 'flowbite-svelte-icons';
	import '../app.postcss';
	import Users from './data/users.json';
	import AppsMenu from '$lib/widgets/AppsMenu.svelte';
</script>

<Navbar fluid color="default" class="justify-between">
	<div class="flex items-center justify-start w-fit">
		<NavHamburger />
		<NavBrand href="/" class="ms-2 md:me-24">
			<img
				src="/images/flowbite-svelte-icon-logo.svg"
				class="me-3 h-6 sm:h-8"
				alt="Flowbite Logo"
			/>
			<span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<Search size="sm" />
	</div>

	<div class="flex items-center ms-auto gap-2 p-1">
		<a
			class="github-button"
			href="https://github.com/themesberg/flowbite-admin-dashboard"
			data-color-scheme="no-preference: dark; light: light; dark: light;"
			data-icon="octicon-star"
			data-size="large"
			data-show-count="true"
			aria-label="Star themesberg/flowbite-admin-dashboard on GitHub">Star</a
		>
		<ToolbarButton size="lg"><BellSolid /></ToolbarButton>
		<AppsMenu />
		<DarkMode />
		<UserMenu {...Users[4]} />
	</div>
</Navbar>

<div class="lg:flex items-center justify-center">
	<slot />
</div>
