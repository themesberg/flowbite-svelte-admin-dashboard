<script lang="ts">
  import { CardList } from '$lib';
  import type { NotificationCardProps } from './types';

  let { title = 'Email Notifications', subtitle = 'You can set up Themesberg to get email notifications ', items, class: className = 'p-4 sm:p-6' }: NotificationCardProps = $props();
</script>

<CardList {title} {subtitle} {items} class={className} />

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[NotificationCardProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L434)
## Props
@prop title = 'Email Notifications'
@prop subtitle = 'You can set up Themesberg to get email notifications '
@prop items
@prop class: className = 'p-4 sm:p-6'
-->
