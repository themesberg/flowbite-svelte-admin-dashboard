<script lang="ts">
  import { Button, Input, Label } from 'flowbite-svelte';
  import { CardWidget } from '$lib';
  import type { GeneralInfoProps } from './types';

  let { inputs }: GeneralInfoProps = $props();
</script>

<CardWidget title="General Information" class="-mt-px max-w-none p-4 sm:p-6">
  <form class="grid grid-cols-6 gap-6">
    {#each inputs as { label, type, placeholder }}
      <Label class="col-span-6 space-y-2 sm:col-span-3">
        <span>{label}</span>
        <Input {type} {placeholder} class="border font-normal outline-none" />
      </Label>
    {/each}
    <Button class="w-fit whitespace-nowrap">Save all</Button>
  </form>
</CardWidget>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[GeneralInfoProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L467)
## Props
@prop inputs
-->
