<script lang="ts">
  import { Badge } from 'flowbite-svelte';
  import type { BadgeProps } from 'flowbite-svelte';
  import { type StatusBadgeProps, STATES } from './types';

  let { state, dark }: StatusBadgeProps = $props();

  const states = STATES;

  const colors: Record<string, BadgeProps['color']> = {
    completed: 'green',
    cancelled: 'red',
    inreview: 'yellow',
    inprogress: 'purple'
  };
</script>

<Badge color={colors[state] ?? 'gray'} border={dark}>{states[state] ?? 'Unknown'}</Badge>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[StatusBadgeProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L130)
## Props
@prop state
@prop dark
-->
