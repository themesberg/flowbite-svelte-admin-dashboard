<script lang="ts">
  import { UserMenu } from '$lib';
  import { DropdownDivider, DropdownItem } from 'flowbite-svelte';
  import Users from '../../../data/users.json';

  const menuItems = ['Dashboard', 'Settings', 'Earnings'];


  // for avatar
  const MY_IMG_DIR = 'https://flowbite-admin-dashboard.vercel.app/images';
  
  const users = Users.map(user => ({
    ...user,
    avatar: `${MY_IMG_DIR}/users/${user.avatar}`
  }));

  // option 2 for avatar 
  // use as <UserMenu {...Users[4]} avatar={myImagePath("bonnie-green.png")}  {menuItems}>
  // const imgDir: string = 'https://flowbite-admin-dashboard.vercel.app/images';
  // const myImagePath = (filename: string) => `${imgDir}/users/${filename}`;
</script>

<UserMenu {...users[4]} {menuItems} placement="bottom">
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</UserMenu>
