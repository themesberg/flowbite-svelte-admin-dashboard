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
  <Heading tag="h1" class="my-3 text-4xl">Utilities Components</Heading>

  <Heading tag="h2" class="my-2 text-3xl">CardList</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.CardList />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/CardListEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='CardList' />
  
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

  <Heading tag="h2" class="my-2 text-3xl">DarkChart</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.DarkChart />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/DarkChartEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='DarkChart' />

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

  <Heading tag="h2" class="my-2 text-3xl">Notification</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.Notification />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/NotificationEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Notification' />

  <Heading tag="h2" class="my-2 text-3xl">Playground</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Playground />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/PlaygroundEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Playground' />

  <Heading tag="h2" class="my-2 text-3xl">PriceCardPrice</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.PriceCardPrice />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/PriceCardPriceEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='PriceCardPrice' />

  <Heading tag="h2" class="my-2 text-3xl">SmallPanel</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.SmallPanel />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/SmallPanelEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='SmallPanel' />

  <Heading tag="h2" class="my-2 text-3xl">StatusBadge</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="flex justify-between gap-4">
    <ExampleComponents.StatusBadge />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/StatusBadgeEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='StatusBadge'/>
</div>