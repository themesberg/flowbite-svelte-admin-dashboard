<script lang="ts">
  import type { PriceCardPriceProps } from './types';

  let { value, period }: PriceCardPriceProps = $props();
</script>

<div class="my-8 flex items-baseline">
  <span class="mr-2 text-5xl font-extrabold dark:text-white">{value}</span>
  {#if period}
    <span class="text-gray-500 dark:text-gray-300">/{period}</span>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[PriceCardPriceProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L163)
## Props
@prop value
@prop period
-->
