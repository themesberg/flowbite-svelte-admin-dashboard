<script lang="ts">
	import { Input, Label, type InputType, Card, Heading, Button } from 'flowbite-svelte';

	const inputs: { label: string; type: InputType; placeholder: string }[] = [
		{ label: 'First Name', type: 'text', placeholder: 'Bonie' },
		{ label: 'Last Name', type: 'text', placeholder: 'Green' },
		{ label: 'Country', type: 'text', placeholder: 'United States' },
		{ label: 'City', type: 'text', placeholder: 'e.g. San Francisco' },
		{ label: 'Address', type: 'text', placeholder: 'e.g. California' },
		{ label: 'Email', type: 'text', placeholder: 'example@company.com' },
		{ label: 'Phone Number', type: 'text', placeholder: 'e.g. +(12)3456 789' },
		{ label: 'Birthday', type: 'text', placeholder: '15/08/1980' },
		{ label: 'Organization', type: 'text', placeholder: 'Company Name' },
		{ label: 'Role', type: 'text', placeholder: 'Svelte Developer' },
		{ label: 'Department', type: 'text', placeholder: 'Development' },
		{ label: 'Zip/postal code', type: 'text', placeholder: '123456' }
	];
</script>

<Card size="xl">
	<Heading tag="h3" class="mb-4 text-xl font-medium tracking-wide dark:text-white"
		>General Information</Heading
	>
	<form class="grid grid-cols-6 gap-6">
		{#each inputs as { label, type, placeholder }}
			<Label class="col-span-6 space-y-2 sm:col-span-3">
				<span>{label}</span>
				<Input {type} {placeholder} class="font-normal" />
			</Label>
		{/each}
		<Button>Save all</Button>
	</form>
</Card>
