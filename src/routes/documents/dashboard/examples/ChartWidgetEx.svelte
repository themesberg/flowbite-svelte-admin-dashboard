<script lang="ts">
  import { ChartWidget, getChartOptions } from '$lib';
  const series = [
      {
        name: 'Revenue',
        data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
        color: '#EF562F'
      },
      {
        name: 'Revenue (previous period)',
        data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
        color: '#FDBA8C'
      }
    ]

  let chartOptions = $derived(getChartOptions(false));

  $effect(() => {
    chartOptions.series = series;
  });
</script>

<ChartWidget value={12.5} {chartOptions} title="$45,385" subtitle="Sales this week" />