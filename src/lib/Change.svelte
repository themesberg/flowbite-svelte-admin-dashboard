<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { ChangeProps } from './types';

  let { value = 0, unit = '%', since = 'vs last month', size = 'md', equalHeight = false, class: className }: ChangeProps = $props();

  const colorUp = 'text-green-500 dark:text-green-400';
  const colorDown = 'text-red-500 dark:text-red-400';
  const textSize = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const spanTextSize = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  let divClass: string = $derived(twMerge(textSize[size], className));
  let color: string = $derived(value > 0 ? colorUp : value < 0 ? colorDown : '');
</script>

<div class={divClass}>
  <span class={color}>
    {#if value > 0}
      <span class="text-base leading-4">↑</span>{value}{unit}
    {:else if value < 0}
      <span class="text-base leading-4">↓</span>{Math.abs(value)}{unit}
    {:else}
      --
    {/if}
  </span>&nbsp;
  {#if equalHeight}
    <span class="text-gray-300 dark:text-gray-300">{since}</span>
  {:else}
    <span class="{spanTextSize[size]} text-gray-300 dark:text-gray-300">{since}</span>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ChangeProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L17)
## Props
@prop value = 0
@prop unit = '%'
@prop since = 'vs last month'
@prop size = 'md'
@prop equalHeight = false
@prop class: className
-->
