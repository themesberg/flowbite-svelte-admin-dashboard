<script lang="ts">
  import { GeneralInfo } from '$lib';
  import type { InputField } from '$lib/types';

  const inputs: InputField[] = [
    { label: 'First Name', type: 'text', placeholder: 'Bonnie' },
    { label: 'Last Name', type: 'text', placeholder: 'Green' },
    { label: 'Country', type: 'text', placeholder: 'United States' },
    { label: 'City', type: 'text', placeholder: 'e.g. San Francisco' },
    { label: 'Address', type: 'text', placeholder: 'e.g. California' },
    { label: 'Email', type: 'text', placeholder: 'example@company.com' },
    { label: 'Phone Number', type: 'text', placeholder: 'e.g. +(12)3456 789' },
    { label: 'Birthday', type: 'text', placeholder: '15/08/1980' },
    { label: 'Organization', type: 'text', placeholder: 'Company Name' },
    { label: 'Role', type: 'text', placeholder: 'Svelte Developer' },
    { label: 'Department', type: 'text', placeholder: 'Development' },
    { label: 'Zip/postal code', type: 'text', placeholder: '123456' }
  ];
</script>

<GeneralInfo {inputs} />
