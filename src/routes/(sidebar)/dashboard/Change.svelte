<script lang="ts">
	import { ArrowDownOutline, ArrowUpOutline } from 'flowbite-svelte-icons';

	export let value: number;
	export let unit: string = '%';
	export let since: string = 'vs last month';

	const colorUp = 'text-green-500 dark:text-green-400';
	const colorDown = 'text-red-500 dark:text-red-400';

	$: color = value > 0 ? colorUp : value < 0 ? colorDown : '';
</script>

<div class="flex items-center justify-end flex-1 text-sm {color}">
	{#if value > 0}
		<ArrowUpOutline size="xs" />
		{value}{unit}
	{:else if value < 0}
		<ArrowDownOutline size="xs" />
		{Math.abs(value)}{unit}
	{:else}
		--
	{/if}
	<span class="ml-1 text-gray-500">{since}</span>
</div>
