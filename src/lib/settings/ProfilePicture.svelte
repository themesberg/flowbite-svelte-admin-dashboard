<script lang="ts">
	import { Avatar, Button, Card, Heading } from 'flowbite-svelte';
	import { UploadSolid } from 'flowbite-svelte-icons';

	export let src: string;
</script>

<Card size="xl" class="w-full gap-4 {$$props.class ?? ''}" horizontal>
	<Avatar {src} class="h-28 w-28" size="none" rounded />
	<div>
		<Heading tag="h3" class="mb-1 text-xl">Profile picture</Heading>
		<p class="mb-4 text-sm">JPG, GIF or PNG. Max size of 800K</p>
		<div>
			<Button size="sm" class="gap-2"><UploadSolid /> Upload picture</Button>
			<Button size="sm" color="alternative">Delete</Button>
		</div>
	</div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let src: string;
-->
