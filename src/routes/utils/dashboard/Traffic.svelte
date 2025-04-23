<script lang="ts">
  import { Card, Chart } from 'flowbite-svelte';
  import options from '../graphs/traffic';
  import { SmallPanel } from '$lib';
  import { DesktopPcOutline, MobilePhoneOutline, TabletOutline } from 'flowbite-svelte-icons';
  import More from '../widgets/More.svelte';

  let { dark } = $props<{ dark: boolean }>();
</script>

<Card size="xl" class="h-fit max-w-none p-4 sm:p-6">
  <div class="mb-4 items-center justify-between border-b border-gray-200 pb-4 sm:flex dark:border-gray-700">
    <div class="mb-4 w-full sm:mb-0">
      <h3 class="text-base font-normal text-gray-500 dark:text-gray-300">Traffic by device</h3>
      <span class="text-2xl leading-none font-bold text-gray-900 sm:text-3xl dark:text-white">Desktop</span>
    </div>
    <More title="Full report" href="#top" />
  </div>
  <Chart options={options(dark)}></Chart>
  <div class="mb-4 flex items-center justify-between pt-4 sm:pt-6 lg:justify-evenly">
    <SmallPanel title="Desktop" subtitle="234k" change={4}>
      {#snippet icon()}
        <DesktopPcOutline size="xl" class="mb-1 dark:text-gray-100" />
      {/snippet}
    </SmallPanel>
    <SmallPanel title="Phone" subtitle="94k" change={-1}>
      {#snippet icon()}
        <MobilePhoneOutline size="xl" class="mb-1 dark:text-gray-100" />
      {/snippet}
    </SmallPanel>
    <SmallPanel title="Tablet" subtitle="16k" change={-0.6}>
      {#snippet icon()}
        <TabletOutline size="xl" class="mb-1 dark:text-gray-100" />
      {/snippet}
    </SmallPanel>
  </div>
</Card>
