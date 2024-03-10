<script lang="ts">
	import type { SizeType } from 'flowbite-svelte';
	import { AngleDownOutline, ArrowUpOutline } from 'flowbite-svelte-icons';
	import { twMerge } from 'tailwind-merge';
	export let value: number;
	export let unit: string = '%';
	export let since: string = 'vs last month';

	const colorUp = 'text-green-500 dark:text-green-400';
	const colorDown = 'text-red-500 dark:text-red-400';

	export let size: SizeType = 'md';
	export let equalHeight: boolean = false;

	const textSize = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl'
	};

	const spanTextSize = {
		xs: 'text-sm',
		sm: 'text-base',
		md: 'text-lg',
		lg: 'text-xl',
		xl: 'text-2xl'
	};

	let divClass: string;
	$: divClass = twMerge(
		'flex flex-1 items-center gap-1',

		textSize[size],
		$$props.class
	);

	$: color = value > 0 ? colorUp : value < 0 ? colorDown : '';
</script>

<div class={divClass}>
	<span class={twMerge('inline-flex items-center', color)}>
		{#if value > 0}
			<ArrowUpOutline {size} />
			{value}{unit}
		{:else if value < 0}
			<AngleDownOutline {size} />
			{Math.abs(value)}{unit}
		{:else}
			--
		{/if}
	</span>
	{#if equalHeight}
		<span>{since}</span>
	{:else}
		<span class={spanTextSize[size]}>{since}</span>
	{/if}
</div>
