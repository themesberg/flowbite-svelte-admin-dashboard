<script lang="ts">
  import thickbars from '../graphs/thickbars';
  import { Card, Chart, P } from 'flowbite-svelte';
  import users from '../graphs/users';
  import DarkChart from '../widgets/DarkChart.svelte';
  import getChartOptions from '../../(sidebar)/dashboard/chart_options';
  import ActivityList from './ActivityList.svelte';
  import { Change, ChartWidget, Stats, More } from '$lib';
  import Chat from './Chat.svelte';
  import DesktopPc from './DesktopPc.svelte';
  import Insights from './Insights.svelte';
  import Traffic from './Traffic.svelte';
  import Transactions from './Transactions.svelte';
  import Customers from '../../data/users.json';

  import type { PageProps } from '../../(sidebar)/$types';
  let { data }: PageProps = $props();

  const products = [
    {
      src: 'iphone.png',
      image: 'iphone',
      label: 'iPhone 14 Pro',
      change: 2.5,
      price: '$445,467'
    },
    {
      src: 'imac.png',
      image: 'imac',
      label: 'Apple iMac 27',
      change: 12.5,
      price: '$256,982'
    },
    {
      src: 'watch.png',
      image: 'watch',
      label: 'Apple Watch SE',
      change: -1.35,
      price: '$201,869'
    },
    {
      src: 'ipad.png',
      image: 'ipad',
      label: 'Apple iPad Air',
      change: 12.5,
      price: '$103,967'
    },
    {
      src: 'imac.png',
      image: 'imac',
      label: 'Apple iMac 24',
      change: -2,
      price: '$98,543 '
    }
  ];
  const customers = Customers.slice(0, 5);

  let chartOptions = $derived(getChartOptions(false));

  $effect(() => {
    chartOptions.series = data.series;
  });

  let dark = $state(false);
  const statsCont = {
    title: 'Statistics this month',
    popoverTitle: 'Statistics',
    tab1Title: 'Top products',
    tab2Title: 'Top customers'
  };
</script>

<div class="mt-px space-y-4">
  <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
    <ChartWidget value={12.5} {chartOptions} title="$45,385" subtitle="Sales this week" />
    <Stats {products} {customers} {...statsCont}>
      {#snippet popoverDesc()}
        <P>Statistics is a branch of applied mathematics that involves the collection, description, analysis, and inference of conclusions from quantitative data.</P>
        <More title="Read more" href="#top" flat />
      {/snippet}
    </Stats>
  </div>
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
    <Card horizontal class="items-center justify-between p-4 sm:p-6" size="xl">
      <div class="w-full">
        <P>New products</P>
        <p class="text-2xl leading-none font-bold text-gray-900 sm:text-3xl dark:text-white">2,340</p>
        <Change size="sm" value={12.5} since="Since last month" />
      </div>
      <Chart options={thickbars} class="w-full" />
    </Card>
    <Card horizontal class="items-center justify-between p-4 sm:p-6" size="xl">
      <div class="w-full">
        <P>Users</P>
        <p class="text-2xl leading-none font-bold text-gray-900 sm:text-3xl dark:text-white">4,420</p>
        <Change size="sm" value={-3.4} since="Since last month" />
      </div>
      <DarkChart configFunc={users} class="w-full" />
    </Card>
    <Card horizontal class="items-center justify-between p-4 sm:p-6" size="xl">
      <div class="w-full">
        <P>Users</P>
        <p class="text-2xl leading-none font-bold text-gray-900 sm:text-3xl dark:text-white">4,420</p>
        <Change size="sm" value={-3.4} since="Since last month" class="w-full" />
      </div>
      <DarkChart
        configFunc={(d) => {
          const x = users(d);
          if (x.plotOptions?.bar) {
            x.plotOptions.bar.horizontal = true;
          } else {
            x.plotOptions = {
              bar: {
                horizontal: true
              }
            };
          }
          return x;
        }}
        class="w-full"
      />
    </Card>
  </div>
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <Chat />
    <div class="flex flex-col gap-4">
      <DesktopPc />
      <Traffic {dark} />
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <ActivityList />
    <Insights />
  </div>

  <Transactions {dark} />
</div>
