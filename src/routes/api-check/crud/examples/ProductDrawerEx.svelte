<script lang="ts">
  import { ProductDrawer } from '$lib';
  import { Button, Drawer } from 'flowbite-svelte';
  import { TrashBinSolid } from 'flowbite-svelte-icons';

  let open: boolean = $state(false); // modal control

  const toggle = () => {
    open = !open;
  };
</script>

<Button color="red" size="sm" class="gap-2 px-3" onclick={() => toggle()}>
  <TrashBinSolid size="sm" /> Delete item
</Button>

<Drawer placement="right" bind:open>
  <ProductDrawer
    bind:open
    additionalFields={[
      {
        name: 'technology',
        label: 'Technology',
        placeholder: 'Select technology',
        options: [
          { value: 'REACT', label: 'React' },
          { value: 'SVELTE', label: 'SvelteKit' },
          { value: 'VUE', label: 'Vue.js' }
        ]
      },
      {
        name: 'discount',
        label: 'Discount',
        placeholder: 'No discount',
        options: [
          { value: '10', label: '10%' },
          { value: '20', label: '20%' },
          { value: '30', label: '30%' }
        ]
      }
    ]}
  />
</Drawer>
