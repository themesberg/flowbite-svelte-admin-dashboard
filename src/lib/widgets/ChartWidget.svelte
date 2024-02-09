<script lang="ts">
	import { Card, Chart, Heading } from 'flowbite-svelte';
	import type { ApexOptions } from 'apexcharts';
	import LastRange from './LastRange.svelte';

	export let title: string = '';
	export let subtitle: string = '';
	export let chartOptions: ApexOptions;
</script>

<Card size="xl" class="w-full max-w-none">
	<Heading tag="h3" class="text-2xl">{title}</Heading>
	<p>{subtitle}</p>
	<Chart options={chartOptions}></Chart>
	<hr />
	<LastRange />
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let title: string = '';
@prop export let subtitle: string = '';
@prop export let chartOptions: ApexOptions;
-->
