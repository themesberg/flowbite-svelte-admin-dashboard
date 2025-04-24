<script lang="ts">
  import { Stats, More } from '$lib';
  import { P } from 'flowbite-svelte';
  import Customers from '../../../data/users.json';

  const products = [
    {
      src: 'iphone.png',
      image: 'iphone',
      label: 'iPhone 14 Pro',
      change: 2.5,
      price: '$445,467'
    },
    {
      src: 'imac.png',
      image: 'imac',
      label: 'Apple iMac 27',
      change: 12.5,
      price: '$256,982'
    },
    {
      src: 'watch.png',
      image: 'watch',
      label: 'Apple Watch SE',
      change: -1.35,
      price: '$201,869'
    },
    {
      src: 'ipad.png',
      image: 'ipad',
      label: 'Apple iPad Air',
      change: 12.5,
      price: '$103,967'
    },
    {
      src: 'imac.png',
      image: 'imac',
      label: 'Apple iMac 24',
      change: -2,
      price: '$98,543 '
    }
  ];
  const statsCont = {
    title: 'Statistics this month',
    popoverTitle: 'Statistics',
    tab1Title: 'Top products',
    tab2Title: 'Top customers'
  };

  const customers = Customers.slice(0, 5);
</script>

<Stats {products} {customers} {...statsCont}>
  {#snippet popoverDesc()}
    <P>Statistics is a branch of applied mathematics that involves the collection, description, analysis, and inference of conclusions from quantitative data.</P>
    <More title="Read more" href="#top" flat />
  {/snippet}
</Stats>