<script lang="ts">
  import { Card, List } from 'flowbite-svelte';
  import { PriceCardPrice } from '$lib';
  import type { PriceCardPriceProps } from './types';

  let { children, subtitle, title, price, period = 'month' }: PriceCardPriceProps = $props();
</script>

<Card class="mx-auto max-w-lg p-4 text-gray-900 sm:p-6">
  <h3 class="mb-4 text-2xl font-semibold dark:text-white">{title}</h3>
  {#if subtitle}
    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-300">
      {@render subtitle()}
    </p>
  {/if}
  <PriceCardPrice value={price} {period} />
  <!-- List -->
  <List tag="dl" class="mb-8 space-y-4 text-left">
    {#if children}
      {@render children()}
    {/if}
  </List>
  <a
    href="#top"
    class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white"
    >Get started</a
  >
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[PriceCardPriceProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L163)
## Props
@prop children
@prop subtitle
@prop title
@prop price
@prop period = 'month'
-->
