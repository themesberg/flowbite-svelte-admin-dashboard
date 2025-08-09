<script lang="ts">
  import { PriceCardPrice } from '$lib';

  const period = 'month';
  const price = '$254';
</script>

<PriceCardPrice value={price} {period} />
