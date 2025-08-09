<script lang="ts">
  import { PriceCard, PriceCardListItem } from '$lib';
  import { Toggle } from 'flowbite-svelte';
  import { CloseOutline } from 'flowbite-svelte-icons';

  const prices: string[][] = [
    ['$24', '$200'],
    ['$49', '$400'],
    ['$499', '$1500']
  ];
  let yearly: boolean = $state(false);
  let period = $derived(yearly ? 'year' : 'month');
</script>

<Toggle class="ms-3 peer-focus:ring-0" bind:checked={yearly} />
<PriceCard title="Starter" price={prices[0][+yearly]} {period}>
  {#snippet subtitle()}
    Best option for personal use and for your next project.
  {/snippet}
  <PriceCardListItem>Individual configuration</PriceCardListItem>
  <PriceCardListItem>No setup, or hidden fees</PriceCardListItem>
  <PriceCardListItem>Team size: <span class="font-semibold">1 developer</span></PriceCardListItem>
  <PriceCardListItem icon>
    <CloseOutline class="mr-2 inline text-red-500 dark:text-red-400" />
    Premium support
  </PriceCardListItem>
  <PriceCardListItem icon>
    <CloseOutline class="mr-2 inline text-red-500 dark:text-red-400" />
    Free updates
  </PriceCardListItem>
</PriceCard>
