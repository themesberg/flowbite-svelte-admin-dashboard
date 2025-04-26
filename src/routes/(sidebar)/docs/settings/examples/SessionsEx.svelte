<script lang="ts">
  import { Sessions } from '$lib';
  import type { SessionProps } from '$lib/types';
  import { DesktopPcOutline, MobilePhoneOutline } from 'flowbite-svelte-icons';
  const sessionOptions: SessionProps = {
    seeMorehref: '/',
    sessions: [
      {
        ipaddress: 'California 123.123.123.123',
        device: 'Chrome on macOS',
        href: '/',
        btnName: 'Revoke',
        IconOption: {
          icon: DesktopPcOutline
        }
      },
      {
        ipaddress: 'Rome 24.456.355.98',
        device: 'Safari on iPhone',
        href: '/',
        btnName: 'Revoke',
        IconOption: {
          icon: MobilePhoneOutline
        }
      }
    ]
  };
</script>

<Sessions {...sessionOptions} />