<script lang="ts">
	import { imagesPath } from './variables';
	import type { Snippet } from 'svelte';
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';

	interface Props{
		name: string;
		avatar: string;
		email: string;
		menuItems: string[];
		children?: Snippet;
	}
	let { name, avatar, email, menuItems, children }:Props = $props();
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src={imagesPath(avatar, 'users')} tabindex={0} />
</button>
<Dropdown placement="bottom-end" simple>
	<DropdownHeader>
		<span class="block text-sm">{name}</span>
		<span class="block truncate text-sm font-medium">{email}</span>
	</DropdownHeader>
	{#each menuItems as menu}
		<DropdownItem>{menu}</DropdownItem>
	{/each}
	{#if children}
    {@render children()}
	{/if}
</Dropdown>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let id: number = 0;
@prop export let name: string = '';
@prop export let avatar: string = '';
@prop export let email: string = '';
@prop export let biography: string = '';
@prop export let position: string = '';
@prop export let country: string = '';
@prop export let status: string = '';
-->
