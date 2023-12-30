<script>
	import { MegaMenu, ToolbarButton } from 'flowbite-svelte';
	import {
		ArrowRightToBracketOutline,
		GridSolid,
		InboxSolid,
		ProfileCardOutline,
		UserGroupSolid,
		UserSettingsSolid
	} from 'flowbite-svelte-icons';

	const menu = [
		{ name: 'About us', href: '/about', icon: UserGroupSolid },
		{ name: 'Profile', href: '/profile', icon: ProfileCardOutline },
		{ name: 'Settings', href: '/settings', icon: UserSettingsSolid },
		{ name: 'Inbox', href: '/inbox', icon: InboxSolid },
		{ name: 'Logout', href: '/logout', icon: ArrowRightToBracketOutline }
	];
</script>

<ToolbarButton size="lg"><GridSolid /></ToolbarButton>
<MegaMenu items={menu} let:item>
	<a
		href={item.href}
		class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
	>
		<svelte:component
			this={item.icon}
			class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
		/>
		<div class="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
	</a>
</MegaMenu>
