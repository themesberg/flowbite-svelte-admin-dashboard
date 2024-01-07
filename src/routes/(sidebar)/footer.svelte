<script lang="ts">
	import { Card, type LinkType } from 'flowbite-svelte';
	import {
		DiscordSolid,
		DribbbleSolid,
		FacebookSolid,
		GithubSolid,
		TwitterSolid
	} from 'flowbite-svelte-icons';
	import type { ComponentType } from 'svelte';

	const links: LinkType[] = [
		{ name: 'Terms and conditions', href: '#' },
		{ name: 'Privacy Policy', href: '#' },
		{ name: 'Licensing', href: '#' },
		{ name: 'Cookie Policy', href: '#' },
		{ name: 'Contact', href: '#' }
	];

	const brands: [ComponentType, string][] = [
		[FacebookSolid, ''],
		[TwitterSolid, ''],
		[GithubSolid, ''],
		[DribbbleSolid, ''],
		[DiscordSolid, '']
	];
</script>

<Card
	size=""
	horizontal
	class="w-full md:items-center md:justify-between md:max-w-none my-4 {$$props.class ?? ''}"
>
	<ul class="flex flex-wrap items-center mb-6 space-y-1 md:mb-0 gap-4 md:gap-6">
		{#each links as { name, href }}
			<li>
				<a {href} class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">
					{name}
				</a>
			</li>
		{/each}
	</ul>
	<div class="flex space-x-6 sm:justify-center">
		{#each brands as [component, href]}
			<a {href} class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
				<svelte:component this={component} size="sm" />
			</a>
		{/each}
	</div>
</Card>
