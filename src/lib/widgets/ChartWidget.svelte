<script lang="ts">
	import { Card, Chart, Heading } from 'flowbite-svelte';
	import type { ApexOptions } from 'apexcharts';
	import LastRange from './LastRange.svelte';

	export let title: string = '';
	export let subtitle: string = '';
	export let chartOptions: ApexOptions;
</script>

<Card size="xl" class="w-full">
	<Heading tag="h3" class="text-2xl">{title}</Heading>
	<p>{subtitle}</p>
	<Chart options={chartOptions}></Chart>
	<hr />
	<LastRange />
</Card>
