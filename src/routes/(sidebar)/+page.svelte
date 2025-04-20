<script lang="ts">
	import Dashboard from '../utils/dashboard/Dashboard.svelte';
	import MetaTag from '../utils/MetaTag.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	const path: string = '';
  const description: string = 'Admin Dashboard example using Flowbite Svelte';
  const title: string = 'Flowbite Svelte Admin Dashboard - Home';
  const subtitle: string = 'Admin Dashboard';
</script>

<MetaTag {path} {description} {title} {subtitle} />
<main class="p-4">
	<Dashboard {data} />
</main>
