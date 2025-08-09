<script lang="ts">
  import { DarkChart } from '$lib';
  import users from '../../../utils/graphs/users';
</script>

<DarkChart configFunc={users} class="w-full" />