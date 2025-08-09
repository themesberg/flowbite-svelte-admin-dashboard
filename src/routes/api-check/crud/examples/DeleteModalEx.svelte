<script lang="ts">
  import { DeleteModal } from "$lib";
  import { Button } from 'flowbite-svelte';
  import { TrashBinSolid } from "flowbite-svelte-icons";
  let openDelete: boolean = $state(false);
  
  const toggle = () => {
    openDelete = !openDelete;
  };
</script>

<Button color="red" size="sm" class="gap-2 px-3" onclick={() => toggle()}>
  <TrashBinSolid size="sm" /> Delete item
</Button>


<DeleteModal bind:open={openDelete} />