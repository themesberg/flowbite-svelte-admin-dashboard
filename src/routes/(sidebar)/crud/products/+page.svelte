<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Drawer, Heading } from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
	import { CogOutline, DotsVerticalOutline, EditOutline } from 'flowbite-svelte-icons';
	import { ExclamationCircleSolid, TrashBinSolid } from 'flowbite-svelte-icons';
	import Products from '../../../data/product.json';
	import Product from './Product.svelte';
	import Delete from './Delete.svelte';
	import type { ComponentType } from 'svelte';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Product; // drawer component

	const toggle = (component: ComponentType) => {
		drawerComponent = component;
		hidden = !hidden;
	};
</script>

<main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">
	<Breadcrumb class="mb-5">
		<BreadcrumbItem home>Home</BreadcrumbItem>
		<BreadcrumbItem href="/crud/products">E-commerce</BreadcrumbItem>
		<BreadcrumbItem>Products</BreadcrumbItem>
	</Breadcrumb>
	<Heading tag="h1" class="mb-4 text-xl sm:text-2xl">All products</Heading>

	<Toolbar embedded class="-mx-2 w-full p-2 text-gray-500 dark:text-gray-400">
		<ToolbarGroup class="w-80 xl:w-96">
			<Input placeholder="Search for products" />
		</ToolbarGroup>
		<ToolbarGroup>
			<ToolbarButton><CogOutline /></ToolbarButton>
			<ToolbarButton><TrashBinSolid /></ToolbarButton>
			<ToolbarButton><ExclamationCircleSolid /></ToolbarButton>
			<ToolbarButton><DotsVerticalOutline /></ToolbarButton>
		</ToolbarGroup>
		<div slot="end" class="space-x-2">
			<Button size="sm" class="gap-2 whitespace-nowrap" on:click={() => toggle(Product)}>
				Add new product
			</Button>
		</div>
	</Toolbar>

	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<TableHeadCell><Checkbox /></TableHeadCell>
			{#each ['Product Name', 'Technology', 'Description', 'ID', 'Price', 'Discount', 'Actions'] as title}
				<TableHeadCell>{title}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each Products as product}
				<TableBodyRow>
					<TableBodyCell><Checkbox /></TableBodyCell>
					<TableBodyCell class="mr-12 flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">
								{product.name}
							</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
								{product.category}
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>{product.category}</TableBodyCell>
					<TableBodyCell
						class="max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs"
						>{product.description}</TableBodyCell
					>
					<TableBodyCell>#{product.id}</TableBodyCell>
					<TableBodyCell>{product.price}</TableBodyCell>
					<TableBodyCell>{product.discount}</TableBodyCell>
					<TableBodyCell class="space-x-2">
						<Button size="sm" class="gap-2" on:click={() => toggle(Product)}>
							<EditOutline size="sm" /> Edit
						</Button>
						<Button color="red" size="sm" class="gap-2" on:click={() => toggle(Delete)}>
							<TrashBinSolid size="sm" /> Delete item
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>

<Drawer placement="right" transitionType="fly" bind:hidden>
	<svelte:component this={drawerComponent} bind:hidden />
</Drawer>
