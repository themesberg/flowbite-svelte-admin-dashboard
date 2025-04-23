<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import type { ActivityListProps } from './types';

  let { title = 'Latest Activity', children, actions }: ActivityListProps = $props();
</script>

<Card size="xl" class="p-4 sm:p-6">
  <div class="mb-4 flex items-center justify-between">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    {#if actions}
      {@render actions()}
    {/if}
  </div>
  {@render children()}
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ActivityListProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L389)
## Props
@prop title = 'Latest Activity'
@prop children
@prop actions
-->
