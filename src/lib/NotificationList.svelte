<script lang="ts">
  import { Button, Popover, ToolbarButton } from 'flowbite-svelte';
  import { BellSolid, EyeSolid} from 'flowbite-svelte-icons';
  import { Notification } from '$lib';
  import type { NotificationListProps } from '$lib/types';

  let { notifications }: NotificationListProps = $props();
</script>

<ToolbarButton size="lg" class="-mx-0.5 hover:text-gray-900 dark:hover:text-white">
  <BellSolid size="lg" />
</ToolbarButton>
<Popover class="max-w-sm border-0" trigger="click" defaultClass="p-0" arrow={false} offset={10}>
  {#snippet title()}
    <div class="rounded text-center">Notifications</div>
  {/snippet}
  <div class="bg-50 dark:bg-gray-700">
    {#each notifications as { src, Icon, when, color, content }}
      <Notification href="#" {src} {Icon} {when} {color}>
        {@html content}
      </Notification>
    {/each}
  </div>
  <Button href="/" color={undefined} size="lg" class="w-full gap-2 rounded-none rounded-b bg-gray-50 py-2.5 text-center text-gray-900 hover:bg-gray-100 dark:mt-0 dark:bg-gray-700 dark:text-white">
    <EyeSolid />
    View all
  </Button>
</Popover>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[NotificationListProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L536)
## Props
@prop notifications
-->
