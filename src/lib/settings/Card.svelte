<script lang="ts">
	import { Card, Heading } from 'flowbite-svelte';
	export let title: string;

	let clazz: string = '';
	export { clazz as class };
</script>

<Card size="xl" class={clazz}>
	<Heading tag="h3" class="-ml-0.25 mb-4 mt-px text-xl font-semibold dark:text-white">
		{title}
	</Heading>
	<slot />
</Card>
