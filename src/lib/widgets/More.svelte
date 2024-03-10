<script lang="ts">
	import { ChevronRightOutline } from 'flowbite-svelte-icons';

	export let title: string = '';
	export let href: string = '#';
</script>

<div class="flex-shrink-0">
	<a
		{href}
		class="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
	>
		{title}
		<ChevronRightOutline size="md" />
	</a>
</div>
