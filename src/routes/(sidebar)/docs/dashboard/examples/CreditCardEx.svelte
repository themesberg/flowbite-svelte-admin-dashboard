<script lang="ts">
  import { CreditCard } from '$lib';
</script>

<div class="grid grid-cols-1 gap-2 sm:grid-cols-4 sm:gap-8">
  <CreditCard number={475} /> <span>••• {475}</span>

  <CreditCard number={476} /> <span>••• {476}</span>
</div>
