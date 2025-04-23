<script lang="ts">
  import { Checkbox, A, Button, Card } from 'flowbite-svelte';
  import { twMerge } from 'tailwind-merge';
  import type { SingInProps } from './types';

  let {
    children,
    title = 'Sign in to platform',
    site,
    rememberMe = true,
    lostPassword = true,
    createAccount = true,
    lostPasswordLink,
    loginTitle = 'Login to your account',
    registerLink,
    createAccountTitle = 'Create account',
    mainClass = 'bg-gray-50 dark:bg-gray-900 w-full',
    mainDivClass,
    siteLinkClass,
    siteImgClass,
    cardH1Class,
    ...restProps
  }: SingInProps = $props();

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
    <Card class="w-full p-4 sm:p-6" size="md">
      <h1 class={cardH1Cls}>
        {title}
      </h1>
      <form class="mt-8 space-y-6" onsubmit={preventDefault(handler)} {...restProps}>
        {@render children()}
        {#if rememberMe || lostPassword}
          <div class="flex items-start">
            {#if rememberMe}
              <Checkbox class="accent-primary-600" name="remember">Remember me</Checkbox>
            {/if}
            {#if lostPassword}
              <A href={lostPasswordLink} class="ml-auto text-sm">Lost Password?</A>
            {/if}
          </div>
        {/if}
        <Button type="submit" size="lg">{loginTitle}</Button>
        {#if createAccount}
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <A href={registerLink}>{createAccountTitle}</A>
          </div>
        {/if}
      </form>
    </Card>
  </div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[SingInProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L298)
## Props
@prop children
@prop title = 'Sign in to platform'
@prop site
@prop rememberMe = true
@prop lostPassword = true
@prop createAccount = true
@prop lostPasswordLink
@prop loginTitle = 'Login to your account'
@prop registerLink
@prop createAccountTitle = 'Create account'
@prop mainClass = 'bg-gray-50 dark:bg-gray-900 w-full'
@prop mainDivClass
@prop siteLinkClass
@prop siteImgClass
@prop cardH1Class
@prop ...restProps
-->
