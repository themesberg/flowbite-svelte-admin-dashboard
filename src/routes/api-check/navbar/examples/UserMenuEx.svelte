<script lang="ts">
  import { UserMenu } from '$lib';
  import { DropdownDivider, DropdownItem } from 'flowbite-svelte';
  import Users from '../../../data/users.json';
  import { mapUsersWithAvatars } from '../../../utils';

  const menuItems = ['Dashboard', 'Settings', 'Earnings'];
  const users = mapUsersWithAvatars(Users);
</script>

<UserMenu {...users[4]} {menuItems} placement="bottom">
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</UserMenu>
