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
		AngleDownOutline,
		AngleUpOutline,
		ClipboardListSolid,
		CogOutline,
		FileChartBarSolid,
		GithubSolid,
		LayersSolid,
		LifeSaverSolid,
		LockSolid,
		WandMagicSparklesOutline,
		ChartPieOutline,
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
		{ name: 'Dashboard', icon: ChartPieOutline, href: '/dashboard' },
		{
			name: 'Layouts',
			icon: ChartPieOutline,
			children: [
				{ name: 'Stacked', icon: ChartPieOutline, href: '/layouts/stacked' },
				{
					name: 'Sidebar',
					icon: ChartPieOutline,
					children: [
						{ name: 'Left Sidebar', icon: ChartPieOutline, href: '/layouts/sidebar/left' },
						{ name: 'Right Sidebar', icon: ChartPieOutline, href: '/layouts/sidebar/right' }
					]
				}
			]
		},
		{
			name: 'CRUD',
			icon: ChartPieOutline,
			children: [
				{ name: 'Products', icon: ChartPieOutline, href: '/crud/products' },
				{ name: 'Users', icon: ChartPieOutline, href: '/crud/users' }
			]
		},
		{ name: 'Settings', icon: ChartPieOutline, href: '/settings' },
		{
			name: 'Pages',
			icon: ChartPieOutline,
			children: [
				{ name: 'Pricing', icon: ChartPieOutline, href: '/pages/pricing' },
				{ name: 'Maintenance', icon: ChartPieOutline, href: '/errors/400' },
				{ name: '404 not found', icon: ChartPieOutline, href: '/errors/404' },
				{ name: '500 server error', icon: ChartPieOutline, href: '/errors/500' }
			]
		},
		{
			name: 'Authenication',
			icon: ChartPieOutline,
			children: [
				{ name: 'Sign in', icon: ChartPieOutline, href: '/authentication/sign-in' },
				{ name: 'Sign up', icon: ChartPieOutline, href: '/authentication/sign-up' },
				{ name: 'Forgot password', icon: ChartPieOutline, href: '/authentication/forgot-password' },
				{ name: 'Reset password', icon: ChartPieOutline, href: '/authentication/reset-password' },
				{ name: 'Profile lock', icon: ChartPieOutline, href: '/authentication/profile-lock' }
			]
		},
		{
			name: 'Playground',
			icon: ChartPieOutline,
			children: [
				{ name: 'Stacked', icon: ChartPieOutline, href: '/playground/stacked' },
				{ name: 'Sidebar', icon: ChartPieOutline, href: '/playground/sidebar' }
			]
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
	let dropdowns = Object.fromEntries(
		posts
			.flatMap((post) => [post.name, ...(post.children?.map((child) => child.name) || [])])
			.map((name) => [name, false])
	);
	dropdowns['Layouts'] = true;
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
						<SidebarDropdownWrapper bind:isOpen={dropdowns[name]} label={name} class="pr-3">
							<AngleDownOutline slot="arrowdown" strokeWidth="3.3" size="sm" />
							<AngleUpOutline slot="arrowup" strokeWidth="3.3" size="sm" />
							<svelte:component this={icon} slot="icon" class={iconClass} />

							{#each children as { name: childName, icon: childIcon, children: grandChildren, href: childHref } (childName)}
								{#if grandChildren}
									<SidebarDropdownWrapper
										bind:isOpen={dropdowns[childName]}
										label={childName}
										class="pl-6"
									>
										<AngleDownOutline slot="arrowdown" strokeWidth="3.3" size="sm" />
										<AngleUpOutline slot="arrowup" strokeWidth="3.3" size="sm" />
										<svelte:component this={childIcon} slot="icon" class={iconClass} />

										{#each grandChildren as { name: grandChildName, icon: grandChildIcon, href: grandChildHref } (grandChildName)}
											<SidebarItem
												label={grandChildName}
												href={grandChildHref}
												spanClass="ml-3"
												class="{itemClass} pl-12"
												active={activeMainSidebar === grandChildHref}
											>
												<svelte:component this={grandChildIcon} slot="icon" class={iconClass} />
											</SidebarItem>
										{/each}
									</SidebarDropdownWrapper>
								{:else}
									<SidebarItem
										label={childName}
										href={childHref}
										spanClass="ml-3"
										class="{itemClass} pl-6"
										active={activeMainSidebar === childHref}
									>
										<svelte:component this={childIcon} slot="icon" class={iconClass} />
									</SidebarItem>
								{/if}
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
