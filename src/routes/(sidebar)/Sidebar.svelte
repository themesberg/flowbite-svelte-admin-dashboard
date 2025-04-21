<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

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
		TableColumnSolid, GridSolid
	} from 'flowbite-svelte-icons';

	interface Props {
		drawerHidden: boolean;
	}
	let { drawerHidden = $bindable(false) }:Props = $props();

	const closeDrawer = () => {
		drawerHidden = true;
	};

	let iconClass =
		'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white';
	let itemClass =
		'flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 w-full';
	let groupClass = 'pt-2 space-y-2 mb-3';

	let mainSidebarUrl = $derived(page.url.pathname);
	let activeMainSidebar: string;

	afterNavigate((navigation) => {
		// this fixes https://github.com/themesberg/flowbite-svelte/issues/364
		document.getElementById('svelte')?.scrollTo({ top: 0 });
		closeDrawer();

		activeMainSidebar = navigation.to?.url.pathname ?? '';
	});

	let posts = [
		{ name: 'Dashboard', Icon: ChartPieOutline, href: '/dashboard' },
		{
			name: 'Layouts',
			Icon: TableColumnSolid,
			children: {
				Stacked: '/layouts/stacked',
				Sidebar: '/layouts/sidebar'
			}
		},
		{
			name: 'CRUD',
			Icon: RectangleListSolid,
			children: {
				Products: '/crud/products',
				Users: '/crud/users'
			}
		},
		{ name: 'Settings', Icon: CogOutline, href: '/settings' },
		{
			name: 'Pages',
			Icon: FileChartBarSolid,
			children: {
				Pricing: '/pages/pricing',
				Maintenance: '/errors/400',
				'404 not found': '/errors/404',
				'500 server error': '/errors/500'
			}
		},
		{
			name: 'Authenication',
			Icon: LockSolid,
			children: {
				'Sign in': '/authentication/sign-in',
				'Sign up': '/authentication/sign-up',
				'Forgot password': '/authentication/forgot-password',
				'Reset password': '/authentication/reset-password',
				'Profile lock': '/authentication/profile-lock'
			}
		},
		{
			name: 'Playground',
			Icon: WandMagicSparklesOutline,
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
			Icon: GithubSolid
		},
		{
			label: 'Flowbite Svelte',
			href: 'https://flowbite-svelte.com/docs/pages/quickstart',
			Icon: ClipboardListSolid
		},
		{
			label: 'Components',
			href: 'https://flowbite-svelte.com/docs/components/accordion',
			Icon: LayersSolid
		},
		{
			label: 'Support',
			href: 'https://github.com/themesberg/flowbite-svelte-admin-dashboard/issues',
			Icon: LifeSaverSolid
		}
	];
	let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<Sidebar
	activeUrl={mainSidebarUrl}
	activeClass="bg-gray-100 dark:bg-gray-700"
	class="{drawerHidden ? 'hidden' : ''} fixed inset-0 z-30 flex-none h-full w-64 lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-16 lg:block"
>
	<h4 class="sr-only">Main menu</h4>
	<SidebarWrapper
		divClass="overflow-y-auto px-3 pt-20 lg:pt-5 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-4rem)] lg:block dark:bg-gray-800 lg:me-0 lg:sticky top-2"
	>
			<SidebarGroup class={groupClass}>
				{#each posts as { name, Icon, children, href } (name)}
					{#if children}
						<SidebarDropdownWrapper label={name} class="pr-3">
							{#snippet arrowdown()}
							<AngleDownOutline strokeWidth="3.3" size="sm" />
							{/snippet}
							{#snippet arrowup()}
							<AngleUpOutline strokeWidth="3.3" size="sm" />
							{/snippet}
							{#snippet icon()}
								<Icon class={iconClass} />
							{/snippet}
							{#each Object.entries(children) as [title, href]}
								<SidebarItem
									label={title}
									{href}
									spanClass="ml-9"
									class={itemClass}
									aClass="w-full"
								/>
							{/each}
						</SidebarDropdownWrapper>
					{:else}
						<SidebarItem
							label={name}
							{href}
							spanClass="ml-3"
							class={itemClass}
							aClass="w-full p-0 py-2"
						>
						{#snippet icon()}
						<Icon class={iconClass} />
					{/snippet}
						</SidebarItem>
					{/if}
				{/each}
				<SidebarItem label="About" spanClass="flex-1 ms-3 whitespace-nowrap" href="/about">
					{#snippet icon()}
						<GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white" />
					{/snippet}
				</SidebarItem>
			</SidebarGroup>
			<SidebarGroup class={groupClass}>
				{#each links as { label, href, Icon } (label)}
					<SidebarItem
						{label}
						{href}
						spanClass="ml-3"
						class={itemClass}
						target="_blank"
					>
					{#snippet icon()}
						<Icon class={iconClass} />
					{/snippet}
					</SidebarItem>
				{/each}
			</SidebarGroup>
			
	</SidebarWrapper>
</Sidebar>

<div
	hidden={drawerHidden}
	class="fixed inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60"
	onclick={closeDrawer}
	onkeydown={closeDrawer}
	role="presentation"
></div>
