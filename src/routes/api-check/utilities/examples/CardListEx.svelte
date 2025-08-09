<script lang="ts">
  import { CardList } from '$lib';
  const items = [
    {
      title: 'Rating reminders',
      subtitle: 'Send an email reminding me to rate an item a week after purchase',
      active: true
    },
    {
      title: 'Item update notifications',
      subtitle: 'Send user and product notifications for you',
      active: false
    },
    {
      title: 'Item comment notifications',
      subtitle: 'Send me an email when someone comments on one of my items',
      active: true
    },
    {
      title: 'Buyer review notifications',
      subtitle: 'Send me an email when someone leaves a review with their rating',
      active: false
    }
  ];
</script>

<CardList title="Email Notifications" {items} class="p-4 sm:p-6" />
