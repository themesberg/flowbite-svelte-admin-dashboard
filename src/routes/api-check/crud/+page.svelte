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
  <Heading tag="h1" class="my-3 text-4xl">CRUD Components</Heading>

  <Heading tag="h2" class="my-2 text-3xl">DeleteDrawer</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.DeleteDrawer />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/DeleteDrawerEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='DeleteDrawer' />

  <Heading tag="h2" class="my-2 text-3xl">DeleteModal</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.DeleteModal />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/DeleteModalEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='DeleteModal' />

  <Heading tag="h2" class="my-2 text-3xl">ProductDrawer</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.ProductDrawer />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ProductDrawerEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='ProductDrawer' />

  <Heading tag="h2" class="my-2 text-3xl">UserModal</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.UserModal />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/UserModalEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='UserModal' />
</div>
