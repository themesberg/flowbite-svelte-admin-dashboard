<script lang="ts">
  import { Button, Modal } from 'flowbite-svelte';
  import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
  import type { DeleteModalProps } from './types';

  let { open = $bindable(true), title = 'Are you sure you want to delete this?', yes = "Yes, I'm sure", no = 'No, cancel' }: DeleteModalProps = $props();
</script>

<Modal bind:open size="sm">
  <ExclamationCircleOutline class="mx-auto mt-8 mb-4 h-10 w-10 text-red-600" />

  <h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-300">{title}</h3>

  <div class="flex items-center justify-center">
    <Button href="/" color="red" class="mr-2">{yes}</Button>
    <Button color="alternative" onclick={() => (open = false)}>{no}</Button>
  </div>
</Modal>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[DeleteModalProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L241)
## Props
@prop open = $bindable(true)
@prop title = 'Are you sure you want to delete this product?'
@prop yes = "Yes, I'm sure"
@prop no = 'No, cancel'
-->
