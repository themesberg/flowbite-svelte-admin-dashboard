<script lang="ts">
  import { MegaMenu, ToolbarButton } from 'flowbite-svelte';
  import { GridSolid } from 'flowbite-svelte-icons';
  import type { AppsMenuProps } from './types';

  let { open = $bindable(), menu }: AppsMenuProps = $props();
</script>

<ToolbarButton size="lg" class="-mx-0.5 hover:text-gray-900 dark:hover:text-white">
  <GridSolid size="lg" />
</ToolbarButton>
<MegaMenu items={menu}>
  {#snippet children({ item })}
    <a href={item.href} class="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
      <item.icon class="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-300" />
      <div class="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
    </a>
  {/snippet}
</MegaMenu>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[AppsMenuProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L12)
## Props
@prop open = $bindable()
@prop menu
-->
