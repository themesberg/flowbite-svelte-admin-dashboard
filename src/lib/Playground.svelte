<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
  import { EmptyCard } from '$lib';
  import type { PlaygroundProps } from './types';

  let { breadcrumb, title = 'Create something awesome here' }: PlaygroundProps = $props();
</script>

<main>
  <div class="grid grid-cols-1 pt-2 xl:grid-cols-3 xl:gap-4 xl:px-0 dark:bg-gray-900">
    <div class="col-span-full mb-4 xl:mb-2">
      {#if breadcrumb}
        {@render breadcrumb()}
      {/if}
      <Heading tag="h1" class="text-xl font-semibold sm:text-2xl">{title}</Heading>
    </div>
    <div class="col-span-full xl:col-auto">
      <EmptyCard size="xl" class="mb-4 h-80 w-full space-y-6 p-4 2xl:col-span-2"></EmptyCard>
      <EmptyCard size="xl" class="mb-4 h-80 w-full space-y-6 p-4 2xl:col-span-2"></EmptyCard>
    </div>
    <div class="col-span-2">
      <EmptyCard size={undefined} class="mb-4 h-80 max-w-none space-y-6 p-4"></EmptyCard>
      <EmptyCard size={undefined} class="mb-4 h-80 w-full max-w-none space-y-6 p-4"></EmptyCard>
    </div>
  </div>
  <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {#each Array(4) as _, i}
      <EmptyCard size="xl" class="h-60 w-full space-y-6 sm:p-6"></EmptyCard>
    {/each}
  </div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[PlaygroundProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L236)
## Props
@prop breadcrumb
@prop title = 'Create something awesome here'
-->
