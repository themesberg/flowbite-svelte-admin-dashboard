<script lang="ts">
  import { Change } from '$lib';
  import { twMerge } from 'tailwind-merge';
  import { Card, Chart, Heading, P } from 'flowbite-svelte';
  import { DateRangeSelector, More } from '$lib';
  import type { ChartWidgetProps } from './types';

  let { title, subtitle, chartOptions, value, cardClass, headingClass }: ChartWidgetProps = $props();

  const cardCls = twMerge('w-full max-w-none p-4 sm:p-6 2xl:col-span-2', cardClass);
  const headingCls = twMerge('text-2xl', headingClass);
</script>

<Card size="xl" class={cardCls}>
  <div class="mb-4 flex items-center justify-between">
    <div class="flex-shrink-0">
      <Heading tag="h3" class={headingCls}>{title}</Heading>
      <P class="text-base font-light text-gray-500 dark:text-gray-300">{subtitle}</P>
    </div>
    <Change {value} since="" class="justify-end font-medium" />
  </div>

  <Chart options={chartOptions || {}}></Chart>
  <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 sm:pt-6 dark:border-gray-700">
    <DateRangeSelector />
    <More title="Sales Report" href="#top" />
  </div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ChartWidgetProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L26)
## Props
@prop title
@prop subtitle
@prop chartOptions
@prop value
@prop cardClass
@prop headingClass
-->
