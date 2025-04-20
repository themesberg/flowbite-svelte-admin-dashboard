import type { LayoutServerLoad } from './$types';
import { ANALYTICS_ID } from '$env/static/private';

export const load: LayoutServerLoad = async () => {
  return { ANALYTICS_ID };
}
