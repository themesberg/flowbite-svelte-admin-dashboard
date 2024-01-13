<script>
	import { Button, Card, Heading, Label, Input } from 'flowbite-svelte';
	import { DesktopPcOutline, MobilePhoneOutline } from 'flowbite-svelte-icons';
</script>

<Card size="xl" class="gap-4">
	<Heading tag="h3" class="text-xl tracking-wide font-medium">Sessions</Heading>
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		<li class="py-4">
			<div class="flex items-center space-x-4">
				<div class="flex-shrink-0">
					<DesktopPcOutline />
				</div>
				<div class="flex-1 min-w-0">
					<p class="text-base font-semibold text-gray-900 truncate dark:text-white">
						California 123.123.123.123
					</p>
					<p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
						Chrome on macOS
					</p>
				</div>
				<div class="inline-flex items-center">
					<a
						href="#"
						class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
				<div class="flex-1 min-w-0">
					<p class="text-base font-semibold text-gray-900 truncate dark:text-white">
						Rome 24.456.355.98
					</p>
					<p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
						Safari on iPhone
					</p>
				</div>
				<div class="inline-flex items-center">
					<a
						href="#"
						class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						>Revoke</a
					>
				</div>
			</div>
		</li>
	</ul>
	<Button class="w-fit">See more</Button>
</Card>
