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
  <Heading tag="h1" class="my-3 text-4xl">Dashboard Components</Heading>

  <Heading tag="h2" class="my-2 text-3xl">ActivityList</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ActivityList />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ActivityListEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='ActivityList' />

  <Heading tag="h2" class="my-2 text-3xl">CategorySalesReport</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.CategorySalesReport />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/CategorySalesReportEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='CategorySalesReport' />

  <Heading tag="h2" class="my-2 text-3xl">ChartWidget</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ChartWidget />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ChartWidgetEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='ChartWidget' />

  <Heading tag="h2" class="my-2 text-3xl">CreditCard</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.CreditCard />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/CreditCardEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='CreditCard' />

  <Heading tag="h2" class="my-2 text-3xl">DateRangeSelector</Heading>
  <CodeWrapper class="my-8">
    <div class="h-80 flex justify-center">
      <ExampleComponents.DateRangeSelector />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/DateRangeSelectorEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='DateRangeSelector' />


  <Heading tag="h2" class="my-2 text-3xl">More</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.More />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/MoreEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='More' />

  <Heading tag="h2" class="my-2 text-3xl">ProductMetricCard</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ProductMetricCard />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ProductMetricCardEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='ProductMetricCard' />

  <Heading tag="h2" class="my-2 text-3xl">Stats</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Stats />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/StatsEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Stats' />

  <Heading tag="h2" class="my-2 text-3xl">Traffic</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.Traffic />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/TrafficEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName='Traffic' />
</div>
