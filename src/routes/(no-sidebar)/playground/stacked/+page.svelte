<script>
	import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-svelte';
	import Navbar from '../../../(sidebar)/Navbar.svelte';
	import Playground from './Playground.svelte';
</script>

<svelte:head>
	<title>Tailwind CSS Pricing Page - Flowbite</title>
</svelte:head>

<Navbar fluid={false} />
<div
	id="main-content"
	class="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto bg-gray-50 dark:bg-gray-900"
>
	<Playground />
	<Footer class="flex justify-between px-4 py-6 text-sm md:py-10 xl:px-0">
		<FooterCopyright href="/" by="2023 Flowbite.com" year={2019} spanClass="text-gray-500" />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<FooterLink href="/">Terms</FooterLink>
			<FooterLink href="/">Licensing</FooterLink>
			<FooterLink href="/">Cookie Policy</FooterLink>
			<FooterLink href="/">Contact</FooterLink>
		</FooterLinkGroup></Footer
	>
</div>
