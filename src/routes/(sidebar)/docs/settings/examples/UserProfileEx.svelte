<script lang="ts">
  import { UserProfile, imagesPath } from '$lib';
  import { Button } from 'flowbite-svelte';
  import { UploadSolid } from 'flowbite-svelte-icons';

  import Users from '../../../../data/users.json';
</script>


<UserProfile src={imagesPath(Users[4].avatar, 'users')}>
  <div class="flex items-center space-x-4">
    <Button size="sm" class="px-3"><UploadSolid size="sm" class="-ms-1 me-2" /> Upload picture</Button>
    <Button size="sm" class="px-3" color="alternative">Delete</Button>
  </div>
</UserProfile>