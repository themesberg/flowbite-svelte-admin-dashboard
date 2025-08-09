<script lang="ts">
  import { UserModal } from '$lib';
  import { Button } from 'flowbite-svelte';
  import { PlusOutline } from 'flowbite-svelte-icons';

  let openUser: boolean = $state(false); // modal control
  let current_user: any = $state({});

</script>

<Button size="sm" class="gap-2 px-3 whitespace-nowrap" onclick={() => ((current_user = {}), (openUser = true))}>
  <PlusOutline size="sm" />Add user
</Button>

<UserModal bind:open={openUser} data={current_user} />