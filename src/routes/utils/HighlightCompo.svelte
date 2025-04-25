<script lang="ts">
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  import { Button, Badge } from 'flowbite-svelte';
  import { copyToClipboard, replaceLibImport } from './helpers';
  import { highlightcompo } from './theme';
  import { browser } from '$app/environment';

  interface Props {
    code: string;
    badgeClass?: string;
    buttonClass?: string;
    codeLang?: string;
    class?: string;
    expanded?: boolean;
    replaceLib?: boolean;
  }

  let { code, codeLang, badgeClass, buttonClass, replaceLib = true, class: className }: Props = $props();

  if (replaceLib) {
    code = replaceLibImport(code);
  }

  // State for theme handling
  let isDarkMode = $state(false);
  let styleLink: HTMLLinkElement;
  const localStorageName = 'highlight-theme';

  // Function to check if dark mode is active
  function checkDarkMode() {
    if (browser) {
      isDarkMode = document.documentElement.classList.contains('dark');
      return isDarkMode;
    }
    return false;
  }

  // Load the appropriate highlight theme based on dark mode
  $effect(() => {
    if (!browser) return;

    // Check dark mode status
    checkDarkMode();

    // Remove existing style link if it exists
    if (styleLink) {
      styleLink.remove();
    }

    // Create and add the new style link
    (async () => {
      const themeName = isDarkMode ? 'github-dark' : 'github';
      const css = await import(`./highlight/styles/${themeName}.css?url`);

      styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = css.default;
      document.head.append(styleLink);

      // Store preference if needed
      localStorage.setItem(localStorageName, themeName);
    })();

    // Set up dark mode observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    // Start observing the HTML element for class changes
    observer.observe(document.documentElement, { attributes: true });

    // Clean up function
    return () => {
      observer.disconnect();
      if (styleLink) styleLink.remove();
    };
  });

  let showExpandButton: boolean = $state(false);
  let expand: boolean = $state(false);
  const checkOverflow = (el: HTMLElement) => {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    showExpandButton = isOverflowingY;
  };

  const { base, badge, button } = $derived(highlightcompo());
  let copiedStatus = $state(false);

  const handleExpandClick = () => {
    expand = !expand;
  };

  function handleCopyClick() {
    copyToClipboard(code)
      .then(() => {
        copiedStatus = true;
        setTimeout(() => {
          copiedStatus = false;
        }, 1000);
      })
      .catch((err) => {
        console.error('Error in copying:', err);
      });
  }
</script>

<div class={base({ className })}>
  <div class="relative">
    <div class="overflow-hidden {showExpandButton ? 'pb-8' : ''}" class:max-h-72={!expand} tabindex="-1" use:checkOverflow>
      {#if copiedStatus}
        <Badge class={badge({ class: badgeClass })} color="green">Copied to clipboard</Badge>
      {/if}
      {#if codeLang === 'md'}
        <Highlight language={markdown} {code} />
      {:else if code}
        <HighlightSvelte {code} />
      {:else}
        no code is provided
      {/if}
    </div>
    <Button class={button({ class: buttonClass })} onclick={handleCopyClick}>Copy</Button>
    {#if showExpandButton}
      <button
        onclick={handleExpandClick}
        type="button"
        class="hover:text-primary-700 absolute start-0 bottom-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >{expand ? 'Collapse code' : 'Expand code'}</button
      >
    {/if}
  </div>
</div>
