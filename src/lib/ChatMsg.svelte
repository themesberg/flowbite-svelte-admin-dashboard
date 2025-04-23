<script lang="ts">
  import { Avatar, Dropdown, DropdownItem, ToolbarButton } from 'flowbite-svelte';
  import { ChevronDownOutline, DotsHorizontalOutline } from 'flowbite-svelte-icons';
  import type { ChatMsgProps } from './types';

  let { children, avatar = 'https://flowbite.com/docs/images/people/profile-picture-2.jpg', name = 'Michael Gough', timestamp = new Date(), replays = 0, class: className }: ChatMsgProps = $props();
</script>

<article class="mb-5 space-y-3 {className}">
  <footer class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <Avatar size="xs" src={avatar} alt={name} />
      <p class="text-sm font-semibold text-gray-900 dark:text-white">
        {name}
      </p>
      <p class="ms-1 text-sm text-gray-600 dark:text-gray-300">
        <time datetime={timestamp.toDateString()} title={timestamp.toDateString()}>{timestamp.toDateString()}</time>
      </p>
    </div>
    <ToolbarButton class="rounded dark:hover:text-white">
      <DotsHorizontalOutline size="lg" />
      <span class="sr-only">Comment settings</span>
    </ToolbarButton>
    <Dropdown class="w-32" placement="bottom-end">
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Remove</DropdownItem>
      <DropdownItem>Report</DropdownItem>
    </Dropdown>
  </footer>
  <div class="space-y-2 text-gray-900 dark:text-white">
    {@render children()}
  </div>
  {#if replays}
    <a href="/" class="text-primary-700 dark:text-primary-500 inline-flex items-center gap-1 text-xs font-medium sm:text-sm">
      {replays} replies
      <ChevronDownOutline size="lg" />
    </a>
  {/if}
</article>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ChatMsgProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L35)
## Props
@prop children
@prop avatar = 'https:
-->
