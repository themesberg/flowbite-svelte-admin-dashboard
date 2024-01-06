<script lang="ts">
	import ChartWidget from '$lib/widgets/ChartWidget.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
	console.log(data);
</script>

<main class="relative w-full h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
	<ChartWidget chartOptions={data} title="$345" subtitle="Sales this week" />
</main>
