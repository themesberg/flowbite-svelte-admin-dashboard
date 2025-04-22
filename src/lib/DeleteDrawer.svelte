<script lang="ts">
  import { Button, CloseButton, Heading } from 'flowbite-svelte';
  import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
  import type { DeleteDrawerProps } from './types';

  let { hidden = $bindable(true), title = 'Delete item', confirm = 'Are you sure you want to delete this product?', yes = "Yes, I'm sure", no = 'No, cancel' }: DeleteDrawerProps = $props();
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">{title}</Heading>
<CloseButton onclick={() => (hidden = true)} class="absolute top-2.5 right-2.5 text-gray-400 hover:text-black dark:text-white" />

<ExclamationCircleOutline class="mt-8 mb-4 h-10 w-10 text-red-600" />

<h3 class="mb-6 text-lg text-gray-500 dark:text-gray-300">{confirm}</h3>

<Button href="/" color="red" class="mr-2">{yes}</Button>
<Button color="alternative" onclick={() => (hidden = true)}>{no}</Button>
