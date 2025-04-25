<script lang="ts">
  import { Button, Card, Checkbox, P } from 'flowbite-svelte';
  import { LockOpenSolid } from 'flowbite-svelte-icons';
  import { twMerge } from 'tailwind-merge';
  import type { ProfileLockProps } from './types';

  let {
    children,
    site,
    user,
    btnTitle = 'Unlock',
    pageDescription = 'Better to be safe than sorry.',
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
  }: ProfileLockProps = $props();

  const siteDefault = {
    name: 'Flowbite',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'FlowBite Logo'
  };
  const siteOptions = $derived(site ?? siteDefault);
  const userDefault = {
    name: 'Bonnie Green',
    img: '/images/users/bonnie-green.png',
    imgAlt: 'Bonnie Green'
  };
  const acturalUser = $derived(user ?? userDefault);

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
    <a href={siteOptions.link} class={siteLinkCls}>
      <img src={siteOptions.img} class={siteImgCls} alt={siteOptions.imgAlt} />
      <span>{siteOptions.name}</span>
    </a>
    <!-- Card -->
    <Card class="w-full max-w-md p-4 sm:p-6">
      <div class={cardDiv3Cls}>
        <img class={userImgCls} src={acturalUser.img} alt={acturalUser.imgAlt} />
        <h1 class={cardH1Cls}>{acturalUser.name}</h1>
      </div>
      <P class="text-base font-normal text-gray-500 dark:text-gray-300">
        {pageDescription}
      </P>
      <form class="mt-8 space-y-6" onsubmit={preventDefault(handler)} {...restProps}>
        {@render children()}
        {#if acceptTerms}
          <Checkbox class="accent-primary-600">
            <span>
              I accept the <a href={termsLink} class={termsLinkCls}>Terms and Conditions</a>
            </span>
          </Checkbox>
        {/if}
        <Button size="lg" type="submit">
          <LockOpenSolid size="lg" class="mr-2" />
          {btnTitle}
        </Button>
      </form>
    </Card>
  </div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ProfileLockProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L263)
## Props
@prop children
@prop site
@prop user
@prop btnTitle = 'Unlock'
@prop pageDescription = 'Better to be safe than sorry.'
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
