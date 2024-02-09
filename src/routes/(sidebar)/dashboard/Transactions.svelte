<script lang="ts">
	import LastRange from '$lib/widgets/LastRange.svelte';
	import {
		Button,
		Card,
		Checkbox,
		Dropdown,
		Input,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import {
		CalendarMonthOutline,
		ChevronDownOutline,
		ChevronRightOutline
	} from 'flowbite-svelte-icons';
	import StatusBadge from './StatusBadge.svelte';
	import CreditCard from './CreditCard.svelte';

	const headers = [
		'Transaction',
		'Date & Time',
		'Amount',
		'Reference number',
		'Payment method',
		'Status'
	];
	const data: [string, string, string, string, number, CreditCard['state']][] = [
		['Payment from Bonnie Green', 'Apr 23 ,2021', '$2300', '0047568936', 475, 'completed'],
		['Payment refund to #00910', 'Apr 23 ,2021', '-$670', '0078568936', 924, 'completed'],
		['Payment failed from #087651', 'Apr 18 ,2021', '$234', '0088568934', 826, 'cancelled'],
		['Payment from Lana Byrd', 'Apr 15 ,2021', '$5000', '0018568911', 634, 'inprogress'],
		['Payment from Jese Leos', 'Apr 15 ,2021', '$2300', '0045568939', 163, 'completed'],
		['Refund to THEMESBERG LLC', 'Apr 11 ,2021', '-$560', '0031568935', 443, 'inreview'],
		['Payment from Lana Lysle', 'Apr 6 ,2021', '$1437', '0023568934', 223, 'inreview'],
		['Payment to Joseph Mcfall', 'Apr 1 ,2021', '$980', '0057568935', 362, 'completed'],
		['Payment from Alphabet', 'Mar 23 ,2021', '$11,436', '00836143841', 772, 'inprogress'],
		['Payment from Bonnie Green', 'Mar 23 ,2021', '$560', '0031568935', 123, 'completed']
	];
</script>

<Card size="xl" class="h-fit max-w-none">
	<div
		class="items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex"
	>
		<div class="mb-4 w-full sm:mb-0">
			<h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Sales by category</h3>
			<span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl"
				>Transactions</span
			>
		</div>
		<div class="w-full max-w-lg">
			<div class="grid grid-cols-3 items-center gap-4">
				<Button color="alternative">
					Filter by status <ChevronDownOutline size="xs" class="ms-2" />
				</Button>
				<Dropdown class="w-44 space-y-3 p-3 text-sm">
					<li><Checkbox>Completed (56)</Checkbox></li>
					<li><Checkbox checked>Cancelled (56)</Checkbox></li>
					<li><Checkbox>In progress (56)</Checkbox></li>
					<li><Checkbox checked>In review (97)</Checkbox></li>
				</Dropdown>
				<Input placeholder="From">
					<CalendarMonthOutline slot="left" size="sm" />
				</Input>
				<Input placeholder="To">
					<CalendarMonthOutline slot="left" size="sm" />
				</Input>
			</div>
		</div>
	</div>
	<Table
		hoverable={true}
		noborder
		striped
		class="min-w-full divide-y divide-gray-200 font-normal dark:divide-gray-600"
	>
		<TableHead class="bg-gray-50 dark:bg-gray-700">
			{#each headers as header}
				<TableHeadCell>{header}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each data as [name, date, amount, reference, method, status]}
				<TableBodyRow>
					<TableBodyCell class="font-normal">{name}</TableBodyCell>
					<TableBodyCell class="font-normal">{date}</TableBodyCell>
					<TableBodyCell>{amount}</TableBodyCell>
					<TableBodyCell class="font-normal">{reference}</TableBodyCell>
					<TableBodyCell class="flex items-center gap-2 font-normal">
						<CreditCard number={method} /> <span>••• {method}</span>
					</TableBodyCell>
					<TableBodyCell class="font-normal"><StatusBadge state={status} /></TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	<div class="flex items-center justify-between pt-3 sm:pt-6">
		<LastRange />
		<a
			href="#top"
			class="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
		>
			Transactions report <ChevronRightOutline size="sm" class="ms-2" />
		</a>
	</div>
</Card>
