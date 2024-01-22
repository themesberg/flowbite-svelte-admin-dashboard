<script lang="ts">
	export let value: string;
	export let period: string = '';
</script>

<div class="flex items-baseline my-8">
	<span class="mr-2 text-5xl font-extrabold">{value}</span>
	{#if period}
		<span class="text-gray-500 dark:text-gray-400">/{period}</span>
	{/if}
</div>
