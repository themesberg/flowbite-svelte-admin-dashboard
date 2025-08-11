import { fetchAdminDashboardApiCheck } from '../../utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allDocs = await fetchAdminDashboardApiCheck();
  console.log(allDocs)
  return json({
    adminDashboard: allDocs
  });
};
