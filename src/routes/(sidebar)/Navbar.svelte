<script lang="ts">
  import Notifications from '../utils/dashboard/NotificationList.svelte';
  import { AppsMenu, UserMenu } from '$lib';
  import { DarkMode, Dropdown, DropdownItem, NavBrand, NavHamburger, NavLi, NavUl, Navbar, Search, DropdownDivider } from 'flowbite-svelte';
  import {
    ArchiveSolid,
    ArrowRightToBracketOutline,
    CogOutline,
    DollarOutline,
    GridSolid,
    InboxOutline,
    ProfileCardOutline,
    SalePercentOutline,
    ShoppingBagSolid,
    UsersGroupSolid
  } from 'flowbite-svelte-icons';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import '../../app.css';
  import Users from '../data/users.json';
  interface Props {
    fluid?: boolean;
    drawerHidden?: boolean;
    list?: boolean;
  }

  let { fluid = true, drawerHidden = $bindable(false), list = false }: Props = $props();

  const menu = [
    { name: 'Sales', href: '/sales', icon: ShoppingBagSolid },
    { name: 'Users', href: '/users', icon: UsersGroupSolid },
    { name: 'Inbox', href: '/inbox', icon: InboxOutline },
    { name: 'Profile', href: '/profile', icon: ProfileCardOutline },
    { name: 'Settings', href: '/settings', icon: CogOutline },
    { name: 'Prouducts', href: '/products', icon: ArchiveSolid },
    { name: 'Pricing', href: '/pricing', icon: DollarOutline },
    { name: 'Billing', href: '/billing', icon: SalePercentOutline },
    { name: 'Logout', href: '/logout', icon: ArrowRightToBracketOutline }
  ];
  const menuItems = ['Dashboard', 'Settings', 'Earnings'];
</script>

<Navbar class="ml-10">
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-2.5 h-6 sm:h-8" alt="Flowbite Logo" />
    <span class="ml-px self-center text-xl font-semibold whitespace-nowrap sm:text-2xl dark:text-white"> Flowbite </span>
  </NavBrand>
  <div class="hidden lg:block lg:ps-3">
    {#if list}
      <NavUl class="ml-2" activeUrl="/" activeClass="text-primary-600 dark:text-primary-500">
        <NavLi href="/">Home</NavLi>
        <NavLi href="#top">Messages</NavLi>
        <NavLi href="#top">Profile</NavLi>
        <NavLi href="#top">Settings</NavLi>
        <NavLi class="cursor-pointer">
          Dropdown
          <ChevronDownOutline class="ms-0 inline" />
        </NavLi>
        <Dropdown class="z-20 w-44">
          <DropdownItem href="#top">Item 1</DropdownItem>
          <DropdownItem href="#top">Item 2</DropdownItem>
          <DropdownItem href="#top">Item 3</DropdownItem>
        </Dropdown>
      </NavUl>
    {:else}
      <form>
        <Search size="md" class="mt-1 w-96 border focus:outline-none" />
      </form>
    {/if}
  </div>
  <div class="ms-auto flex items-center text-gray-500 sm:order-2 dark:text-gray-300">
    <Notifications />
    <AppsMenu {menu} />
    <DarkMode />
    <UserMenu {...Users[4]} {menuItems}>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </UserMenu>
  </div>
</Navbar>
