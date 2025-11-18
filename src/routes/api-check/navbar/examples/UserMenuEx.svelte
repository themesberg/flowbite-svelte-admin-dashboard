<script lang="ts">
  import { UserMenu, mapUsersWithAvatars } from '$lib';
  import { DropdownDivider, DropdownItem } from 'flowbite-svelte';
  import Users from '../../../data/users.json';

  const menuItems = ['Dashboard', 'Settings', 'Earnings'];
  const users = mapUsersWithAvatars(Users);
</script>

<UserMenu {...users[4]} {menuItems} placement="bottom">
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</UserMenu>
