<script lang="ts">
  import { Change } from '$lib';
  import type { SmallPanelProps } from './types';

  let { IconOption, title, subtitle, change = 0 }: SmallPanelProps = $props();
</script>

<div>
  {#if IconOption?.icon}
    <IconOption.icon size={IconOption.size} />
  {/if}
  <h3 class="text-gray-500 dark:text-gray-300">{title}</h3>
  <h4 class="text-xl font-bold dark:text-white">{subtitle}</h4>
  {#if change}
    <Change value={change} size="sm" equalHeight />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[SmallPanelProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L514)
## Props
@prop IconOption
@prop title
@prop subtitle
@prop change = 0
-->
