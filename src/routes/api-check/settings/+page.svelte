<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import { HighlightCompo, CodeWrapper, CompoAttributesViewer } from '../../utils';
  import * as ExampleComponents from './examples';

  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<div class="mx-auto mb-24 max-w-4xl p-8">
  <Heading tag="h1" class="my-3 text-4xl">Setting Components</Heading>

  <Heading tag="h2" class="my-2 text-3xl">Accounts</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.Accounts />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/AccountsEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName="Accounts" />

  <Heading tag="h2" class="my-2 text-3xl">GeneralInfo</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <ExampleComponents.GeneralInfo />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/GeneralInfoEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName="GeneralInfo" />

  <Heading tag="h2" class="my-2 text-3xl">UserProfile</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="flex justify-center">
      <ExampleComponents.UserProfile />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/UserProfileEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName="UserProfile" />

  <Heading tag="h2" class="my-2 text-3xl">LanguageTime</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="flex justify-center">
      <ExampleComponents.LanguageTime />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/LanguageTimeEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName="LanguageTime" />

  <Heading tag="h2" class="my-2 text-3xl">NotificationCard</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="flex justify-center">
      <ExampleComponents.NotificationCard />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/NotificationCardEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName="NotificationCard" />

  <Heading tag="h2" class="my-2 text-3xl">Sessions</Heading>
  <CodeWrapper class="my-8" innerClass="flex justify-center">
    <div class="flex justify-center">
      <ExampleComponents.Sessions />
    </div>
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/SessionsEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <CompoAttributesViewer fileName="Sessions" />
</div>
