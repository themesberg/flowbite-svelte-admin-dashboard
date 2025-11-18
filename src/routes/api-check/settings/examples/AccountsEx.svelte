<script lang="ts">
  import { Accounts, mapUsersWithAvatars } from '$lib';
  import { Button } from 'flowbite-svelte';
  import Users from '../../../data/users.json';

  // for avatar
  const users = mapUsersWithAvatars(Users);
</script>

<Accounts users={users.slice(0, 4)}>
  <Button class="mt-2 w-fit">Save all</Button>
</Accounts>
