<script>
	import '../app.postcss';
	import { DarkMode } from 'flowbite-svelte';
</script>

<div class="p-8">
	<DarkMode />
	<slot />
</div>
