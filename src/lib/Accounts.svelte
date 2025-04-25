<script lang="ts">
  import { imagesPath } from '$lib';
  import { Avatar, Button, Card, Heading, List, Li } from 'flowbite-svelte';
  // import Users from '../../data/users.json';
  import type { AccountsProps } from './types';

  let { children, users, title = 'Other accounts', headingTag = 'h3', headingClass = "text-xl font-semibold tracking-wide", listClass = "divide-y divide-gray-200 dark:divide-gray-700", liClass = "flex items-center justify-between space-x-4 py-4" }: AccountsProps = $props();
</script>

<Card size="xl" class="max-w-none p-4 sm:p-6">
  {#if title}
  <Heading tag={headingTag} class={headingClass}>{title}</Heading>
  {/if}
  <List tag="dl" class={listClass}>
    {#each users as { avatar, name, country, status }}
      <Li class={liClass}>
        <div class="flex items-start space-x-4">
          <Avatar src={imagesPath(avatar, 'users')} size="xs" class="mt-1" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-base font-semibold text-gray-900 dark:text-white">
              {name}
            </p>
            <p class="text-primary-700 dark:text-primary-500 truncate text-sm font-normal">
              {country}
            </p>
            <p class="mt-1 text-xs font-medium text-gray-500 dark:text-gray-300">
              Last seen: {Math.ceil(Math.random() * 10)} min ago
            </p>
          </div>
        </div>
        {#if status === 'Active'}
          <Button class="px-3 py-2" color="alternative">Disconnect</Button>
        {:else}
          <Button class="px-3 py-2">Connect</Button>
        {/if}
      </Li>
    {/each}
    </List>
    {#if children}
    {@render children()}
    {/if}
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[AccountsProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L553)
## Props
@prop children
@prop users
@prop title = 'Other accounts'
@prop headingTag = 'h3'
@prop headingClass = "text-xl font-semibold tracking-wide"
@prop listClass = "divide-y divide-gray-200 dark:divide-gray-700"
@prop liClass = "flex items-center justify-between space-x-4 py-4"
-->
