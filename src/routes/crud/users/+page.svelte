<script lang="ts">
	import {
		Avatar,
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Checkbox,
		Heading,
		Indicator,
		Input,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Toolbar,
		ToolbarButton,
		ToolbarGroup
	} from 'flowbite-svelte';
	import {
		CogOutline,
		DotsVerticalOutline,
		DownloadSolid,
		EditOutline,
		ExclamationCircleSolid,
		PlusSolid,
		TrashBinSolid
	} from 'flowbite-svelte-icons';
	import Users from '../../data/users.json';
</script>

<main>
	<div class="p-4 block sm:flex flex-col items-start justify-between lg:mt-1.5">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem
				class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
				href="/curd/users">Users</BreadcrumbItem
			>
			<BreadcrumbItem>List</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="mb-4 text-xl sm:text-2xl">All users</Heading>

		<Toolbar embedded class="-mx-2 text-gray-500 dark:text-gray-400 p-2 w-full">
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
				<Button size="sm" class="gap-2 whitespace-nowrap"><PlusSolid size="xs" />Add user</Button>
				<Button size="sm" color="alternative" class="gap-2">
					<DownloadSolid size="xs" />Export
				</Button>
			</div>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y bg-gray-100 border-gray-200 dark:border-gray-700">
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
					<TableBodyCell class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
						<Avatar src="https://flowbite-admin-dashboard.vercel.app/images/users/{user.avatar}" />
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">{user.name}</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">{user.email}</div>
						</div>
					</TableBodyCell>
					<TableBodyCell
						class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400"
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
						<Button color1="blue" size="sm" class="gap-2"
							><EditOutline size="sm" /> Edit user</Button
						>
						<Button color="red" size="sm" class="gap-2"
							><TrashBinSolid size="sm" /> Delete user</Button
						>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>
