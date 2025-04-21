<script lang="ts">
  import dayjs from 'dayjs';
  import LocalizedFormat from 'dayjs/plugin/localizedFormat';
  import { Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { type TimeSlot, type LastRangeProps, DEFAULT_TIMESLOTS } from './types';

  dayjs.extend(LocalizedFormat);

  let { timeslot = 'Last 7 days', timeslots = DEFAULT_TIMESLOTS }: LastRangeProps = $props();

  let timeslots_keys: TimeSlot[] = Object.keys(timeslots) as TimeSlot[];

  let today = dayjs();
  let start = $derived(today.subtract(timeslots[timeslot], 'days').format('ll'));
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
[LastRangeProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L58)
## Props
@prop timeslot = 'Last 7 days'
@prop timeslots = DEFAULT_TIMESLOTS
-->
