<script>
	import modeobserver from '$lib/modeobserver';
	import { onMount } from 'svelte';
	import { inject } from '@vercel/analytics';
	inject()

	onMount(modeobserver);
</script>

<slot />
