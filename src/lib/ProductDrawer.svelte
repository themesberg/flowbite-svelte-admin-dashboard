<script lang="ts">
  import { Button, Heading, Input, Label, Select, Textarea, Drawer } from 'flowbite-svelte';
  import { CloseOutline } from 'flowbite-svelte-icons';
  import type { ProductDrawerProps } from './types';
  import type { Attachment } from 'svelte/attachments';

  let { open = $bindable(false), title = 'Add new product', data = {}, additionalFields = [], ...formAttrs }: ProductDrawerProps = $props();

  const prefill: Attachment<HTMLFormElement> = (form) => {
    const fill = (vals: Record<string, unknown> = {}) => {
      for (const [key, value] of Object.entries(vals)) {
        if (value == null) continue;
        
        // Try to find the element using multiple approaches
        let el = form.elements.namedItem(key) as HTMLElement | null;
        
        // If not found with namedItem, try querySelector
        if (!el) {
          el = form.querySelector(`[name="${key}"]`);
        }
        
        // If still not found, try finding by name attribute in the entire form
        if (!el) {
          el = form.querySelector(`input[name="${key}"], select[name="${key}"], textarea[name="${key}"]`);
        }
        
        if (!el) {
          console.warn(`Could not find form element with name: ${key}`);
          continue;
        }
        
        // Handle different input types
        if (el instanceof HTMLInputElement) {
          if (el.type === 'checkbox') {
            el.checked = Boolean(value);
          } else {
            el.value = String(value);
          }
        } else if (el instanceof HTMLTextAreaElement) {
          el.value = String(value);
        } else if (el instanceof HTMLSelectElement) {
          el.value = String(value);
        } else {
          // For custom components like Flowbite Select, try setting the value property
          try {
            (el as any).value = String(value);
          } catch (e) {
            console.warn(`Could not set value for element ${key}:`, e);
          }
        }
      }
    };

    // Use a slight delay to ensure all components are mounted
    setTimeout(() => {
      fill(data);
    }, 50);

    return () => {
      // Cleanup function (optional)
    };
  };
</script>

<Drawer placement="right" bind:open>
  <Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">
    {title || (Object.keys(data).length ? 'Edit product' : 'Add new product')}
  </Heading>
 
  <form {...formAttrs} {@attach prefill}>
    <div class="space-y-4">
      <Label class="space-y-2">
        <span>Name</span>
        <Input name="name" class="border font-normal outline-none" placeholder="Type product name" required />
      </Label>
      <Label class="space-y-2">
        <span>Price</span>
        <Input name="price" class="border font-normal outline-none" placeholder="$2999" required />
      </Label>
      {#each additionalFields as field}
        <Label class="space-y-2">
          <span>{field.label}</span>
          <Select name={field.name} class="border-gray-300 font-normal outline-none">
            {#each field.options as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </Select>
        </Label>
      {/each}
      <Label class="space-y-2">
        <span>Description</span>
        <Textarea rows={4} name="description" placeholder="Enter event description here" class="w-full border-gray-300 font-normal outline-none"></Textarea>
      </Label>
      <div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
        <Button type="submit" class="w-full">
          {Object.keys(data).length ? 'Edit product' : 'Add product'}
        </Button>
        <Button color="alternative" class="w-full" onclick={() => (open = false)}>
          <CloseOutline />
          Cancel
        </Button>
      </div>
    </div>
  </form>
</Drawer>
