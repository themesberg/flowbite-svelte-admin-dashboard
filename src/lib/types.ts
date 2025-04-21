import type { Component, Snippet } from 'svelte';
import type { SizeType, IndicatorProps } from 'flowbite-svelte';
import type { ApexOptions } from 'apexcharts';
import type { HTMLFormAttributes } from 'svelte/elements';

export type MenuItem = {
  name: string;
  href: string;
  icon: Component;
};

export interface AppsMenuProps {
  open?: boolean;
  menu: MenuItem[];
}

export interface ChangeProps {
  value?: number;
  unit?: string;
  since?: string;
  size?: SizeType;
  equalHeight?: boolean;
  class?: string;
}

export interface ChartWidgetProps {
  title: string;
  subtitle: string;
  chartOptions?: ApexOptions;
  value?: number;
}

export interface ChatMsgProps {
  children: Snippet;
  avatar?: string;
  name?: string;
  timestamp?: Date;
  replays?: number;
  class?: string;
}

export interface IconAvatarProps {
  children: Snippet;
  src: string;
  color?: IndicatorProps['color'];
}

export const DEFAULT_TIMESLOTS = {
  Yesterday: -1,
  Today: 0,
  'Last 7 days': 7,
  'Last 30 days': 30,
  'Last 90 days': 90
};

export type TimeSlot = keyof typeof DEFAULT_TIMESLOTS;

export interface LastRangeProps {
  timeslot?: TimeSlot;
  timeslots?: { [key: string]: number };
}

export interface MoreProps {
  title?: string;
  href?: string;
  flat?: boolean;
  class?: string;
}

export interface NotificationProps {
  children: Snippet;
  src: string;
  Icon?: Component;
  when?: string;
  href?: string;
  color: IndicatorProps['color'];
}

export interface SmallPanelProps {
  icon?: Snippet;
  title?: string;
  subtitle?: string;
  change?: number;
}

export type ProductType = {
  id?: string;
  name?: string;
  src?: string;
  image?: string;
  label?: string;
  change?: number;
  price?: string;
  attributes?: {
    [key: string]: any;
  };
  metadata?: Record<string, any>;
};

export type CustomerType = {
  id?: number;
  name?: string;
  avatar?: string;
  email?: string;
  biography?: string;
  position?: string;
  country?: string;
  status?: string;
};

export interface StatsProps {
  products: ProductType[];
  customers: CustomerType[];
  title?: string;
  popoverTitle?: string;
  popoverDesc?: Snippet;
  tab1Title?: string;
  tab2Title?: string;
}

export const STATES = {
  completed: 'Completed',
  cancelled: 'Canceled',
  inreview: 'In review',
  inprogress: 'In progress'
};

export type StateType = keyof typeof STATES;

export interface StatusBadgeProps {
  state: StateType;
  dark?: boolean;
}

export interface UserMenuProps {
  name: string;
  avatar: string;
  email: string;
  menuItems: string[];
  children?: Snippet;
}

export interface SiteType {
  name: string;
  img: string;
  link: string;
  imgAlt: string;
}

export interface ForgotPasswordProps extends HTMLFormAttributes {
  children: Snippet;
  title?: string;
  site?: SiteType;
  btnTitle?: string;
  pageDescription?: string;
  mainClass?: string;
  mainDivClass?: string;
  siteLinkClass?: string;
  siteImgClass?: string;
  cardH1Class?: string;
}

export interface PriceCardPriceProps {
  children?: Snippet;
  subtitle?: Snippet;
  title?: string;
  price?: string;
  period: string;
}

export interface PriceCardPriceProps {
  value?: string;
  period: string;
}

export interface PriceCardListItemProps {
  icon?: boolean;
  children: Snippet;
}

export type FaqType = {
  title: string;
  answer: string;
};

export interface FaqProps {
  title: string;
  description?: string;
  faqs: FaqType[];
}
