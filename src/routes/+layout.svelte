<script lang="ts">
  import type { LayoutProps } from './$types';
  import modeobserver from './utils/modeobserver';
  import { onMount } from 'svelte';
  import { Runatics } from 'runatics';

  let { children, data }: LayoutProps = $props();
  const analyticsId = data.ANALYTICS_ID;

  onMount(modeobserver);
</script>

<Runatics {analyticsId} />
{@render children()}
