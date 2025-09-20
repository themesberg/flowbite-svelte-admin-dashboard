<script lang="ts">
  import { Button, CloseButton, Heading, Drawer } from 'flowbite-svelte';
  import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
  import type { DeleteDrawerProps } from './types';

  let {
    open = $bindable(false),
    title = 'Delete item',
    confirm = 'Are you sure you want to delete this?',
    yes = "Yes, I'm sure",
    no = 'No, cancel',
    headingTag = 'h5',
    headingClass = 'mb-6 text-sm font-semibold uppercase'
  }: DeleteDrawerProps = $props();
</script>

<Drawer placement="right" bind:open>
  {#if title}
    <Heading tag={headingTag} class={headingClass}>{title}</Heading>
  {/if}
  <CloseButton onclick={() => (open = false)} class="absolute top-2.5 right-2.5 text-gray-400 hover:text-black dark:text-white" />

  <ExclamationCircleOutline class="mt-8 mb-4 h-10 w-10 text-red-600" />

  <h3 class="mb-6 text-lg text-gray-500 dark:text-gray-300">{confirm}</h3>

  <Button href="/" color="red" class="mr-2">{yes}</Button>
  <Button color="alternative" onclick={() => (open = false)}>{no}</Button>
</Drawer>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[DeleteDrawerProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L249)
## Props
@prop open = $bindable(false)
@prop title = 'Delete item'
@prop confirm = 'Are you sure you want to delete this?'
@prop yes = "Yes, I'm sure"
@prop no = 'No, cancel'
@prop headingTag = 'h5'
@prop headingClass = 'mb-6 text-sm font-semibold uppercase'
-->
