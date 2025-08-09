<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import { HighlightCompo, CodeWrapper, CompoAttributesViewer } from '../../utils'
  import * as ExampleComponents from './examples';

  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<div class="p-8 max-w-4xl mx-auto mb-24">
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

  <CompoAttributesViewer fileName='AppsMenu' />

  <Heading tag="h2" class="my-2 text-3xl">NotificationList</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="h-[540px]">
    <ExampleComponents.NotificationList />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/NotificationListEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='NotificationList' />

  <Heading tag="h2" class="my-2 text-3xl">UserMenu</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="h-64">
    <ExampleComponents.UserMenu />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/UserMenuEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='UserMenu' />


</div>
