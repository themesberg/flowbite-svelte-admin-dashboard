<script lang="ts">
	import { Card, Heading } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		title: string;
		subtitle?: string;
		class?: string;
	}
	let { children, title, subtitle, class:className }:Props = $props();
</script>

<Card size="xl" class="max-w-none shadow-sm {className}">
	<div class="mb-4 mt-px lg:mb-0">
		<Heading tag="h3" class="-ml-0.25 mb-2 text-xl font-semibold dark:text-white">
			{title}
		</Heading>
		{#if subtitle}
			<span class="text-base font-normal text-gray-500 dark:text-gray-400">
				{subtitle}
			</span>
		{/if}
	</div>
	{@render children()}
</Card>
