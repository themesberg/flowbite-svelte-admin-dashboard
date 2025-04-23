<script lang="ts">
  import { Li } from 'flowbite-svelte';
  import { CheckOutline } from 'flowbite-svelte-icons';
  import type { PriceCardListItemProps } from './types';

  let { icon, children }: PriceCardListItemProps = $props();
</script>

<Li {icon} class="flex items-center space-x-3">
  {#if !icon}
    <CheckOutline size="md" class="text-green-500 dark:text-green-400" />
  {/if}
  <span class="dark:text-white">
    {@render children()}
  </span>
</Li>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[PriceCardListItemProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L171)
## Props
@prop icon
@prop children
-->
