<script lang="ts">
  import { ChatMsg, imagesPath } from '$lib';
  import Users from '../../../../data/users.json';
</script>

<ChatMsg replays={4} name={Users[2].name} avatar={imagesPath(Users[2].avatar, 'users')}>
  <p>
    Hello <a href="#top" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">@designteam</a> Let's schedule a kick-off meeting and workshop this week. It would be great to gather
    everyone involved in the design project. Let me know about your availability in the thread.
  </p>
  <p>Looking forward to it! Thanks.</p>
</ChatMsg>