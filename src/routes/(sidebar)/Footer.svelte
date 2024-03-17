<script lang="ts">
	import { Card, Frame, type LinkType } from 'flowbite-svelte';
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
		[DiscordSolid, ''],
		[TwitterSolid, ''],
		[GithubSolid, ''],
		[DribbbleSolid, '']
	];
</script>

<Frame
	tag="footer"
	rounded
	shadow
	class="m-4 flex w-auto gap-2 sm:gap-4 sm:p-7 md:max-w-none md:items-center md:justify-between xl:p-8"
>
	<ul class="flex flex-wrap items-center gap-2 sm:gap-4 md:mb-0 xl:gap-6">
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
				<svelte:component this={component} size="md" />
			</a>
		{/each}
	</div>
</Frame>

<p class="mb-8 mt-10 text-center text-sm text-gray-500">
	© 2019-2023 <a href="https://flowbite.com/" class="hover:underline" target="_blank">
		Flowbite.com
	</a>. All rights reserved.
</p>
