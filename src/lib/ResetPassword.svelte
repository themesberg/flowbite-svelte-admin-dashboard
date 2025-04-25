<script lang="ts">
  import { Button, Card, Checkbox } from 'flowbite-svelte';
  import { twMerge } from 'tailwind-merge';
  import type { RestPasswordProps } from './types';

  let {
    children,
    title = 'Reset your password',
    site,
    btnTitle = 'Create account',
    mainClass = 'bg-gray-50 dark:bg-gray-900 w-full',
    mainDivClass,
    siteLinkClass,
    siteImgClass,
    cardH1Class,
    cardDiv3Class,
    userImgClass,
    acceptTerms = true,
    termsLink = '/',
    termsLinkClass,
    ...restProps
  }: RestPasswordProps = $props();

  const siteDefault = {
    name: 'Flowbite',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'FlowBite Logo'
  };
  const siteOptions = $derived(site ?? siteDefault);

  const mainDivCls = twMerge('flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900', mainDivClass);
  const siteLinkCls = twMerge('flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white', siteLinkClass);
  const siteImgCls = twMerge('mr-4 h-11', siteImgClass);
  const cardH1Cls = twMerge('mb-3 text-2xl font-bold text-gray-900 dark:text-white', cardH1Class);
  const cardDiv3Cls = twMerge('flex space-x-4', cardDiv3Class);
  const userImgCls = twMerge('w-8 h-8 rounded-full', userImgClass);
  const termsLinkCls = twMerge('text-primary-700 hover:underline dark:text-primary-500', termsLinkClass);

  const preventDefault = <E extends Event>(fn: (event: E) => void) => {
    return function (this: any, event: E) {
      event.preventDefault();
      fn.call(this, event);
    };
  };
  const handler = () => {
    alert('Submitted!');
  };
</script>

<main class={mainClass}>
  <div class={mainDivCls}>
    <a href={siteOptions.link} class={siteLinkClass}>
      <img src={siteOptions.img} class={siteImgCls} alt={siteOptions.imgAlt} />
      <span>{siteOptions.name}</span>
    </a>
    <!-- Card -->
    <Card class="w-full p-4 sm:p-6" size="md">
      <h1 class={cardH1Cls}>
        {title}
      </h1>
      <form class="mt-8 space-y-6" onsubmit={preventDefault(handler)} {...restProps}>
        {@render children()}
        {#if acceptTerms}
          <Checkbox class="accent-primary-600">
            <span>
              I accept the <a href={termsLink} class={termsLinkCls}>Terms and Conditions</a>
            </span>
          </Checkbox>
        {/if}
        <Button type="submit">{btnTitle}</Button>
      </form>
    </Card>
  </div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[RestPasswordProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L281)
## Props
@prop children
@prop title = 'Reset your password'
@prop site
@prop btnTitle = 'Create account'
@prop mainClass = 'bg-gray-50 dark:bg-gray-900 w-full'
@prop mainDivClass
@prop siteLinkClass
@prop siteImgClass
@prop cardH1Class
@prop cardDiv3Class
@prop userImgClass
@prop acceptTerms = true
@prop termsLink = '/'
@prop termsLinkClass
@prop ...restProps
-->
