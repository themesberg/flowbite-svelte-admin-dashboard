<script lang="ts">
  import { SmallPanel } from '$lib';
  import { DesktopPcOutline } from 'flowbite-svelte-icons';

  const IconOption = {
    icon: DesktopPcOutline
  };
</script>

<SmallPanel title="Desktop" subtitle="234k" change={4} {IconOption} />
