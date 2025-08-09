<script lang="ts">
  import { browser } from '$app/environment';
  import type { ApexOptions } from 'apexcharts';
  import { Chart } from '@flowbite-svelte-plugins/chart';
  import { onMount } from 'svelte';

  type ConfigFunc = (dark: boolean) => ApexOptions;
  interface Props {
    configFunc: ConfigFunc;
    class?: string;
  }
  let { configFunc, class: className }: Props = $props();

  let dark = browser ? document.documentElement.classList.contains('dark') : false;

  let options: ApexOptions = $derived(configFunc(dark));

  function handler(ev: Event) {
    if ('detail' in ev) {
      dark = !!ev.detail;
    }
  }

  onMount(() => {
    document.addEventListener('dark', handler);
    return () => document.removeEventListener('dark', handler);
  });
</script>

<Chart {options} class={className} />

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
Props
## Props
@prop configFunc
@prop class: className
-->
