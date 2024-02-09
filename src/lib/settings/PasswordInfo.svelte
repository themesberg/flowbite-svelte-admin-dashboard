<script>
	import { Button, Card, Heading, Label, Input } from 'flowbite-svelte';
</script>

<Card size="xl" class="gap-4">
	<Heading tag="h3" class="text-xl font-medium tracking-wide">Password Information</Heading>
	<div class="grid grid-cols-6 gap-6">
		<Label class="col-span-6 space-y-2 sm:col-span-3">
			<span>Current password</span>
			<Input placeholder="••••••••" class="font-normal"></Input>
		</Label>
		<Label class="col-span-6 space-y-2 sm:col-span-3">
			<span>New password</span>
			<Input placeholder="••••••••" class="font-normal"></Input>
		</Label>
		<Label class="col-span-6 space-y-2 sm:col-span-3">
			<span>Confirm password</span>
			<Input placeholder="••••••••" class="font-normal"></Input>
		</Label>
		<Button class="sm:col-full col-span-6 w-fit">Save all</Button>
	</div>
</Card>
