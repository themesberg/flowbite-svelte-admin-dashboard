<script>
	import { Avatar, DarkMode, NavBrand, NavHamburger, Navbar, Search } from 'flowbite-svelte';
	import '../app.postcss';
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

	<div class="flex items-center ms-auto">
		<DarkMode />
		<Avatar size="sm" />
	</div>
</Navbar>

<div class="lg:flex items-center justify-center">
	<slot />
</div>
