<script lang="ts">
	import { Avatar, Card, Heading, Popover, TabItem, Tabs } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';
	import {Change, More, LastRange } from '$lib';
	import { imagesPath } from './variables';
	import { QuestionCircleSolid } from 'flowbite-svelte-icons';
  type ProductType = {
		id?: string;
		name?: string;
		src?: string;
		image?: string;
		label?: string;
		change?: number;
		price?: string;
		attributes?: {
			[key: string]: any;
		};
		metadata?: Record<string, any>;
	}
	type CustomerType = {
		id?: number;
		name?: string;
		avatar?: string;
		email?: string;
		biography?: string;
		position?: string;
		country?: string;
		status?: string;
	}
	interface Props{
		products: ProductType[];
    customers: CustomerType[];
		title?: string;
		popoverTitle?: string;
		popoverDesc?: Snippet;
		tab1Title?: string;
		tab2Title?: string;
	}
	let { products, customers, title, popoverTitle, popoverDesc, tab1Title, tab2Title }:Props = $props();

</script>

<Card size="xl" class="p-4 sm:p-6">
	<div class="mb-4 flex items-center gap-2">
		<Heading tag="h3" class="w-fit text-lg font-semibold dark:text-white">
			{title}
		</Heading>
		<button>
			<span class="sr-only">Show information</span>
			<QuestionCircleSolid size="sm" class="text-gray-400 hover:text-gray-500" />
		</button>
		<Popover placement="bottom-start">
			<div class="w-72 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-300">
				<h3 class="font-semibold text-gray-900 dark:text-white">{popoverTitle}</h3>
				{#if popoverDesc}
				  {@render popoverDesc()}
			  {/if}
			</div>
		</Popover>
	</div>
	<Tabs
		style="full"
		class="flex divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
		contentClass="p-3 mt-4"
	>
		<TabItem class="w-full" open>
			{#snippet titleSlot()}
			  {tab1Title}
			{/snippet}
			<ul class="-m-3 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
				{#each products as { src, image, label, price, change }}
					<li class="py-3 sm:py-4">
						<div class="flex items-center justify-between">
							<div class="flex min-w-0 items-center">
								<img
									class="h-10 w-10 flex-shrink-0"
									src={src ? imagesPath(src, 'products') : ''}
									alt={image}
								/>
								<div class="ml-3">
									<p class="truncate font-medium text-gray-900 dark:text-white">
										{label}
									</p>
									<Change value={change} size="sm" equalHeight class="ml-px" />
								</div>
							</div>
							<div
								class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
							>
								{price}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</TabItem>
		<TabItem class="w-full">
			{#snippet titleSlot()}
				{tab2Title}
			{/snippet}
			<ul class="-m-3 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
				{#each customers as { email, name, avatar }}
					<li class="py-3 sm:py-3.5">
						<div class="flex items-center justify-between">
							<div class="flex min-w-0 items-center">
								<Avatar src={avatar ? imagesPath(avatar, 'users') : ''} />
								<div class="ml-3">
									<p class="truncate font-medium text-gray-900 dark:text-white">
										{name}
									</p>
									<span class="text-gray-500">{email}</span>
								</div>
							</div>
							<div
								class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
							>
								${Math.floor(Math.random() * 10000)}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</TabItem>
	</Tabs>

	<div
		class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6"
	>
		<LastRange />
		<More title="Full Report" href="#top" />
	</div>
</Card>
