<script lang="ts">
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
	import { twMerge } from 'tailwind-merge';

	interface Props{
		title?: string;
		href?: string;
		flat?: boolean;
	}
	let { title, href = '#', flat }:Props = $props();

	let aClass = $derived(twMerge(
		'inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500',
		flat ? '' : 'rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 uppercase'
	));
</script>

<div class="flex-shrink-0">
	<a {href} class={aClass}>
		{title}
		<ChevronRightOutline size="md" />
	</a>
</div>
