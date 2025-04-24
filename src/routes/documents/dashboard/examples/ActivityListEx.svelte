<script lang="ts">
  import { ActivityList } from '$lib';
  import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>


<ActivityList title="Latest Activity">
  {#snippet actions()}
    <a href="#top" class="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"> View all </a>
  {/snippet}
  <Timeline>
    <TimelineItem title="Application UI design in Figma" date="April 2025">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p>
      <Button color="alternative">Learn more<ArrowRightOutline class="ms-2" size="sm" /></Button>
    </TimelineItem>
    <TimelineItem title="Marketing UI code in Flowbite" date="March 2025">
      <p class="text-base font-normal text-gray-500 dark:text-gray-300">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      <a href="#top" class="text-primary-700 dark:text-primary-500 inline-flex items-center text-xs font-medium hover:underline sm:text-sm">
        Go to Flowbite Blocks<ArrowRightOutline class="ms-2" size="sm" />
      </a>
    </TimelineItem>
    <TimelineItem title="Marketing UI design in Figma" date="February 2025">
      <p class="text-base font-normal text-gray-500 dark:text-gray-300">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </TimelineItem>
  </Timeline>
</ActivityList>