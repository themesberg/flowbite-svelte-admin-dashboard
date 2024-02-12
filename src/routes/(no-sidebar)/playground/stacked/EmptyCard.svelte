<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { twMerge } from 'tailwind-merge';

	export let bodyClass = '';
</script>

<Card {...$$restProps}>
	<div
		class="rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600"
	>
		<h3>Card header</h3>
	</div>
	<div
		class={twMerge(
			'h-32 rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600',
			bodyClass
		)}
	>
		<h3>Card body</h3>
	</div>
	<div
		class="rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600"
	>
		<h3>Card footer</h3>
	</div>
</Card>
