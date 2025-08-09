<script lang="ts">
  import { Footer } from '$lib';
  import { P } from 'flowbite-svelte';
  import { menus, brand } from '../../../(no-layout)/pages/pricing/data';
</script>

<Footer {menus} {brand}>
  {#snippet description()}
    <P>Flowbite is a UI library of elements &amp; components based on Tailwind CSS that can get you started building websites faster and more efficiently.</P>
  {/snippet}
</Footer>