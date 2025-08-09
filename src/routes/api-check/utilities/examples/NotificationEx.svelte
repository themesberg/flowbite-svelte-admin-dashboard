<script lang="ts">
  import { Notification } from '$lib';
  import { DownloadSolid } from 'flowbite-svelte-icons';
  const src =  "neil-sims.png"
  const Icon =  DownloadSolid
  const when = 'a few moments ago'
  const color = 'purple'
  const content = `New message from <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"`
</script>

<Notification href="#" {src} {Icon} {when} {color}>
  {@html content}
</Notification>