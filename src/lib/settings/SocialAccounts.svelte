<script>
	import { A, Button, Card, Heading } from 'flowbite-svelte';
	import { DribbbleSolid, GithubSolid, TwitterSolid } from 'flowbite-svelte-icons';

	const items = [
		{ icon: TwitterSolid, name: 'Twitter account', link: 'www.twitter.com/themesberg' },
		{ icon: GithubSolid, name: 'Github account', link: '' },
		{ icon: DribbbleSolid, name: 'Dribble account', link: '' }
	];
</script>

<Card size="xl" class="gap-4">
	<Heading tag="h3" class="text-xl font-medium tracking-wide">Social accounts</Heading>
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		{#each items as { icon, name, link }}
			<li class="py-4">
				<div class="flex items-center space-x-4">
					<div class="flex-shrink-0">
						<svelte:component this={icon} />
					</div>
					<div class="min-w-0 flex-1">
						<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
							{name}
						</p>
						<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
							{#if link}
								<A href="">{link}</A>
							{:else}
								Not connected
							{/if}
						</p>
					</div>
					<div class="inline-flex items-center">
						{#if link}
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
