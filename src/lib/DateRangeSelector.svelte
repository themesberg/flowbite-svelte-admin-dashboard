<script lang="ts">
  import dayjs from 'dayjs';
  import LocalizedFormat from 'dayjs/plugin/localizedFormat';
  import { Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import type { DateRangeSelectorProps, TimeSlot } from './types';

  dayjs.extend(LocalizedFormat);

  let { timeslot = 'Last 7 days', timeslots }: DateRangeSelectorProps = $props();

  const timeslotsDefault = {
    Yesterday: -1,
    Today: 0,
    'Last 7 days': 7,
    'Last 30 days': 30,
    'Last 90 days': 90
  };
  const actualTimeslots = $derived(timeslots ?? timeslotsDefault);

  let timeslots_keys: TimeSlot[] = $derived(Object.keys(actualTimeslots) as TimeSlot[]);

  let today = dayjs();
  let start = $derived(today.subtract(actualTimeslots[timeslot], 'days').format('ll'));
  let end = $derived(timeslot == 'Yesterday' ? start : today.format('ll'));
</script>

<div class="font-normal">
  <button class="mt-0.5 inline-flex gap-1 rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    >{timeslot} <ChevronDownOutline size="lg" /></button
  >
  <Dropdown simple class="min-w-48">
    <DropdownHeader>
      <DropdownItem class="truncate text-gray-900 dark:text-white" href="#">
        {#if start == end}
          {start}
        {:else}
          {start} - {end}
        {/if}
      </DropdownItem>
    </DropdownHeader>
    {#each timeslots_keys as slot}
      <DropdownItem class="font-normal" href="#" onclick={() => (timeslot = slot)}>
        {slot}
      </DropdownItem>
    {/each}
    <DropdownDivider />
    <DropdownItem class="font-normal" href="#">Custom...</DropdownItem>
  </Dropdown>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[DateRangeSelectorProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L346)
## Props
@prop timeslot = 'Last 7 days'
@prop timeslots
-->
