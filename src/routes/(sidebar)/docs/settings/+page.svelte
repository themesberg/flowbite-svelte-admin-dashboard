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
  <Heading tag="h1" class="my-3 text-4xl">Setting Components</Heading>
  <Heading tag="h2" class="my-2 text-3xl">GeneralInfo</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.GeneralInfo />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/GeneralInfoEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <Heading tag="h2" class="my-2 text-3xl">UserProfile</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="flex justify-center">
      <ExampleComponents.UserProfile />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/UserProfileEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

</div>
