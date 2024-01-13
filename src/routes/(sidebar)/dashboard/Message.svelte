<script>
	import { Button, ToolbarButton } from 'flowbite-svelte';
	import { ImageSolid, MapPinAltSolid, PapperClipSolid } from 'flowbite-svelte-icons';
</script>

<div
	class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
>
	<div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
		<label for="comment" class="sr-only">Write your message</label>
		<textarea
			id="comment"
			rows="8"
			class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
			placeholder="Write your message"
			required
		></textarea>
	</div>
	<div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
		<Button size="sm" type="submit" class="text-xs">Send message</Button>
		<div class="flex pl-0 space-x-1 sm:pl-2">
			<ToolbarButton class="p-2 hover:text-gray-900 dark:hover:text-white">
				<PapperClipSolid size="sm" />
				<span class="sr-only">Attach file</span>
			</ToolbarButton>
			<ToolbarButton class="p-2 hover:text-gray-900 dark:hover:text-white">
				<MapPinAltSolid size="sm" />
				<span class="sr-only">Set location</span>
			</ToolbarButton>
			<ToolbarButton class="p-2 hover:text-gray-900 dark:hover:text-white">
				<ImageSolid size="sm" />
				<span class="sr-only">Upload image</span>
			</ToolbarButton>
		</div>
	</div>
</div>
