<script lang="ts">
	import { Avatar, Dropdown, DropdownItem, ToolbarButton } from 'flowbite-svelte';
	import {
		ChevronDownOutline,
		DotsHorizontalOutline
	} from 'flowbite-svelte-icons';
	import type { Snippet } from 'svelte';
  interface Props{
		children: Snippet;
		avatar?: string;
		name?: string;
		timestamp?: Date;
		replays?: number;
		class?: string
	}
	let {children, avatar = 'https://flowbite.com/docs/images/people/profile-picture-2.jpg', name = 'Michael Gough', timestamp= new Date(), replays = 0, class:className }:Props = $props();
</script>

<article class="mb-5 space-y-3 {className}">
	<footer class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<Avatar size="xs" src={avatar} alt={name} />
			<p class="text-sm font-semibold text-gray-900 dark:text-white">
				{name}
			</p>
			<p class="ms-1 text-sm text-gray-600 dark:text-gray-300">
				<time datetime={timestamp.toDateString()} title={timestamp.toDateString()}
					>{timestamp.toDateString()}</time
				>
			</p>
		</div>
		<ToolbarButton class="rounded dark:hover:text-white">
			<DotsHorizontalOutline size="lg" />
			<span class="sr-only">Comment settings</span>
		</ToolbarButton>
		<Dropdown class="w-32" placement="bottom-end">
			<DropdownItem>Edit</DropdownItem>
			<DropdownItem>Remove</DropdownItem>
			<DropdownItem>Report</DropdownItem>
		</Dropdown>
	</footer>
	<div class="space-y-2 text-gray-900 dark:text-white">
		{@render children()}
	</div>
	{#if replays}
		<a
			href="/"
			class="inline-flex items-center gap-1 text-xs font-medium text-primary-700 dark:text-primary-500 sm:text-sm"
		>
			{replays} replies
			<ChevronDownOutline size="lg" />
		</a>
	{/if}
</article>
