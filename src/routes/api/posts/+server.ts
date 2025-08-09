import { fetchAdminDashboardApiCheck } from '../../utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allDocs = await fetchAdminDashboardApiCheck();
  return json({
    adminDashboard: allDocs
  });
};
