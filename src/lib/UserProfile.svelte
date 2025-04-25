<script lang="ts">
  import { Avatar, Card, Heading } from 'flowbite-svelte';
  import type { UserProfileProps } from './types';

  let { children, src, title = 'Profile picture', subtitle = 'JPG, GIF or PNG. Max size of 800K' }: UserProfileProps = $props();
</script>

<Card size="xl" class="block p-4 shadow-sm sm:flex sm:space-x-4 sm:p-6 sm:py-6 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4" horizontal>
  <Avatar {src} class="mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0" />

  <div class="py-0.5">
    {#if title}
    <Heading tag="h3" class="text-xl">{title}</Heading>
    {/if}
    {#if subtitle}
    <p class="mt-1 mb-4 pt-px text-sm dark:text-gray-300">{subtitle}</p>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let src: string;
-->
