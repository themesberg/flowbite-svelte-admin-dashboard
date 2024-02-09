<script lang="ts">
	import { Avatar, Card, Heading, TabItem, Tabs } from 'flowbite-svelte';
	import Change from './Change.svelte';
	import Customers from '../../data/users.json';
	import { avatarPath, imagesPath } from '$lib/variables';

	const products = [
		{
			src: 'iphone.png',
			image: 'iphone',
			label: 'iPhone 14 Pro',
			change: 2.5,
			price: '$445,467'
		},
		{
			src: 'imac.png',
			image: 'imac',
			label: 'Apple iMac 27',
			change: 12.5,
			price: '$256,982'
		},
		{
			src: 'watch.png',
			image: 'watch',
			label: 'Apple Watch SE',
			change: -1.35,
			price: '$201,869'
		},
		{
			src: 'ipad.png',
			image: 'ipad',
			label: 'Apple iPad Air',
			change: 12.5,
			price: '$103,967'
		},
		{
			src: 'imac.png',
			image: 'imac',
			label: 'Apple iMac 24',
			change: -2,
			price: '$98,543 '
		}
	];

	const customers = Customers.slice(0, 5);
</script>

<Card size="xl">
	<Heading tag="h3" class="mb-4 text-lg font-medium tracking-wide dark:text-white"
		>Statistics this month</Heading
	>
	<Tabs
		style="full"
		defaultClass="flex divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
	>
		<TabItem class="w-full">
			<span slot="title">Top products</span>
			<ul class="divide-y divide-gray-200 dark:divide-gray-700">
				{#each products as { src, image, label, price, change }}
					<li class="py-3 sm:py-4">
						<div class="flex items-center justify-between">
							<div class="flex min-w-0 items-center">
								<img
									class="h-10 w-10 flex-shrink-0"
									src={imagesPath(src, 'products')}
									alt={image}
								/>
								<div class="ml-3">
									<p class="truncate font-medium text-gray-900 dark:text-white">
										{label}
									</p>
									<Change value={change} />
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
		<TabItem class="w-full" open>
			<span slot="title">Top customers</span>
			<ul class="divide-y divide-gray-200 dark:divide-gray-700">
				{#each customers as { email, name, avatar }}
					<li class="py-3 sm:py-3.5">
						<div class="flex items-center justify-between">
							<div class="flex min-w-0 items-center">
								<Avatar src={imagesPath(avatar, 'users')} />
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
</Card>
