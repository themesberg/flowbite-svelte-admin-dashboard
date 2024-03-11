<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import {
		Sidebar,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import {
		AngleDownSolid,
		AngleUpOutline,
		ClipboardListSolid,
		CogOutline,
		FileChartBarSolid,
		GithubSolid,
		LayersSolid,
		LifeSaverSolid,
		LockSolid,
		MagicWandSolid,
		PieChartSolid,
		RectangleListSolid,
		TableColumnSolid
	} from 'flowbite-svelte-icons';

	export let drawerHidden: boolean = false;

	const closeDrawer = () => {
		drawerHidden = true;
	};

	let iconClass =
		'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white';
	let itemClass =
		'flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700';
	let groupClass = 'pt-2 space-y-2';

	$: mainSidebarUrl = $page.url.pathname;
	let activeMainSidebar: string;

	afterNavigate((navigation) => {
		// this fixes https://github.com/themesberg/flowbite-svelte/issues/364
		document.getElementById('svelte')?.scrollTo({ top: 0 });
		closeDrawer();

		activeMainSidebar = navigation.to?.url.pathname ?? '';
	});

	let posts = [
		{ name: 'Dashboard', icon: PieChartSolid, href: '/dashboard' },
		{
			name: 'Layouts',
			icon: TableColumnSolid,
			children: {
				Stacked: '/layouts/stacked',
				Sidebar: ''
			}
		},
		{
			name: 'CRUD',
			icon: RectangleListSolid,
			children: {
				Products: '/crud/products',
				Users: '/crud/users'
			}
		},
		{ name: 'Settings', icon: CogOutline, href: '/settings' },
		{
			name: 'Pages',
			icon: FileChartBarSolid,
			children: {
				Pricing: '/pages/pricing',
				Maintenance: '/errors/400',
				'404 not found': '/errors/404',
				'500 server error': '/errors/500'
			}
		},
		{
			name: 'Authenication',
			icon: LockSolid,
			children: {
				'Forgot password': '/authentication/forgot-password',
				'Profile lock': '/authentication/profile-lock',
				'Reset password': '/authentication/reset-password',
				'Sign in': '/authentication/sign-in',
				'Sign up': '/authentication/sign-up'
			}
		},
		{
			name: 'Playground',
			icon: MagicWandSolid,
			children: {
				Stacked: '/playground/stacked',
				Sidebar: '/playground/sidebar'
			}
		}
	];

	let links = [
		{
			label: 'GitHub Repository',
			href: 'https://github.com/themesberg/flowbite-svelte-admin-dashboard',
			icon: GithubSolid
		},
		{
			label: 'Flowbite Svelte',
			href: 'https://flowbite-svelte.com/docs/pages/quickstart',
			icon: ClipboardListSolid
		},
		{
			label: 'Components',
			href: 'https://flowbite-svelte.com/docs/components/accordion',
			icon: LayersSolid
		},
		{
			label: 'Support',
			href: 'https://github.com/themesberg/flowbite-svelte-admin-dashboard/issues',
			icon: LifeSaverSolid
		}
	];
	let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<Sidebar
	class={drawerHidden ? 'hidden' : ''}
	activeUrl={mainSidebarUrl}
	activeClass="bg-gray-100 dark:bg-gray-700"
	asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-16 lg:block"
>
	<h4 class="sr-only">Main menu</h4>
	<SidebarWrapper
		divClass="overflow-y-auto px-3 pt-20 lg:pt-5 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-4rem)] lg:block dark:bg-gray-800 lg:me-0 lg:sticky top-2"
	>
		<nav class="divide-y divide-gray-200 dark:divide-gray-700">
			<SidebarGroup ulClass={groupClass} class="mb-3">
				{#each posts as { name, icon, children, href } (name)}
					{#if children}
						<SidebarDropdownWrapper bind:isOpen={dropdowns[name]} label={name}>
							<AngleDownSolid slot="arrowdown" strokeWidth="3.3" size="sm" />
							<AngleUpOutline slot="arrowup" strokeWidth="3.3" size="sm" />
							<svelte:component this={icon} slot="icon" class={iconClass} />

							{#each Object.entries(children) as [title, href]}
								<SidebarItem
									label={title}
									{href}
									spanClass="ml-9"
									class={itemClass}
									active={activeMainSidebar === href}
								/>
							{/each}
						</SidebarDropdownWrapper>
					{:else}
						<SidebarItem
							label={name}
							{href}
							spanClass="ml-3"
							class={itemClass}
							active={activeMainSidebar === href}
						>
							<svelte:component this={icon} slot="icon" class={iconClass} />
						</SidebarItem>
					{/if}
				{/each}
			</SidebarGroup>
			<SidebarGroup ulClass={groupClass}>
				{#each links as { label, href, icon } (label)}
					<SidebarItem
						{label}
						{href}
						spanClass="ml-3"
						class={itemClass}
						active={activeMainSidebar === href}
						target="_blank"
					>
						<svelte:component this={icon} slot="icon" class={iconClass} />
					</SidebarItem>
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
