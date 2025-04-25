<script lang="ts">
  import { imagesPath } from './variables';
  import { twMerge } from 'tailwind-merge';
  import { Button, P } from 'flowbite-svelte';
  import type { MaintenanceProps } from './types';

  let {
    title = 'Under Maintenance',
    description = 'Sorry for the inconvenience but we’re performing some maintenance at the moment. If you need to you can always <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">contact us</a>, otherwise we’ll be back online shortly!.',
    image,
    btnTitle = 'Go back home',
    btnHref = '/',
    mainClass = 'bg-gray-50 dark:bg-gray-900',
    mainDivClass,
    h1Class,
    imgDiv = 'block mb-5 md:max-w-md',
    div2Class = 'text-center xl:max-w-4xl'
  }: MaintenanceProps = $props();

  const imageDefault = {
    src: imagesPath('illustrations/maintenance.svg'),
    alt: 'maintenance'
  };
  const imageOptions = $derived(image ?? imageDefault);

  const mainDivCls = twMerge('flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900', mainDivClass);
  const h1Cls = twMerge('mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white', h1Class);
</script>

<main class={mainClass}>
  <div class={mainDivCls}>
    <div class={imgDiv}>
      <img src={imageOptions.src} alt={imageOptions.alt} />
    </div>
    <div class={div2Class}>
      <h1 class={h1Cls}>{title}</h1>
      <P class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-300">
        {@html description}
      </P>
      <Button href={btnHref}>
        <svg class="mr-2 -ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          ><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg
        >
        {btnTitle}
      </Button>
    </div>
  </div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[MaintenanceProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L201)
## Props
@prop title = 'Under Maintenance'
@prop description = 'Sorry for the inconvenience but we’re performing some maintenance at the moment. If you need to you can always <a href
@prop image
@prop btnTitle = 'Go back home'
@prop btnHref = '/'
@prop mainClass = 'bg-gray-50 dark:bg-gray-900'
@prop mainDivClass
@prop h1Class
@prop imgDiv = 'block mb-5 md:max-w-md'
@prop div2Class = 'text-center xl:max-w-4xl'
-->
