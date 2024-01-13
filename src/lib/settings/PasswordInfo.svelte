<script>
	import { Button, Card, Heading, Label, Input } from 'flowbite-svelte';
</script>

<Card size="xl" class="gap-4">
	<Heading tag="h3" class="text-xl tracking-wide font-medium">Password Information</Heading>
	<div class="grid grid-cols-6 gap-6">
		<Label class="space-y-2 col-span-6 sm:col-span-3">
			<span>Current password</span>
			<Input placeholder="••••••••" class="font-normal"></Input>
		</Label>
		<Label class="space-y-2 col-span-6 sm:col-span-3">
			<span>New password</span>
			<Input placeholder="••••••••" class="font-normal"></Input>
		</Label>
		<Label class="space-y-2 col-span-6 sm:col-span-3">
			<span>Confirm password</span>
			<Input placeholder="••••••••" class="font-normal"></Input>
		</Label>
		<Button class="w-fit col-span-6 sm:col-full">Save all</Button>
	</div>
</Card>
