<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import HighlightCompo from '../../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../../utils/CodeWrapper.svelte';
  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<div class="mx-auto p-8">
  <Heading tag="h1" class="my-3 text-4xl">Navbar Components</Heading>
  <Heading tag="h2" class="my-2 text-3xl">AppsMenu</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="h-96">
    <ExampleComponents.AppsMenu />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/AppsMenuEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <Heading tag="h2" class="my-2 text-3xl">NotificationList</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="h-[540px]">
    <ExampleComponents.NotificationList />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/NotificationListEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <Heading tag="h2" class="my-2 text-3xl">UserMenu</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="h-64">
    <ExampleComponents.UserMenu />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/UserMenuEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

</div>
