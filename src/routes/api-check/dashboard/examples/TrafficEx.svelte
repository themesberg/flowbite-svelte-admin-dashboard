<script lang="ts">
  import { Traffic } from '$lib';
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { DesktopPcOutline, MobilePhoneOutline, TabletOutline } from 'flowbite-svelte-icons';
  import type { DeviceOption } from '$lib/types';
  import trafficOptions from '../../../utils/graphs/traffic';

  let dark = $state(false);
  const devices: DeviceOption[] = [
    {
      title: 'Desktop',
      subtitle: '234k',
      change: 4,
      IconOption: {
        icon: DesktopPcOutline
      }
    },
    {
      title: 'Phone',
      subtitle: '94k',
      change: -1,
      IconOption: {
        icon: MobilePhoneOutline
      }
    },
    {
      title: 'Tablet',
      subtitle: '16k',
      change: -0.6,
      IconOption: {
        icon: TabletOutline
      }
    }
  ];
</script>

<Traffic {devices}>
  {#snippet chart()}
    <Chart options={trafficOptions(dark)} />
  {/snippet}
</Traffic>
