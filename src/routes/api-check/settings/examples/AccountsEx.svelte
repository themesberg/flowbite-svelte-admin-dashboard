<script lang="ts">
  import { Accounts } from '$lib';
  import { Button } from 'flowbite-svelte';

  import Users from '../../../data/users.json';
  import { MY_IMG_DIR } from '../../../utils';

  // for avatar
  const users = Users.map((user) => ({
    ...user,
    avatar: `${MY_IMG_DIR}/users/${user.avatar}`
  }));
</script>

<Accounts users={users.slice(0, 4)}>
  <Button class="mt-2 w-fit">Save all</Button>
</Accounts>
