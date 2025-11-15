<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem } from 'flowbite-svelte';
  import type { UserMenuProps } from './types';

  let { name, avatar, email, menuItems, children, placement = 'bottom-end' }: UserMenuProps = $props();
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
  <Avatar size="sm" src={avatar} tabindex={0} />
</button>
<Dropdown {placement} simple>
  <DropdownHeader>
    <span class="block text-sm">{name}</span>
    <span class="block truncate text-sm font-medium">{email}</span>
  </DropdownHeader>
  {#each menuItems as menu}
    <DropdownItem>{menu}</DropdownItem>
  {/each}
  {#if children}
    {@render children()}
  {/if}
</Dropdown>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[UserMenuProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L125)
## Props
@prop name
@prop avatar
@prop email
@prop menuItems
@prop children
@prop placement = 'bottom-end'
-->
