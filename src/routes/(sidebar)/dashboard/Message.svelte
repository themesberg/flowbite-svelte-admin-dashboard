<script>
	import { Button, ToolbarButton } from 'flowbite-svelte';
	import { ImageSolid, MapPinAltSolid, PaperClipSolid } from 'flowbite-svelte-icons';
</script>

<div
	class="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
>
	<div class="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
		<label for="comment" class="sr-only">Write your message</label>
		<textarea
			id="comment"
			rows="8"
			class="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
			placeholder="Write your message"
			required
		></textarea>
	</div>
	<div class="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
		<Button size="sm" type="submit" class="text-xs">Send message</Button>
		<div class="flex space-x-1 pl-0 sm:pl-2">
			<ToolbarButton class="p-2 hover:text-gray-900 dark:hover:text-white">
				<PaperClipSolid size="sm" />
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
