<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import PriceCardListItem from './PriceCardListItem.svelte';
	import PriceCardPrice from './PriceCardPrice.svelte';

	export let title: string;
	export let price: string;
	export let period: string = 'month';
</script>

<Card size="none" class="max-w-lg mx-auto text-gray-900" padding="xl">
	<h3 class="mb-4 text-2xl font-semibold">{title}</h3>
	{#if $$slots.subtitle}
		<p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
			<slot name="subtitle" />
		</p>
	{/if}
	<PriceCardPrice value={price} {period} />
	<!-- List -->
	<ul role="list" class="mb-8 space-y-4 text-left">
		<slot Item={PriceCardListItem} />
	</ul>
	<a
		href="#top"
		class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
		>Get started</a
	>
</Card>
