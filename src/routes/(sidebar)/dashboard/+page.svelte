<script lang="ts">
	import ChartWidget from '$lib/widgets/ChartWidget.svelte';
	import type { PageData } from '../$types';
	import GeneralInfo from './GeneralInfo.svelte';
	import Stats from './Stats.svelte';

	export let data: PageData;
	console.log(data);
</script>

<main class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 w-full sm:p-6 p-4">
	<div class="2xl:col-span-2">
		<ChartWidget chartOptions={data} title="$345" subtitle="Sales this week" />
	</div>
	<div class="col-span-1">
		<Stats />
	</div>
</main>
