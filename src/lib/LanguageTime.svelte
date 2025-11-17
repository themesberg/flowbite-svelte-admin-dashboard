<script lang="ts">
  import { Label, Select } from 'flowbite-svelte';
  import { CardWidget } from '$lib';
  import type { LanguageTimeProps } from './types';

  let { languages, timezones, children }: LanguageTimeProps = $props();

  const defaultLanguages = [
    { name: 'English (US)', value: 'en' },
    { name: 'Italiano', value: 'it' },
    { name: 'Français (France)', value: 'fr' },
    { name: '正體字', value: 'ch' },
    { name: 'Español (España)', value: 'es' },
    { name: 'Deutsch', value: 'de' },
    { name: 'Português (Brasil)', value: 'pt' }
  ];

  const languageOptions = $derived(languages ?? defaultLanguages);
  const defaultTimezones = [
    { name: 'GMT+0 Greenwich Mean Time (GMT)', value: '0' },
    { name: 'GMT+1 Central European Time (CET)', value: '1' },
    { name: 'GMT+2 Eastern European Time (EET)', value: '2' },
    { name: 'GMT+3 Moscow Time (MSK)', value: '3' },
    { name: 'GMT+5 Pakistan Standard Time (PKT)', value: '4' },
    { name: 'GMT+8 China Standard Time (CST)', value: '5' },
    { name: 'GMT+10 Eastern Australia Standard Time (AEST)', value: '6' }
  ];
  const timezoneOptions = $derived(timezones ?? defaultTimezones);
</script>

<CardWidget title="Language &amp; Time" class="p-4 sm:p-6">
  <div class="space-y-4">
    <Label class="space-y-2">
      <span>Select language</span>
      <Select items={languageOptions} class="font-normal"></Select>
    </Label>
    <Label class="space-y-2">
      <span>Time Zone</span>
      <Select items={timezoneOptions} class="font-normal"></Select>
    </Label>
  </div>
  {#if children}
    {@render children()}
  {/if}
</CardWidget>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[LanguageTimeProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L497)
## Props
@prop languages
@prop timezones
@prop children
-->
