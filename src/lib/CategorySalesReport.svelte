<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { Card, Datepicker, Heading, Span } from 'flowbite-svelte';
  import { Change, More, DateRangeSelector } from '$lib';
  import type { CategorySalesReportProps } from './types';

  let { title, titleTag = 'h3', subtitle, chart, changeProps, cardClasss, divClass, headingClass, spanClass }: CategorySalesReportProps = $props();

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });
  const cardCls = twMerge('h-fit max-w-none p-4 sm:p-6', cardClasss);
  const divCls = twMerge('items-center justify-between border-b border-gray-200 pb-4 sm:flex dark:border-gray-700', divClass);
  const headingCls = twMerge('text-base font-normal text-gray-500 dark:text-gray-300', headingClass);
  const spanCls = twMerge('text-2xl leading-none font-bold text-gray-900 sm:text-3xl dark:text-white', spanClass);
</script>

<Card size="xl" class={cardCls}>
  <div class={divCls}>
    <div class="mb-4 w-full sm:mb-0">
      <Heading tag={titleTag} class={headingCls}>{title}</Heading>
      {#if subtitle}
        <Span class={spanCls}>{subtitle}</Span>
      {/if}
      {#if changeProps}
        <Change {...changeProps} />
      {/if}
    </div>
    <div class="w-full max-w-lg">
      <div class="flex items-center space-x-4">
        <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="pink" inputClass="w-64" />
      </div>
    </div>
  </div>
  {#if chart}
    {@render chart()}
  {/if}
  <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 sm:pt-6 dark:border-gray-700">
    <DateRangeSelector />
    <More title="Sales Report" href="#top" />
  </div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[CategorySalesReportProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L393)
## Props
@prop title
@prop titleTag = 'h3'
@prop subtitle
@prop chart
@prop changeProps
@prop cardClasss
@prop divClass
@prop headingClass
@prop spanClass
-->
