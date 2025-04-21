<script lang="ts">
	import type { Component	} from 'svelte';
	import { MegaMenu, ToolbarButton } from 'flowbite-svelte';
	import { GridSolid } from 'flowbite-svelte-icons';

	type MenuItem = {
		name: string;
		href: string;
		icon: Component;
	}
	interface Props{
		open?: boolean;
		menu: MenuItem[];
	}
	
	let { open = $bindable(), menu }: Props = $props();
</script>

<ToolbarButton size="lg" class="-mx-0.5 hover:text-gray-900 dark:hover:text-white">
	<GridSolid size="lg" />
</ToolbarButton>
<MegaMenu items={menu}>
	{#snippet children({ item })}
	<a
		href={item.href}
		class="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
	>
		<item.icon
			class="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-300"
		/>
		<div class="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
	</a>
	{/snippet}
</MegaMenu>
