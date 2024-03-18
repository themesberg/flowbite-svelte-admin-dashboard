<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '../../lib/dashboard/Dashboard.svelte';
	export let data: PageData;
</script>

<Dashboard {data} />
