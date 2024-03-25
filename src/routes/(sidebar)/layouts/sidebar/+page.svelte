<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '../../../../lib/dashboard/Dashboard.svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	export let data: PageData;
	
	const path: string = '/layouts/sidebar';
  const description: string = 'Sidebar layout examaple - Flowbite Svelte Admin Dashboard';
  const title: string = 'Flowbite Svelte Admin Dashboard - Sidebar Layout';
  const subtitle: string = 'Sidebar Layout';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="p-4">
	<Dashboard {data} />
</main>
