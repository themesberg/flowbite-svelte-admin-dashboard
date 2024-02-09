<script lang="ts">
	import { Card, Chart } from 'flowbite-svelte';
	import options from '$lib/graphs/thinmultibars';
	import SmallPanel from './SmallPanel.svelte';
	import { DesktopPcOutline, MobilePhoneOutline, TabletOutline } from 'flowbite-svelte-icons';
</script>

<Card size="xl" class="h-fit">
	<div
		class="items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex"
	>
		<div class="mb-4 w-full sm:mb-0">
			<h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Traffic by device</h3>
			<span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl"
				>Desktop</span
			>
		</div>
	</div>
	<Chart {options}></Chart>
	<div class="flex items-center justify-between pt-4 sm:pt-6 lg:justify-evenly">
		<SmallPanel title="Desktop" subtitle="234k" change={4}>
			<DesktopPcOutline slot="icon" />
		</SmallPanel>
		<SmallPanel title="Phone" subtitle="94k" change={-1}>
			<MobilePhoneOutline slot="icon" />
		</SmallPanel>
		<SmallPanel title="Tablet" subtitle="16k" change={-0.6}>
			<TabletOutline slot="icon" />
		</SmallPanel>
	</div>
</Card>
