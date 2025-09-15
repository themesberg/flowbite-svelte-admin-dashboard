<script lang="ts">
  import { Button, CloseButton, Heading, Input, Label, Select, Textarea } from 'flowbite-svelte';
  import { CloseOutline } from 'flowbite-svelte-icons';
  import type { ProductDrawerProps } from './types';

  let { hidden = $bindable(true), title = 'Add new product', data = {} }: ProductDrawerProps = $props();

  function init(form: HTMLFormElement) {
    for (const key in data) {
      // console.log(key, data[key]);
      const el = form.elements.namedItem(key);
      if (el) {
        if (el instanceof HTMLInputElement) {
          el.value = data[key];
        } else if (el instanceof HTMLTextAreaElement) {
          el.value = data[key];
        }else if (el instanceof HTMLSelectElement) {
          el.value = data[key];
        }
      }
    }
  }
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">{Object.keys(data).length ? 'Edit product' : 'Add new product'}</Heading>
<CloseButton onclick={() => (hidden = true)} class="absolute top-2.5 right-2.5 text-gray-400 hover:text-black dark:text-white" />

<form action="#" use:init>
  <div class="space-y-4">
    <Label class="space-y-2">
      <span>Name</span>
      <Input name="name" class="border font-normal outline-none" placeholder="Type product name" required />
    </Label>

    <Label class="space-y-2">
      <span>Price</span>
      <Input name="price" class="border font-normal outline-none" placeholder="$2999" required />
    </Label>
    <Label class="space-y-2">
      <span>Technology</span>
      <Select name="technology" class="border-gray-300 font-normal outline-none">
        <option selected>Select category</option>
        <option value="FL">Flowbite</option>
        <option value="RE">React</option>
        <option value="AN">Angular</option>
        <option value="VU">Vue</option>
      </Select>
    </Label>
    <Label class="space-y-2">
      <span>Description</span>
      <Textarea rows={4} name="description" placeholder="Enter event description here" class="border-gray-300 font-normal outline-none"></Textarea>
    </Label>
    <Label class="space-y-2">
      <span>Discount</span>
      <Select name="discount" class="border-gray-300 font-normal outline-none">
        <option selected>No</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="30">30%</option>
        <option value="40">40%</option>
        <option value="50">50%</option>
      </Select>
    </Label>

    <div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
      <Button type="submit" class="w-full">{Object.keys(data).length ? 'Edit product' : 'Add product'}</Button>
      <Button color="alternative" class="w-full" onclick={() => (hidden = true)}>
        <CloseOutline />
        Cancel
      </Button>
    </div>
  </div>
</form>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Type
[ProductDrawerProps](https://github.com/themesberg/flowbite-svelte-admin-dashboard/blob/main/src/lib/types.ts#L382)
## Props
@prop hidden = $bindable(true)
@prop title = 'Add new product'
-->
