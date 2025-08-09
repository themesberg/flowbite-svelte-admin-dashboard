<script lang="ts">
  import { Button, List, Li } from 'flowbite-svelte';
  import { CardWidget } from '$lib';
  import type { SessionProps } from './types';

  let { seeMorehref, sessions }: SessionProps = $props();
</script>

<CardWidget title="Sessions" class="max-w-none p-4 sm:p-6">
  <List tag="dl" class="divide-y divide-gray-200 dark:divide-gray-700">
    {#each sessions as { ipaddress, device, href, btnName, IconOption }}
      <Li class="py-4">
        <div class="flex items-center space-x-4">
          {#if IconOption}
            <IconOption.icon size={IconOption.size ?? 'lg'} class={IconOption.iconClass ?? 'text-gray-900 dark:text-white'} />
          {/if}
          <div class="min-w-0 flex-1">
            <p class="truncate text-base font-semibold text-gray-900 dark:text-white">{ipaddress}</p>
            <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-300">{device}</p>
          </div>
          {#if btnName}
            <Button {href} class="px-3 py-2 dark:text-gray-300 dark:hover:text-white" color="light">{btnName}</Button>
          {/if}
        </div>
      </Li>
    {/each}
  </List>
  {#if seeMorehref}
    <Button class="w-fit" href={seeMorehref}>See more</Button>
  {/if}
</CardWidget>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[SessionProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L529)
## Props
@prop seeMorehref
@prop sessions
-->
