<script lang="ts">
  import { A, Checkbox, Button, Card } from 'flowbite-svelte';
  import type { HTMLFormAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface SiteType {
    name: string;
    img: string;
    link: string;
    imgAlt: string;
  }

  interface Props extends HTMLFormAttributes {
    children: Snippet;
    site?: SiteType;
    title?: string;
    haveAccount?: boolean;
    acceptTerms?: boolean;
    btnTitle?: string;
    termsLink?: string;
    loginLink?: string;
    pageDescription?: string;
    mainClass?: string;
    mainDivClass?: string;
    siteLinkClass?: string;
    siteImgClass?: string;
    cardH1Class?: string;
    haveAccoutDivClass?: string;
  }
  let {
    children,
    title = 'Create a Free Account',
    site,
    haveAccount = true,
    acceptTerms = true,
    btnTitle = 'Create account',
    termsLink = '/',
    loginLink = '/',
    mainClass = 'bg-gray-50 dark:bg-gray-900 w-full',
    mainDivClass,
    siteLinkClass,
    siteImgClass,
    cardH1Class,
    haveAccoutDivClass,
    ...restProps
  }: Props = $props();

  const siteDefault = {
    name: 'Flowbite',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'FlowBite Logo'
  };
  const actualSite = $derived(site ?? siteDefault);

  const mainDivCls = twMerge('flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900', mainDivClass);
  const siteLinkCls = twMerge('flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white', siteLinkClass);
  const siteImgCls = twMerge('mr-4 h-11', siteImgClass);
  const cardH1Cls = twMerge('mb-3 text-2xl font-bold text-gray-900 dark:text-white', cardH1Class);
  const haveAccountDivCls = twMerge('text-sm font-medium text-gray-500 dark:text-gray-300', haveAccoutDivClass);

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
    <a href={actualSite.link} class={siteLinkCls}>
      <img src={actualSite.img} class={siteImgCls} alt={actualSite.imgAlt} />
      <span>{actualSite.name}</span>
    </a>
    <!-- Card -->
    <Card class="w-full p-4 sm:p-6" size="md">
      <h1 class={cardH1Cls}>
        {title}
      </h1>
      <form class="mt-8 space-y-6" onsubmit={preventDefault(handler)} {...restProps}>
        {@render children()}
        {#if acceptTerms}
          <Checkbox class="pt-1" name="accept">
            <span>
              I accept the <A href={termsLink}>Terms and Conditions</A>
            </span>
          </Checkbox>
        {/if}
        <Button type="submit" size="lg">{btnTitle}</Button>
        {#if haveAccount}
          <div class={haveAccountDivCls}>
            Already have an account? <A href={loginLink}>Login here</A>
          </div>
        {/if}
      </form>
    </Card>
  </div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let title = 'Create a Free Account';
@prop export let site = {
		name: 'Flowbite1',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo1'
	};
@prop export let acceptTerms: boolean = true;
@prop export let haveAccount: boolean = true;
@prop export let btnTitle = 'Create account';
@prop export let termsLink = '/';
@prop export let loginLink = '/';
@prop export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
@prop export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
@prop export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
@prop export let siteImgClass = 'mr-4 h-11';
@prop export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';
@prop export let haveAccountDivClass = 'text-sm font-medium text-gray-500 dark:text-gray-300';
-->
