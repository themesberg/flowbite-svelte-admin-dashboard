<script lang="ts">
	import { Card, Chart } from 'flowbite-svelte';
	import options from '$lib/graphs/thinmultibars';
	import SmallPanel from './SmallPanel.svelte';
	import { DesktopPcOutline, MobilePhoneOutline, TabletOutline } from 'flowbite-svelte-icons';
</script>

<Card size="xl" class="h-fit">
	<div
		class="items-center justify-between pb-4 border-b border-gray-200 sm:flex dark:border-gray-700"
	>
		<div class="w-full mb-4 sm:mb-0">
			<h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Traffic by device</h3>
			<span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white"
				>Desktop</span
			>
		</div>
	</div>
	<Chart {options}></Chart>
	<div class="flex items-center justify-between pt-4 lg:justify-evenly sm:pt-6">
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
