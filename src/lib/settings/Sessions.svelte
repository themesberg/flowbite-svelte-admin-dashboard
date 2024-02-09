<script>
	import { Button, Card, Heading, Label, Input } from 'flowbite-svelte';
	import { DesktopPcOutline, MobilePhoneOutline } from 'flowbite-svelte-icons';
</script>

<Card size="xl" class="gap-4">
	<Heading tag="h3" class="text-xl font-medium tracking-wide">Sessions</Heading>
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		<li class="py-4">
			<div class="flex items-center space-x-4">
				<div class="flex-shrink-0">
					<DesktopPcOutline />
				</div>
				<div class="min-w-0 flex-1">
					<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
						California 123.123.123.123
					</p>
					<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
						Chrome on macOS
					</p>
				</div>
				<div class="inline-flex items-center">
					<a
						href="#top"
						class="mb-3 mr-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Revoke</a
					>
				</div>
			</div>
		</li>
		<li class="py-4">
			<div class="flex items-center space-x-4">
				<div class="flex-shrink-0">
					<MobilePhoneOutline />
				</div>
				<div class="min-w-0 flex-1">
					<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
						Rome 24.456.355.98
					</p>
					<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
						Safari on iPhone
					</p>
				</div>
				<div class="inline-flex items-center">
					<a
						href="#top"
						class="mb-3 mr-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Revoke</a
					>
				</div>
			</div>
		</li>
	</ul>
	<Button class="w-fit">See more</Button>
</Card>
