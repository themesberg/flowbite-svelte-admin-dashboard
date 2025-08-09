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
  <Heading tag="h1" class="my-3 text-4xl">Pages Components</Heading>
  
  <Heading tag="h2" class="my-2 text-3xl">ComparisonTable</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ComparisonTable />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ComparisonTableEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='ComparisonTable' />

  <Heading tag="h2" class="my-2 text-3xl">Faq</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Faq />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/FaqEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Faq' />

  <Heading tag="h2" class="my-2 text-3xl">Footer</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Footer />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/FooterEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Footer' />

  <Heading tag="h2" class="my-2 text-3xl">Maintenance</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Maintenance />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/MaintenanceEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Maintenance' />

  <Heading tag="h2" class="my-2 text-3xl">NotFound</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.NotFound />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/NotFoundEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='NotFound' />

  <Heading tag="h2" class="my-2 text-3xl">PriceCard</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.PriceCard />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/PriceCardEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='PriceCard' />
  <CompoAttributesViewer fileName='PriceCardListItem' />

  <Heading tag="h2" class="my-2 text-3xl">ServerError</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ServerError />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ServerErrorEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='ServerError' />

</div>