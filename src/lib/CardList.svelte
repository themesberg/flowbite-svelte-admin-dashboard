<script lang="ts">
  import { Button, Toggle, P, List, Li } from 'flowbite-svelte';
  import { CardWidget } from '$lib';
  import type { CardListProps } from './types';

  let { title, subtitle, buttonLabel = 'Save all', items = [], class: className, ...restProps }: CardListProps = $props();
</script>

<CardWidget {title} class={className} {...restProps}>
  {#if subtitle}
    <P class="text-sm font-normal text-gray-500 dark:text-gray-300">{subtitle}</P>
  {/if}

  <List tag="dl" class="divide-y divide-gray-200 dark:divide-gray-700">
    {#each items as item}
      <Li class="py-4">
        <div class="flex items-center justify-between">
          <div class="flex flex-grow flex-col">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</div>
            <div class="text-base font-normal text-gray-500 dark:text-gray-300">
              {item.subtitle}
            </div>
          </div>
          <Toggle checked={item.active} class="me-0 peer-focus:ring-0" />
        </div>
      </Li>
    {/each}
  </List>
  <Button class="mt-2 w-fit">{buttonLabel}</Button>
</CardWidget>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[CardListProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L422)
## Props
@prop title
@prop subtitle
@prop buttonLabel = 'Save all'
@prop items = []
@prop class: className
@prop ...restProps
-->
