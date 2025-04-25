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
  <Heading tag="h1" class="my-3 text-4xl">Authenication Components</Heading>
  <Heading tag="h2" class="my-2 text-3xl">ForgotPassword</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ForgotPassword />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ForgotPasswordEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <Heading tag="h2" class="my-2 text-3xl">ProfileLock</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ProfileLock />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ProfileLockEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <Heading tag="h2" class="my-2 text-3xl">ResetPassword</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.ResetPassword />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/ResetPasswordEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <Heading tag="h2" class="my-2 text-3xl">SignIn</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.SignIn />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/SignInEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>

  <Heading tag="h2" class="my-2 text-3xl">SignUp</Heading>
  <CodeWrapper class="my-8">
    <ExampleComponents.SignUp />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules['./examples/SignUpEx.svelte'] as string} />
    {/snippet}
  </CodeWrapper>
</div>
