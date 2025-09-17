<script lang="ts">
  import { DeleteDrawer } from '$lib';
  import { Button, Drawer } from 'flowbite-svelte';
  import { TrashBinSolid } from 'flowbite-svelte-icons';

  let open: boolean = $state(false); 

  const toggle = () => {
    open = !open;
  };
</script>

<Button color="red" size="sm" class="gap-2 px-3" onclick={() => toggle()}>
  <TrashBinSolid size="sm" /> Delete item
</Button>


<DeleteDrawer bind:open />

