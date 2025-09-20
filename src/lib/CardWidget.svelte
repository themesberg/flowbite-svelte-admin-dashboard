<script lang="ts">
  import { Card, Heading, Span } from 'flowbite-svelte';
  import type { CardWidgetProps } from './types';

  let { children, title, subtitle, class: className }: CardWidgetProps = $props();
</script>

<Card size="xl" class="max-w-none shadow-sm {className}">
  <div class="mt-px mb-4 lg:mb-0">
    <Heading tag="h3" class="mb-2 -ml-0.25 text-xl font-semibold dark:text-white">
      {title}
    </Heading>
    {#if subtitle}
      <Span class="text-base font-normal text-gray-500 dark:text-gray-300">
        {subtitle}
      </Span>
    {/if}
  </div>
  {@render children()}
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[CardWidgetProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L429)
## Props
@prop children
@prop title
@prop subtitle
@prop class: className
-->
