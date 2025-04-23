<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import type { EmptyCardProps } from './types';

  let { size, class: className, ...restProps }: EmptyCardProps = $props();
</script>

<Card {size} class={className} {...restProps}>
  <div class="rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600">
    <h3>Card header</h3>
  </div>
  <div class="h-full rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600">
    <h3>Card body</h3>
  </div>
  <div class="rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600">
    <h3>Card footer</h3>
  </div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[EmptyCardProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L231)
## Props
@prop size
@prop class: className
@prop ...restProps
-->
