<script lang="ts">
  import { Avatar, Button, Card, Heading } from 'flowbite-svelte';
  import { UploadSolid } from 'flowbite-svelte-icons';
  interface Props {
    src: string;
  }
  let { src }: Props = $props();
</script>

<Card size="xl" class="block p-4 shadow-sm sm:flex sm:space-x-4 sm:p-6 sm:py-6 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4" horizontal>
  <Avatar {src} class="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0" />

  <div class="py-0.5">
    <Heading tag="h3" class="text-xl">Profile picture</Heading>
    <p class="mt-1 mb-4 pt-px text-sm dark:text-gray-300">JPG, GIF or PNG. Max size of 800K</p>
    <div class="flex items-center space-x-4">
      <Button size="sm" class="px-3"><UploadSolid size="sm" class="-ms-1 me-2" /> Upload picture</Button>
      <Button size="sm" class="px-3" color="alternative">Delete</Button>
    </div>
  </div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let src: string;
-->
