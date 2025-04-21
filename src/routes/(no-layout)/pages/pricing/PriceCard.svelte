<script lang="ts">
  import { Card, List } from 'flowbite-svelte';
  import type { Snippet } from 'svelte';
  import PriceCardPrice from './PriceCardPrice.svelte';
  interface Props {
    children: Snippet;
    subtitle: Snippet;
    title: string;
    price: string;
    period: string;
  }
  let { children, subtitle, title, price, period = 'month' }: Props = $props();
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
    {@render children()}
  </List>
  <a
    href="#top"
    class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white"
    >Get started</a
  >
</Card>
