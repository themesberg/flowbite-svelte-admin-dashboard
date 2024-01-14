<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '../../../(sidebar)/dashboard/+page.svelte';
	export let data: PageData;
</script>

<Dashboard {data} />
