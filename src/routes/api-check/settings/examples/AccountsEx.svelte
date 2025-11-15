<script lang="ts">
  import { Accounts } from '$lib';
  import { Button } from 'flowbite-svelte';

  import Users from '../../../data/users.json';
  // for avatar
  const MY_IMG_DIR = 'https://flowbite-admin-dashboard.vercel.app/images';
  
  const users = Users.map(user => ({
    ...user,
    avatar: `${MY_IMG_DIR}/users/${user.avatar}`
  }));
</script>

<Accounts users={users.slice(0, 4)}>
  <Button class="mt-2 w-fit">Save all</Button>
</Accounts>
