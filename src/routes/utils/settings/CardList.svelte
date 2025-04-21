<script lang="ts">
  import { Button, Toggle } from 'flowbite-svelte';
  import Card from '../../utils/widgets/Card.svelte';
  interface Props {
    title: string;
    subtitle?: string;
    buttonLabel?: string;
    items: any[];
    class?: string;
  }

  let { title, subtitle, buttonLabel = 'Save all', items = [], class: className, ...restProps }: Props = $props();
</script>

<Card {title} class={className} {...restProps}>
  {#if subtitle}
    <p class="text-sm font-normal text-gray-500 dark:text-gray-300">{subtitle}</p>
  {/if}

  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    {#each items as item}
      <li class="py-4">
        <div class="flex items-center justify-between">
          <div class="flex flex-grow flex-col">
            <div class="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</div>
            <div class="text-base font-normal text-gray-500 dark:text-gray-300">
              {item.subtitle}
            </div>
          </div>
          <Toggle checked={item.active} class="me-0 peer-focus:ring-0" />
        </div>
      </li>
    {/each}
  </ul>
  <Button class="mt-2 w-fit">{buttonLabel}</Button>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let title: string;
@prop export let subtitle: string = '';
@prop export let buttonLabel: string = 'Save all';
@prop export let items: any[] = [];
-->
