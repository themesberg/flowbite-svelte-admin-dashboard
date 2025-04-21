<script lang="ts">
  import { imagesPath } from './variables';
  import { Avatar, Dropdown, DropdownHeader, DropdownItem } from 'flowbite-svelte';
  import type { UserMenuProps } from './types';

  let { name, avatar, email, menuItems, children }: UserMenuProps = $props();
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
  <Avatar size="sm" src={imagesPath(avatar, 'users')} tabindex={0} />
</button>
<Dropdown placement="bottom-end" simple>
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
[UserMenuProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L134)
## Props
@prop name
@prop avatar
@prop email
@prop menuItems
@prop children
-->
