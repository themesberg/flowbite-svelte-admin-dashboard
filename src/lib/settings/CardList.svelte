<script lang="ts">
	import { Button, Card, Heading } from 'flowbite-svelte';

	export let title: string;
	export let subtitle: string = '';
	export let buttonLabel: string = 'Save all';

	export let items: any[] = [];
</script>

<Card size="xl" {...$$restProps}>
	<Heading tag="h3" class="text-xl tracking-wide font-semibold">{title}</Heading>
	{#if subtitle}
		<p class="text-sm font-normal text-gray-500 dark:text-gray-400">{subtitle}</p>
	{/if}

	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		{#each items as item}
			<li class="py-4">
				<slot {item} />
			</li>
		{/each}
	</ul>
	<Button class="w-fit mt-2">{buttonLabel}</Button>
</Card>
