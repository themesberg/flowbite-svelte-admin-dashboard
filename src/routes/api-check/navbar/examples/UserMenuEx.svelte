<script lang="ts">
  import { UserMenu } from '$lib';
  import { DropdownDivider, DropdownItem } from 'flowbite-svelte';
  import Users from '../../../data/users.json';
  import { MY_IMG_DIR } from '../../../utils'

  const menuItems = ['Dashboard', 'Settings', 'Earnings'];


  // for avatar
  const users = Users.map(user => ({
    ...user,
    avatar: `${MY_IMG_DIR}/users/${user.avatar}`
  }));
</script>

<UserMenu {...users[4]} {menuItems} placement="bottom">
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</UserMenu>
