<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import { HighlightCompo, CodeWrapper, CompoAttributesViewer } from '../../../utils'
  import * as ExampleComponents from './examples';

  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  
</script>

<div class="p-8 max-w-7xl mx-auto mb-24">
  <Heading tag="h1" class="my-3 text-4xl">Utilities Components</Heading>
  
  <Heading tag="h2" class="my-2 text-3xl">Change</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="grid gap-8 grid-cols-2">
    <ExampleComponents.Change />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ChangeEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Change' />

  <Heading tag="h2" class="my-2 text-3xl">EmptyCard</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.EmptyCard />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/EmptyCardEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='EmptyCard' />

  <Heading tag="h2" class="my-2 text-3xl">IconAvatar</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.IconAvatar />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/IconAvatarEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='IconAvatar' />

  <Heading tag="h2" class="my-2 text-3xl">Playground</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Playground />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/PlaygroundEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Playground' />

  <Heading tag="h2" class="my-2 text-3xl">SmallPanel</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.SmallPanel />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/SmallPanelEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='SmallPanel' />
</div>