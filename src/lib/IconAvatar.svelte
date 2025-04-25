<script lang="ts">
  import { imagesPath } from './variables';
  import { Avatar, Indicator } from 'flowbite-svelte';
  import type { IconAvatarProps } from './types';

  let { children, src, color = 'primary' }: IconAvatarProps = $props();
</script>

<Avatar class="h-11 w-11">
  <img alt="" src={imagesPath(src, 'users')} class="rounded-full" />
  <Indicator placement="bottom-right" class="h-5 w-5 translate-y-0" {color}>
    {@render children()}
  </Indicator>
</Avatar>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[IconAvatarProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L44)
## Props
@prop children
@prop src
@prop color = 'primary'
-->
