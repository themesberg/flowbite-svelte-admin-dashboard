import * as dashboard from '../../../(sidebar)/dashboard/+page';

import type { PageLoad } from './$types';
export const load: PageLoad = (request) => {
  const { params, data, url, fetch } = request;
  return dashboard.load({ params, data, url, fetch } as any);
};
