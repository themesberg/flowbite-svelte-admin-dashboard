<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import { CheckOutline, CloseOutline } from 'flowbite-svelte-icons';
  import type { ComparisonTableProps, TableRow } from './types';

  let { columns, rows }: ComparisonTableProps = $props();

  const columnsDefault = ['Freelancer', 'Company', 'Enterprise'];
  const columnOptions = $derived(columns ?? columnsDefault);
  const rowsDefault: TableRow[] = [
    { name: 'Seperate business/personal', freelancer: true, company: true, enterprise: true },
    { name: 'Estimate tax payments', freelancer: true, company: true, enterprise: true },
    { name: 'Stock control', freelancer: true, company: true, enterprise: true },
    { name: 'Create invoices & estimates', freelancer: false, company: true, enterprise: true },
    { name: 'Manage bills & payments', freelancer: false, company: true, enterprise: true },
    { name: 'Run payroll', freelancer: false, company: true, enterprise: true },
    { name: 'Handle multiple currencies', freelancer: false, company: false, enterprise: true },
    {
      name: 'Number of Users',
      freelancer: '1 User',
      company: '5-10 Users',
      enterprise: '20+ Users'
    },
    { name: 'Track deductible mileage', freelancer: false, company: false, enterprise: true },
    { name: 'Track employee time', freelancer: false, company: false, enterprise: true },
    { name: 'Multi-device', freelancer: false, company: false, enterprise: true }
  ];
  const rowOptions = $derived(rows ?? rowsDefault);
</script>

<Table striped>
  <TableHead class="normal-case">
    <TableHeadCell></TableHeadCell>
    {#each columnOptions as column}
      <TableHeadCell class="p-4 text-right text-base font-semibold tracking-wider text-gray-900 dark:text-white">{column}</TableHeadCell>
    {/each}
  </TableHead>
  <TableBody>
    {#each rowOptions as row}
      <TableBodyRow class="border-none">
        <TableBodyCell class="rounded-l-lg p-4 text-base font-normal whitespace-nowrap text-gray-500 dark:text-gray-300">
          {row.name}
        </TableBodyCell>
        {#each columnOptions as column}
          {@const value = row[column.toLowerCase() as keyof typeof row]}
          {#if typeof value === 'boolean'}
            <TableBodyCell>
              {#if value}
                <CheckOutline class="ml-auto text-green-400" />
              {:else}
                <CloseOutline class="ml-auto text-red-500" />
              {/if}
            </TableBodyCell>
          {:else}
            <TableBodyCell class="flex-shrink-0 text-right text-xs font-medium text-gray-900 sm:text-sm md:text-base dark:text-white">
              {value}
            </TableBodyCell>
          {/if}
        {/each}
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ComparisonTableProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L403)
## Props
@prop columns
@prop rows
-->
