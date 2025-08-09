<script lang="ts">
  import { Card, Span, Heading } from 'flowbite-svelte';
  // import options from '../graphs/traffic';
  import { SmallPanel, More } from '$lib';
  import type { TrafficProps, MoreOption } from './types';

  let { chart, title = 'Traffic by device', subtitle = 'Desktop', more, devices }: TrafficProps = $props();

  const defaultMore: MoreOption = {
    title: 'Full report',
    href: '/'
  };
  const moreOption = $derived(more ?? defaultMore);
</script>

<Card size="xl" class="h-fit max-w-none p-4 sm:p-6">
  <div class="mb-4 items-center justify-between border-b border-gray-200 pb-4 sm:flex dark:border-gray-700">
    <div class="mb-4 w-full sm:mb-0">
      <Heading tag="h3" class="text-base font-normal text-gray-500 dark:text-gray-300">{title}</Heading>
      {#if subtitle}
        <Span class="text-2xl leading-none font-bold text-gray-900 sm:text-3xl dark:text-white">{subtitle}</Span>
      {/if}
    </div>
    {#if more}
      <More title={moreOption.title} href={moreOption.href} />
    {/if}
  </div>
  {#if chart}
    {@render chart()}
  {/if}
  {#if devices}
    <div class="mb-4 flex items-center justify-between pt-4 sm:pt-6 lg:justify-evenly">
      {#each devices as { title, subtitle, change, IconOption }}
        <SmallPanel {title} {subtitle} {change} {IconOption} />
      {/each}
    </div>
  {/if}
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[TrafficProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L514)
## Props
@prop chart
@prop title = 'Traffic by device'
@prop subtitle = 'Desktop'
@prop more
@prop devices
-->
