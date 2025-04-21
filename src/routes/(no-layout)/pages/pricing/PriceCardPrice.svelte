<script lang="ts">
	interface Props {
		value: string;
		period: string;
	}
	let { value, period }: Props = $props();
</script>

<div class="my-8 flex items-baseline">
	<span class="mr-2 text-5xl font-extrabold dark:text-white">{value}</span>
	{#if period}
		<span class="text-gray-500 dark:text-gray-300">/{period}</span>
	{/if}
</div>
