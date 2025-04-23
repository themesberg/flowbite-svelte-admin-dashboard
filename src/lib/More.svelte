<script lang="ts">
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
  import { twMerge } from 'tailwind-merge';
  import type { MoreProps } from './types';

  let { title, href = '#', flat, class: className }: MoreProps = $props();

  let aClass = $derived(
    twMerge(
      'inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500',
      flat ? '' : 'rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 uppercase',
      className
    )
  );
</script>

<div class="flex-shrink-0">
  <a {href} class={aClass}>
    {title}
    <ChevronRightOutline size="md" />
  </a>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[MoreProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L60)
## Props
@prop title
@prop href = '#'
@prop flat
@prop class: className
-->
