<script lang="ts">
  import { ProductDrawer } from '$lib';
  import { Button, Drawer } from 'flowbite-svelte';
  import { TrashBinSolid } from 'flowbite-svelte-icons';

  let hidden: boolean = $state(true); // modal control

  const toggle = () => {
    hidden = !hidden;
  };
</script>

<Button color="red" size="sm" class="gap-2 px-3" onclick={() => toggle()}>
  <TrashBinSolid size="sm" /> Delete item
</Button>

<Drawer placement="right" bind:hidden>
  <ProductDrawer bind:hidden />
</Drawer>
