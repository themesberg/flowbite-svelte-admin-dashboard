<script>
	import '../../app.postcss';
	import Navbar from './navbar.svelte';
	import Sidebar from './sidebar.svelte';
</script>

<Navbar />
<div class="lg:flex">
	<Sidebar />

	<slot />
</div>
