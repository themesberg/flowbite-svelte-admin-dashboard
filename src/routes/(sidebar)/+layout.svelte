<script>
	import '../../app.postcss';
	import Navbar from './navbar.svelte';
	import Sidebar from './sidebar.svelte';
</script>

<header
	class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800"
>
	<Navbar />
</header>
<div class="lg:flex">
	<Sidebar />
	<slot />
</div>
