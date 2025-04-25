<script lang="ts">
  import { AppsMenu } from '$lib';
  import {
    ArchiveSolid,
    ArrowRightToBracketOutline,
    CogOutline,
    DollarOutline,
    InboxOutline,
    ProfileCardOutline,
    SalePercentOutline,
    ShoppingBagSolid,
    UsersGroupSolid
  } from 'flowbite-svelte-icons';
const menu = [
    { name: 'Sales', href: '/', icon: ShoppingBagSolid },
    { name: 'Users', href: '/', icon: UsersGroupSolid },
    { name: 'Inbox', href: '/', icon: InboxOutline },
    { name: 'Profile', href: '/', icon: ProfileCardOutline },
    { name: 'Settings', href: '/settings', icon: CogOutline },
    { name: 'Prouducts', href: '/', icon: ArchiveSolid },
    { name: 'Pricing', href: '/pages/pricing', icon: DollarOutline },
    { name: 'Billing', href: '/', icon: SalePercentOutline },
    { name: 'Logout', href: '/', icon: ArrowRightToBracketOutline }
  ];
</script>

<AppsMenu {menu} />