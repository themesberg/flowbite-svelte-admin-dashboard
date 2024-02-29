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

<main>
	<div class="space-y-2 px-2 pt-2 sm:space-y-4 sm:px-4 sm:pt-4">
		<div class="grid gap-2 sm:gap-4 xl:grid-cols-2 2xl:grid-cols-3">
			<ChartWidget chartOptions={data} title="$345" subtitle="Sales this week" />

			<Stats />
		</div>
		<div class="grid grid-cols-1 gap-2 sm:gap-4 xl:grid-cols-2 2xl:grid-cols-3">
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
		<div class="grid grid-cols-1 gap-2 sm:gap-4 xl:grid-cols-2">
			<Chat />
			<div class="grid gap-2 sm:gap-4">
				<DesktopPc />
				<Traffic />
			</div>
		</div>
		<div class="grid grid-cols-1 gap-2 sm:gap-4 xl:grid-cols-2">
			<ActivityList />
			<Insights />
		</div>

		<Transactions />
	</div>
</main>
<Footer class="mx-2 my-2 sm:mx-4 sm:my-4" />
