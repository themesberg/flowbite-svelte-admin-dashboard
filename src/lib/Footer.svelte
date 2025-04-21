<script lang="ts">
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from 'flowbite-svelte';
  import type { Snippet } from 'svelte';
  type BrandType = {
    name: string;
    href: string;
    src: string;
    alt: string;
  };
  type FooterLink = {
    className: string;
    href: string;
    item: string;
  };

  type Menu = {
    title: string;
    links: FooterLink[];
  };

  interface FooterProps {
    brand: BrandType;
    description?: Snippet;
    menus: Menu[];
  }

  let { brand, description, menus }: FooterProps = $props();
</script>

<Footer footerType="socialmedia" class="mt-12">
  <div class="container mx-auto px-4 sm:py-12 md:px-0">
    <div class="md:flex md:justify-between">
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-6 sm:gap-6">
        <div class="col-span-2 mb-6 md:mb-0">
          <FooterBrand href={brand.href} src={brand.src} alt={brand.alt} name={brand.name} />
          {#if description}
            {@render description()}
          {/if}
        </div>
        {#each menus as menu}
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{menu.title}</h2>
            <FooterLinkGroup>
              {#each menu.links as { className, href, item }}
                <FooterLink liClass={className} {href}>{item}</FooterLink>
              {/each}
            </FooterLinkGroup>
          </div>
        {/each}
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div class="sm:flex sm:items-center sm:justify-center">
      <FooterCopyright href="/" by="Flowbite™" />
    </div>
  </div>
</Footer>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
FooterProps
## Props
@prop brand
@prop description
@prop menus
-->
