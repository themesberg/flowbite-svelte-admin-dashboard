<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Li } from 'flowbite-svelte';
  import { CheckOutline } from 'flowbite-svelte-icons';
  interface Props {
    icon?: boolean;
    children: Snippet;
  }
  let { icon, children }: Props = $props();
</script>

<Li {icon} class="flex items-center space-x-3">
  {#if !icon}
    <CheckOutline size="md" class="text-green-500 dark:text-green-400" />
  {/if}
  <span class="dark:text-white">
    {@render children()}
  </span>
</Li>
