<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Heading, List, Li } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
  const name = __NAME__;
	const admindashboardVersion = __VERSION__;
	const svelteVersion = __SVELTEVERSION__;
	const svelteKitVersion = __SVELTEKITVERSION__;
	const viteVersion = __VITEVERSION__;
	const tailwindcssVersion = __TAILWINDCSSVERSION__;
  const flowbitesvelteVersion = __FLOWBITESVELTE__;
  const flowbitesvelteiconsVersion = __FLOWBITESVETEICONS__;
  const tailwindmergeVersion = __TAILWINDMERGE__;
</script>




<main class="relative h-screen w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-8">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem>About</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-8">
			Flowbite Svelte Admin Dashboard
		</Heading>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-300">
      <Li icon>
        <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
        Svelte: {svelteVersion}
      </Li>
      <Li icon>
        <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
        SvelteKit: {svelteKitVersion}
      </Li>
      <Li icon>
        <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
        Tailwind: {tailwindcssVersion}
      </Li>
      <Li icon>
        <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
        Flowbite-Svelte: {flowbitesvelteVersion}
      </Li>
      <Li icon>
        <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
        Flowbite-Svelte-Icons: {flowbitesvelteiconsVersion}
      </Li>
      <Li icon>
        <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
        Vite: {viteVersion}
      </Li>
      <Li icon>
        <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
        tailwind-merge: {tailwindmergeVersion}
      </Li>
    </List>
  </div>
</main>