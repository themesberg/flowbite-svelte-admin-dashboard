<script lang="ts">
  import { Chart } from 'flowbite-svelte';
  import { CategorySalesReport } from '$lib';
  import options from '../../../../utils/graphs/thinmultibars';
</script>

<CategorySalesReport title="Sales by category" subtitle="Desktop PC" changeProps={{ value: 2.5, since: 'Since last month', size: 'sm' }}>
  {#snippet chart()}
    <Chart {options} />
  {/snippet}
</CategorySalesReport>