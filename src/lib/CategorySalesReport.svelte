<script lang="ts">
  // replacement for DesktopPc
  import { Card, Chart, Datepicker } from 'flowbite-svelte';
  import { Change, More, DateRangeSelector } from '$lib';
  import type { CategorySalesReportProps } from './types';

  let { options }: CategorySalesReportProps = $props();

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });
</script>

<Card size="xl" class="h-fit max-w-none p-4 sm:p-6">
  <div class="items-center justify-between border-b border-gray-200 pb-4 sm:flex dark:border-gray-700">
    <div class="mb-4 w-full sm:mb-0">
      <h3 class="text-base font-normal text-gray-500 dark:text-gray-300">Sales by category</h3>
      <span class="text-2xl leading-none font-bold text-gray-900 sm:text-3xl dark:text-white">Desktop PC</span>
      <Change value={2.5} since="Since last month" size="sm" />
    </div>
    <div class="w-full max-w-lg">
      <div class="flex items-center space-x-4">
        <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="pink" inputClass="w-64" />
      </div>
    </div>
  </div>
  <Chart {options}></Chart>
  <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 sm:pt-6 dark:border-gray-700">
    <DateRangeSelector />
    <More title="Sales Report" href="#top" />
  </div></Card
>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[CategorySalesReportProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L395)
## Props
@prop options
-->
