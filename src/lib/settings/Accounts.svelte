<script>
	import { imagesPath } from '$lib/variables';
	import { Avatar, Button, Card, Heading } from 'flowbite-svelte';
	import Users from '../../routes/data/users.json';
</script>

<Card size="xl" class="gap-4">
	<Heading tag="h3" class="text-xl font-medium tracking-wide">Other accounts</Heading>
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		{#each Users.slice(0, 4) as { avatar, name, country, status }}
			<li class="py-4">
				<div class="flex items-center space-x-4">
					<div class="flex-shrink-0">
						<Avatar src={imagesPath(avatar, 'users')} />
					</div>
					<div class="min-w-0 flex-1">
						<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
							{name}
						</p>
						<p class="truncate text-sm font-normal text-primary-700 dark:text-primary-500">
							{country}
						</p>
						<p class="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
							Last seen: {Math.ceil(Math.random() * 10)} min ago
						</p>
					</div>
					<div class="inline-flex items-center">
						{#if status === 'Active'}
							<Button color="alternative">Disconnect</Button>
						{:else}
							<Button>Connect</Button>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<Button class="w-fit">See more</Button>
</Card>
