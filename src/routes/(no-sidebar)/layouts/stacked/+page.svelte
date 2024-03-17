<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '$lib/dashboard/Dashboard.svelte';
	export let data: PageData;
</script>

<main class="py-4">
	<Dashboard {data} />
</main>
