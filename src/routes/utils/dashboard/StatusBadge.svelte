<script lang="ts">
	import { Badge } from 'flowbite-svelte';
	import type { BadgeProps } from 'flowbite-svelte';

	interface Props {
		state: keyof typeof states;
		dark?: boolean;
	}
  let { state, dark }: Props = $props();

	const states = {
		completed: 'Completed',
		cancelled: 'Canceled',
		inreview: 'In review',
		inprogress: 'In progress'
	};

	const colors: Record<string, BadgeProps['color']> = {
		completed: 'green',
		cancelled: 'red',
		inreview: 'yellow',
		inprogress: 'purple'
	};
</script>

<Badge color={colors[state] ?? 'gray'} border={dark}>{states[state] ?? 'Unknown'}</Badge>
