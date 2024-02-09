<script>
	import { MegaMenu, ToolbarButton } from 'flowbite-svelte';
	import {
		ArrowRightToBracketOutline,
		GridSolid,
		InboxSolid,
		ProfileCardOutline,
		UsersGroupSolid,
		UserSettingsSolid
	} from 'flowbite-svelte-icons';

	const menu = [
		{ name: 'About us', href: '/about', icon: UsersGroupSolid },
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
		class="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
	>
		<svelte:component
			this={item.icon}
			class="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
		/>
		<div class="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
	</a>
</MegaMenu>
