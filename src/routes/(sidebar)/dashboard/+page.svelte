<script lang="ts">
	import thickbars from '$lib/graphs/thickbars';
	import thinfillbars from '$lib/graphs/thinfillbars';
	import ChartWidget from '$lib/widgets/ChartWidget.svelte';
	import { Card, Chart } from 'flowbite-svelte';
	import type { PageData } from '../$types';
	import Stats from './Stats.svelte';

	import Footer from '../Footer.svelte';
	import ActivityList from './ActivityList.svelte';
	import Change from './Change.svelte';
	import Chat from './Chat.svelte';
	import DesktopPc from './DesktopPc.svelte';
	import Traffic from './Traffic.svelte';
	import Insights from './Insights.svelte';
	import Transactions from './Transactions.svelte';

	export let data: PageData;
</script>

<div class=" p-2 sm:p-4">
	<main class="grid w-full gap-4 xl:grid-cols-2 2xl:grid-cols-3">
		<div class="2xl:col-span-2">
			<ChartWidget chartOptions={data} title="$345" subtitle="Sales this week" />
		</div>
		<div class="col-span-1">
			<Stats />
		</div>
		<div class="col-span-1">
			<Card horizontal class="items-center justify-between" size="xl">
				<div>
					<p>New products</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						2,340
					</p>
					<Change value={12.5} since="Since last month" />
				</div>
				<Chart options={thickbars} />
			</Card>
		</div>
		<div class="col-span-1">
			<Card horizontal class="items-center justify-between" size="xl">
				<div>
					<p>Users</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						4,420
					</p>
					<Change value={-3.4} since="Since last month" />
				</div>
				<Chart options={thinfillbars} />
			</Card>
		</div>
		<div class="col-span-1">
			<Card horizontal class="items-center justify-between" size="xl">
				<div>
					<p>Users</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
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
	<div class="my-4 grid grid-cols-1 xl:grid-cols-2 xl:gap-4">
		<Chat />
		<div class="grid gap-4">
			<DesktopPc />
			<Traffic />
		</div>
		<ActivityList />
		<Insights />
		<div class="col-span-2">
			<Transactions />
		</div>
	</div>
	<Footer class="col-span-1 xl:col-span-2 2xl:col-span-3" />
</div>
