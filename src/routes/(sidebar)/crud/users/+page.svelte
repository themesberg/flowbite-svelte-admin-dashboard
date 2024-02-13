<script lang="ts">
	import {
		Avatar,
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Checkbox,
		Heading,
		Indicator
	} from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
	import { CogOutline, DotsVerticalOutline, DownloadSolid } from 'flowbite-svelte-icons';
	import {
		EditOutline,
		ExclamationCircleSolid,
		PlusSolid,
		TrashBinSolid
	} from 'flowbite-svelte-icons';
	import Users from '../../../data/users.json';
	import { imagesPath } from '$lib/variables';

	import User from './User.svelte';
	import Delete from './Delete.svelte';

	let openUser: boolean = false; // modal control
	let openDelete: boolean = false; // modal control

	let current_user: any = {};
</script>

<main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">
	<Breadcrumb class="mb-5">
		<BreadcrumbItem home>Home</BreadcrumbItem>
		<BreadcrumbItem href="/crud/users">Users</BreadcrumbItem>
		<BreadcrumbItem>List</BreadcrumbItem>
	</Breadcrumb>
	<Heading tag="h1" class="mb-4 text-xl sm:text-2xl">All users</Heading>

	<Toolbar embedded class="-mx-2 w-full p-2 text-gray-500 dark:text-gray-400">
		<ToolbarGroup class="w-80 xl:w-96">
			<Input placeholder="Search for users" />
		</ToolbarGroup>
		<ToolbarGroup>
			<ToolbarButton><CogOutline /></ToolbarButton>
			<ToolbarButton><TrashBinSolid /></ToolbarButton>
			<ToolbarButton><ExclamationCircleSolid /></ToolbarButton>
			<ToolbarButton><DotsVerticalOutline /></ToolbarButton>
		</ToolbarGroup>
		<div slot="end" class="space-x-2">
			<Button
				size="sm"
				class="gap-2 whitespace-nowrap"
				on:click={() => ((current_user = {}), (openUser = true))}
			>
				<PlusSolid size="xs" />Add user
			</Button>
			<Button size="sm" color="alternative" class="gap-2">
				<DownloadSolid size="xs" />Export
			</Button>
		</div>
	</Toolbar>

	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<TableHeadCell><Checkbox /></TableHeadCell>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Biography</TableHeadCell>
			<TableHeadCell>Position</TableHeadCell>
			<TableHeadCell>Country</TableHeadCell>
			<TableHeadCell>Status</TableHeadCell>
			<TableHeadCell>Actions</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each Users as user}
				<TableBodyRow>
					<TableBodyCell><Checkbox /></TableBodyCell>
					<TableBodyCell class="mr-12 flex items-center space-x-6 whitespace-nowrap p-4">
						<Avatar src={imagesPath(user.avatar, 'users')} />
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">{user.name}</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">{user.email}</div>
						</div>
					</TableBodyCell>
					<TableBodyCell
						class="overflow-open max-w-sm truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs"
						>{user.biography}</TableBodyCell
					>
					<TableBodyCell>{user.position}</TableBodyCell>
					<TableBodyCell>{user.country}</TableBodyCell>
					<TableBodyCell>
						<div class="flex items-center gap-2">
							<Indicator color={user.status === 'Active' ? 'green' : 'red'} />
							{user.status}
						</div>
					</TableBodyCell>
					<TableBodyCell class="space-x-2">
						<Button
							color1="blue"
							size="sm"
							class="gap-2"
							on:click={() => ((current_user = user), (openUser = true))}
						>
							<EditOutline size="sm" /> Edit user
						</Button>
						<Button
							color="red"
							size="sm"
							class="gap-2"
							on:click={() => ((current_user = user), (openDelete = true))}
						>
							<TrashBinSolid size="sm" /> Delete user
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>

<!-- Modals -->

<User bind:open={openUser} data={current_user} />
<Delete bind:open={openDelete} />
