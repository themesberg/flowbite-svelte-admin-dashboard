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
  <Heading tag="h1" class="my-3 text-4xl">Pages Components</Heading>
  
  <Heading tag="h2" class="my-2 text-3xl">Faq</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Faq />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/FaqEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Faq' />

</div>