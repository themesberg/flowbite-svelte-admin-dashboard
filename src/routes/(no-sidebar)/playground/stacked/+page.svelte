<script lang="ts">
	import Playground from './Playground.svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';

	const path: string = '/playground/stacked';
  const description: string = 'Playground stacked example - Flowbite Svelte Admin Dashboard';
	const metaTitle: string = 'Flowbite Svelte Admin Dashboard - Playground stacked';
  const subtitle: string = 'Playground stacked';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />

<div
	id="main-content"
	class="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto bg-gray-50 dark:bg-gray-900"
>
	<Playground />
</div>
