<script lang="ts">
	import ChartWidget from '$lib/widgets/ChartWidget.svelte';
	import { Card, Chart } from 'flowbite-svelte';
	import type { PageData } from '../$types';
	import Stats from './Stats.svelte';
	import thickbars from '$lib/graphs/thickbars';
	import thinfillbars from '$lib/graphs/thinfillbars';

	import Change from './Change.svelte';
	import Footer from '../footer.svelte';
	import Chat from './Chat.svelte';
	import DesktopPc from './DesktopPc.svelte';

	export let data: PageData;
</script>

<div class=" p-2 sm:p-4">
	<main class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 w-full">
		<div class="2xl:col-span-2">
			<ChartWidget chartOptions={data} title="$345" subtitle="Sales this week" />
		</div>
		<div class="col-span-1">
			<Stats />
		</div>
		<div class="col-span-1">
			<Card horizontal class="items-center justify-between" size="lg">
				<div>
					<p>New products</p>
					<p class="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
						2,340
					</p>
					<Change value={12.5} since="Since last month" />
				</div>
				<Chart options={thickbars} />
			</Card>
		</div>
		<div class="col-span-1">
			<Card horizontal class="items-center justify-between" size="lg">
				<div>
					<p>Users</p>
					<p class="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
						4,420
					</p>
					<Change value={-3.4} since="Since last month" />
				</div>
				<Chart options={thinfillbars} />
			</Card>
		</div>
		<div class="col-span-1">
			<Card horizontal class="items-center justify-between" size="lg">
				<div>
					<p>Users</p>
					<p class="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
						4,420
					</p>
					<Change value={-3.4} since="Since last month" />
				</div>
				<Chart
					options={{
						...thinfillbars,
						plotOptions: {
							...thinfillbars.plotOptions,
							bar: { ...thinfillbars.plotOptions?.bar, horizontal: true }
						}
					}}
				/>
			</Card>
		</div>
	</main>
	<div class="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4">
		<Chat />
		<DesktopPc />
	</div>
	<Footer class="col-span-1 xl:col-span-2 2xl:col-span-3" />
</div>
