<script lang="ts">
	import {IconAvatar} from '$lib';
	import type { Component, Snippet } from 'svelte';
	import type { IndicatorProps } from 'flowbite-svelte';

	interface Props{
		children: Snippet;
		src: string;
		Icon?: Component;
		when?: string;
		href?: string;
		color: IndicatorProps['color'];
	}

	let { children, src, Icon, when, href, color = 'gray' }:Props = $props();
</script>

<a
	{href}
	class="flex gap-2 border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
>
	<IconAvatar {src} {color}>
		{#if Icon}
			<Icon size="xs" class="text-gray-50 dark:text-white" />
		{/if}
	</IconAvatar>
	<div class="w-full pl-3">
		<div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-300">
			{@render children()}
		</div>
		{#if when}
			<div class="text-xs font-medium text-primary-700 dark:text-primary-400">{when}</div>
		{/if}
	</div>
</a>
