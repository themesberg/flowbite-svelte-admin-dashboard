<script>
	import { Button, Card, Heading, Label, Select } from 'flowbite-svelte';
	const languages = [
		{ name: 'English (US)', value: 'en' },
		{ name: 'Italiano', value: 'it' },
		{ name: 'Français (France)', value: 'fr' },
		{ name: '正體字', value: 'ch' },
		{ name: 'Español (España)', value: 'es' },
		{ name: 'Deutsch', value: 'de' },
		{ name: 'Português (Brasil)', value: 'pt' }
	];

	const timezones = [
		{ name: 'GMT+0 Greenwich Mean Time (GMT)', value: '0' },
		{ name: 'GMT+1 Central European Time (CET)', value: '1' },
		{ name: 'GMT+2 Eastern European Time (EET)', value: '2' },
		{ name: 'GMT+3 Moscow Time (MSK)', value: '3' },
		{ name: 'GMT+5 Pakistan Standard Time (PKT)', value: '4' },
		{ name: 'GMT+8 China Standard Time (CST)', value: '5' },
		{ name: 'GMT+10 Eastern Australia Standard Time (AEST)', value: '6' }
	];
</script>

<Card size="xl" class="gap-4">
	<Heading tag="h3" class="text-xl font-medium tracking-wide">Language &amp; Time</Heading>
	<Label class="space-y-2">
		<span>Select language</span>
		<Select items={languages} class="font-normal"></Select>
	</Label>
	<Label class="space-y-2">
		<span>Time Zone</span>
		<Select items={timezones} class="font-normal"></Select>
	</Label>
	<Button class="w-fit">Save all</Button>
</Card>
