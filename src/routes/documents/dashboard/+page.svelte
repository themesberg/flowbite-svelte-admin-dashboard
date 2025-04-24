<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  // for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<div class="p-8 mx-auto">
<Heading tag="h1" class="text-4xl my-3">Dashboard Components</Heading>

<Heading tag="h2" class="text-3xl my-2">ActivityList</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.ActivityList />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ActivityListEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<Heading tag="h2" class="text-3xl my-2">CategorySalesReport</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.CategorySalesReport />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/CategorySalesReportEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<Heading tag="h2" class="text-3xl my-2">ChartWidget</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.ChartWidget />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ChartWidgetEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<Heading tag="h2" class="text-3xl my-2">CreditCard</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.CreditCard />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/CreditCardEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<Heading tag="h2" class="text-3xl my-2">More</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.More />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/MoreEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<Heading tag="h2" class="text-3xl my-2">ProductMetricCard</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.ProductMetricCard />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/ProductMetricCardEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<Heading tag="h2" class="text-3xl my-2">Stats</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.Stats />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/StatsEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<Heading tag="h2" class="text-3xl my-2">Traffic</Heading>
<CodeWrapper class="my-8">
	<ExampleComponents.Traffic />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/TrafficEx.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

</div>
