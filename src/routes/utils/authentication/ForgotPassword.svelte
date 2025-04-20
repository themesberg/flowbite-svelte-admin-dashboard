<script lang="ts">
	import { Button, Card, P } from 'flowbite-svelte';
	import type { HTMLFormAttributes } from "svelte/elements";
	import type { Snippet } from 'svelte';
	interface SiteType{
		name: string;
		img: string;
		link: string;
		imgAlt: string;
	}
	interface Props extends HTMLFormAttributes{
		children: Snippet;
		title?: string;
		site?: SiteType;
		btnTitle?: string;
		pageDescription?: string;
		mainClass?: string;
		mainDivClass?: string;
		siteLinkClass?: string;
		siteImgClass?: string;
		cardH1Class?: string;
	}

	let { children, title = 'Forgot your password?', 
	site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	}, 
	btnTitle = 'Reset password', 
	pageDescription =
		"Don't fret! Just type in your email and we will send you a code to reset your password!",
	mainClass = 'bg-gray-50 dark:bg-gray-900',
	mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900',
  siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white',
	siteImgClass = 'mr-4 h-11',
cardH1Class = 'mb-3 text-2xl font-bold text-gray-900 dark:text-white', ...restProps
}: Props = $props();
</script>

<main class={mainClass}>
	<div class={mainDivClass}>
		{#if site}
		<a href={site.link} class={siteLinkClass}>
			<img src={site.img} class={siteImgClass} alt={site.imgAlt} />
			<span>{site.name}</span>
		</a>
		{/if}
		<!-- Card -->
		<Card class="w-full max-w-md p-4 sm:p-6">
			<h1 class={cardH1Class}>{title}</h1>
			<P class="text-base font-normal text-gray-500 dark:text-gray-400">
				{pageDescription}
			</P>
			<form class="mt-8 space-y-6"{...restProps} >
				{@render children()}
				<Button type="submit" size="lg">{btnTitle}</Button>
			</form>
		</Card>
	</div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let title = 'Forgot your password?';
@prop export let site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
@prop export let btnTitle = 'Reset password';
@prop export let pageDescription =
		"Don't fret! Just type in your email and we will send you a code to reset your password!";
@prop export let mainClass = 'bg-gray-50 dark:bg-gray-900';
@prop export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
@prop export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
@prop export let siteImgClass = 'mr-4 h-11';
@prop export let cardH1Class = 'mb-3 text-2xl font-bold text-gray-900 dark:text-white';
-->
