<script lang="ts">
  import { Button, Modal } from 'flowbite-svelte';
  import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
  import type { DeleteModalProps } from './types'

  let { open = $bindable(true), title = 'Are you sure you want to delete this product?', yes = "Yes, I'm sure", no = 'No, cancel' }: DeleteModalProps = $props();
</script>

<Modal bind:open size="sm">
  <ExclamationCircleOutline class="mx-auto mt-8 mb-4 h-10 w-10 text-red-600" />

  <h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-300">{title}</h3>

  <div class="flex items-center justify-center">
    <Button href="/" color="red" class="mr-2">{yes}</Button>
    <Button color="alternative" onclick={() => (open = false)}>{no}</Button>
  </div>
</Modal>
