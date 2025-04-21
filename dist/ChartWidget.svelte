<script lang="ts">
  import { Change } from './';
  import { Card, Chart, Heading } from 'flowbite-svelte';
  import LastRange from './LastRange.svelte';
  import More from './More.svelte';
  import type { ChartWidgetProps } from './types';

  let { title, subtitle, chartOptions, value }: ChartWidgetProps = $props();
</script>

<Card size="xl" class="w-full max-w-none p-4 sm:p-6 2xl:col-span-2">
  <div class="mb-4 flex items-center justify-between">
    <div class="flex-shrink-0">
      <Heading tag="h3" class="text-2xl">{title}</Heading>
      <p class="text-base font-light text-gray-500 dark:text-gray-300">{subtitle}</p>
    </div>
    <Change {value} since="" class="justify-end font-medium" />
  </div>

  <Chart options={chartOptions || {}}></Chart>
  <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 sm:pt-6 dark:border-gray-700">
    <LastRange />
    <More title="Sales Report" href="#top" />
  </div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ChartWidgetProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L25)
## Props
@prop title
@prop subtitle
@prop chartOptions
@prop value
-->
