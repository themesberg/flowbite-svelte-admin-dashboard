<script lang="ts">
	import { Button, Card, Checkbox } from 'flowbite-svelte';
	import type { HTMLFormAttributes } from "svelte/elements";
  import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface SiteType{
		name: string;
		img: string;
		link: string;
		imgAlt: string;
	}
	interface UserType{
		name: string;
		img: string;
		imgAlt: string;
	}
	interface Props extends HTMLFormAttributes{
		children: Snippet;
		site?: SiteType;
		title?: string;
		acceptTerms?: boolean;
		btnTitle?: string;
		pageDescription?: string;
		mainClass?: string;
		mainDivClass?: string;
		siteLinkClass?: string;
		siteImgClass?: string;
		cardH1Class?: string;
		cardDiv3Class?: string;
		userImgClass?: string;
		termsLink?: string;
		termsLinkClass?: string;
	}
	let { children, title = 'Reset your password', site, btnTitle = 'Create account',  mainClass = 'bg-gray-50 dark:bg-gray-900 w-full', mainDivClass, siteLinkClass, siteImgClass, cardH1Class, cardDiv3Class, userImgClass, acceptTerms = true, termsLink = '/', termsLinkClass, ...restProps}:Props = $props();
	
	const siteDefault = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
	const actualSite = $derived(site ?? siteDefault);
	
	const mainDivCls = twMerge(
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900', mainDivClass);
	const siteLinkCls =
		twMerge('flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white', siteLinkClass);
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
  }
  const handler = ()=>{
    alert('Submitted!')
  }
</script>

<main class={mainClass}>
	<div class={mainDivCls}>
		<a href={actualSite.link} class={siteLinkClass}>
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
## Props
@prop export let title = 'Reset your password';
@prop export let site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
@prop export let acceptTerms: boolean = true;
@prop export let btnTitle = 'Create account';
@prop export let termsLink = '/';
@prop export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
@prop export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
@prop export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
@prop export let siteImgClass = 'mr-4 h-11';
@prop export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';
@prop export let termsLinkClass = 'text-primary-700 hover:underline dark:text-primary-500';
-->
