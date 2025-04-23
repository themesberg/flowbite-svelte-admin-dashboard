<script lang="ts">
  import { Heading, Hr } from 'flowbite-svelte';
  import type { FaqProps } from './types';

  let {
    title = 'Frequently asked questions',
    description = 'All types of businesses need access to development resources, so we give you the option to decide how much you need to use.',
    faqs
  }: FaqProps = $props();
</script>

<Heading tag="h1" class="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none sm:tracking-tight dark:text-white">
  {title}
</Heading>
<p class="mb-6 text-lg font-normal text-gray-500 sm:text-xl dark:text-gray-300">
  {description}
</p>
<Hr />
<div class="gap-8 space-y-10 lg:columns-3">
  {#each faqs as { title, answer }}
    <div class="space-y-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      {@html answer}
    </div>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[FaqProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L176)
## Props
@prop title = 'Frequently asked questions'
@prop description = 'All types of businesses need access to development resources, so we give you the option to decide how much you need to use.'
@prop faqs
-->
