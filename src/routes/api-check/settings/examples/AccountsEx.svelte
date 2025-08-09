<script lang="ts">
  import { Accounts } from '$lib';
  import { Button } from 'flowbite-svelte';

  import Users from '../../../data/users.json';
</script>

<Accounts users={Users.slice(0, 4)}>
  <Button class="mt-2 w-fit">Save all</Button>
</Accounts>
