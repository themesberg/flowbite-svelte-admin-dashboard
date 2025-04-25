<script lang="ts">
  import { NotificationList } from '$lib';
  import Users from '../../../../data/users.json';
  import type { NotificationProps } from '$lib/types';
  import {
    UsersGroupSolid,
    AnnotationSolid,
    CameraPhotoOutline,
    DownloadSolid,
    HeartSolid
  } from 'flowbite-svelte-icons';

  type NotificationData = Omit<NotificationProps, 'children'> & {
    content: string;
  };

  const notifications: NotificationData[] = [
    {
      src: Users[0].avatar,
      Icon: DownloadSolid,
      when: 'a few moments ago',
      color: 'purple',
      content: `New message from <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"`,
    },
    {
      src: Users[1].avatar,
      Icon: UsersGroupSolid,
      when: '10 minutes ago',
      color: 'gray',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Jese leos</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.`,
    },
    {
      src: Users[3].avatar,
      Icon: HeartSolid,
      when: '44 minutes ago',
      color: 'red',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.`,
    },
    {
      src: Users[4].avatar,
      Icon: AnnotationSolid,
      when: '1 hour ago',
      color: 'green',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span class="text-primary-700 dark:text-primary-500 font-medium">@bonnie.green</span> what do you say?`,
    },
    {
      src: Users[5].avatar,
      Icon: CameraPhotoOutline,
      when: '3 hours ago',
      color: 'purple',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.`,
    },
  ];
</script>

<NotificationList {notifications}/>