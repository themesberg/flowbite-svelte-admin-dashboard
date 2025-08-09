<script lang="ts">
  import { UserMenu } from '$lib';
  import { DropdownDivider, DropdownItem } from 'flowbite-svelte';
  import Users from '../../../data/users.json';
  
  const menuItems = ['Dashboard', 'Settings', 'Earnings'];
</script>

<UserMenu {...Users[4]} {menuItems} placement="bottom">
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</UserMenu>