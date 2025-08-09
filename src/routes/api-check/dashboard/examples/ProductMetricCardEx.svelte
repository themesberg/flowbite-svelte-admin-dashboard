<script lang="ts">
  import { ProductMetricCard, DarkChart } from '$lib';
  import users from '../../../utils/graphs/users';
</script>

<ProductMetricCard title="Users" subTitle="4,420" changeProps={{ size: 'sm', value: -3.4, since: 'Since last month' }}>
  {#snippet chart()}
    <DarkChart configFunc={users} class="w-full" />
  {/snippet}
</ProductMetricCard>
