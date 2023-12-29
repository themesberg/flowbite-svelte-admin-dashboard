<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import {
		A,
		Heading,
		Li,
		List,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Sidebar
	} from 'flowbite-svelte';
	import { ChevronDownSolid, ChevronUpSolid } from 'flowbite-svelte-icons';

	let drawerHidden: boolean = false;

	const closeDrawer = () => {
		drawerHidden = true;
	};

	let spanClass = '';
	let nonActiveClass =
		'transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white';
	let activeClass =
		'relative flex items-center flex-wrap font-medium cursor-default text-primary-700 dark:text-primary-700';

	$: mainSidebarUrl = $page.url.pathname;
	let activeMainSidebar: string;

	afterNavigate((navigation) => {
		// this fixes https://github.com/themesberg/flowbite-svelte/issues/364
		document.getElementById('svelte')?.scrollTo({ top: 0 });
		closeDrawer();

		activeMainSidebar = navigation.to?.url.pathname ?? '';

		// const key = fileDir(activeMainSidebar);
		// for (const k in dropdowns) dropdowns[k] = false;
		// dropdowns[key] = true;
	});

	let posts = {
		Pages: {
			404: '/errors/404',
			500: '/errors/500'
		},
		Authenication: {
			'Forgot password': '/authentication/forgot-password',
			'Profile lock': '/authentication/profile-lock',
			'Reset password': '/authentication/reset-password',
			'Sign in': '/authentication/sign-in',
			'Sign up': '/authentication/sign-up'
		}
	};
	let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<Sidebar
	class={drawerHidden ? 'hidden' : ''}
	{nonActiveClass}
	activeUrl={mainSidebarUrl}
	asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block"
>
	<h4 id="sidebar-label" class="sr-only">Browse docs</h4>
	<SidebarWrapper
		divClass="overflow-y-auto px-4 pt-20 lg:pt-0 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block dark:bg-gray-900 lg:me-0 lg:sticky top-20"
	>
		<nav class="font-normal text-base lg:text-sm">
			<SidebarGroup ulClass="list-unstyled fw-normal small mb-4">
				{#each Object.entries(posts) as [key, values] (key)}
					<SidebarDropdownWrapper
						bind:isOpen={dropdowns[key]}
						label={key}
						ulClass="space-y-2.5"
						btnClass="flex items-center justify-between w-full my-4 text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600"
						spanClass=""
						class={dropdowns[key]
							? 'text-primary-700 dark:text-primary-700'
							: 'text-gray-900 dark:text-white'}
					>
						<ChevronDownSolid slot="arrowdown" class="w-3 h-3 text-gray-800 dark:text-white" />
						<ChevronUpSolid slot="arrowup" class="w-3 h-3 text-gray-800 dark:text-white" />
						{#each Object.entries(values) as [title, href]}
							<SidebarItem
								label={title}
								{href}
								{spanClass}
								{activeClass}
								active={activeMainSidebar === href}
							/>
						{/each}
					</SidebarDropdownWrapper>
				{/each}
			</SidebarGroup>
		</nav>
	</SidebarWrapper>
</Sidebar>

<div
	hidden={drawerHidden}
	class="fixed inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60"
	on:click={closeDrawer}
	on:keydown={closeDrawer}
	role="presentation"
/>

<main class="container mx-auto">
	<h1 class="text-4xl dark:text-white py-8">Welcome to Flowbite Svelte Admin Dashboard</h1>
</main>
