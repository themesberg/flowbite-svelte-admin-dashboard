<script lang="ts">
  import '../../app.css';
  import Navbar from '../(sidebar)/Navbar.svelte';
  import Sidebar from '../(sidebar)/Sidebar.svelte';
  import type { LayoutProps } from './$types';

  let { children, data }: LayoutProps = $props();
  console.log('data in (sidebar)/+layout', data);
  let drawerHidden = $state(false);
</script>

<header class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
  <Navbar bind:drawerHidden />
</header>
<div class="overflow-hidden lg:flex">
  <Sidebar bind:drawerHidden />
  <div class="relative h-full w-full overflow-y-auto pt-[70px] lg:ml-64">
    {@render children()}
  </div>
</div>
