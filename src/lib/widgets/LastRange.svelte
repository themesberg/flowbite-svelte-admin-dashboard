<script>
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronDownOutline, AngleDownOutline } from 'flowbite-svelte-icons';
</script>

<div class="font-normal">
	<button class="flex items-center gap-2 p-2">Last 7 days <ChevronDownOutline size="xs" /></button>
	<Dropdown class="w-48">
		<DropdownItem class="font-normal" href="#">Yesterday</DropdownItem>
		<DropdownItem class="font-normal" href="#">Today</DropdownItem>
		<DropdownItem class="font-normal" href="#">Last 7 days</DropdownItem>
		<DropdownItem class="font-normal" href="#">Last 30 days</DropdownItem>
		<DropdownItem class="font-normal" href="#">Last 90 days</DropdownItem>
		<div slot="footer" class="py-1" role="none">
			<DropdownItem class="font-normal" href="#">Custom...</DropdownItem>
		</div>
	</Dropdown>
</div>
