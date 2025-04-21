<script lang="ts">
  import { imagesPath } from '../../utils/variables';
  import { Avatar, Indicator, type IndicatorProps } from 'flowbite-svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    src: string;
    color?: IndicatorProps['color'];
  }
  let { children, src, color = 'primary' }: Props = $props();
</script>

<Avatar class="h-11 w-11">
  <img alt="" src={imagesPath(src, 'users')} class="rounded-full" />
  <Indicator placement="bottom-right" class="h-5 w-5 translate-y-0" {color}>
    {@render children()}
  </Indicator>
</Avatar>
