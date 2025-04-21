<script lang="ts">
	import {Change} from '$lib';
	import type { Snippet } from 'svelte';
  interface Props{
    icon?: Snippet;
		title?: string;
		subtitle?: string;
		change?: number;
	}
	let { icon, title, subtitle, change = 0 }:Props = $props();
</script>

<div>
	{#if icon}
	{@render icon()}
	{/if}
	<h3 class="text-gray-500 dark:text-gray-300">{title}</h3>
	<h4 class="text-xl font-bold dark:text-white">{subtitle}</h4>
	{#if change}
		<Change value={change} size="sm" equalHeight />
	{/if}
</div>
