<script lang="ts">
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';

	export let id: number = 0; // 1,
	export let name: string = ''; // "Neil Sims",
	export let avatar: string = ''; // "neil-sims.png",
	export let email: string = ''; // "neil.sims@flowbite.com",
	export let biography: string = ''; // "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
	export let position: string = ''; // "Front-end developer",
	export let country: string = ''; // "United States",
	export let status: string = ''; // "Active"
</script>

<button class="focus:ring-4 ring-gray-400 dark:ring-gray-600 rounded-full mr-2">
	<Avatar
		size="sm"
		src="https://flowbite.com/docs/images/people/profile-picture-{id}.jpg"
		tabindex="0"
	/>
</button>
<Dropdown>
	<DropdownHeader>
		<span class="block text-sm">{name}</span>
		<span class="block truncate text-sm font-medium">{email}</span>
	</DropdownHeader>
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownItem>Earnings</DropdownItem>
	<DropdownDivider />
	<DropdownItem>Sign out</DropdownItem>
</Dropdown>
