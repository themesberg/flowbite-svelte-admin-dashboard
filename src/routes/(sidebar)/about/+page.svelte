<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Heading, List, Li } from 'flowbite-svelte';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
  import { HighlightCompo } from '../../utils';

  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
  const tailwindcssVersion = __TAILWINDCSSVERSION__;
  const flowbitesvelteVersion = __FLOWBITESVELTE__;
  const flowbitesvelteiconsVersion = __FLOWBITESVETEICONS__;
  const tailwindmergeVersion = __TAILWINDMERGE__;

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<main class="h-screen w-full overflow-y-auto bg-white dark:bg-gray-800">
  <div class="p-12">
    <Breadcrumb class="mb-5">
      <BreadcrumbItem home>Home</BreadcrumbItem>
      <BreadcrumbItem>About</BreadcrumbItem>
    </Breadcrumb>
    <Heading tag="h1" class="mb-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Flowbite Svelte Admin Dashboard</Heading>
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
    <Heading tag="h2" class="my-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Installation</Heading>
    <HighlightCompo class="mb-8" codeLang="js" code={modules['./md/installation.md'] as string} />
  </div>
</main>
