import { fetchDocs } from '../../utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allDocs = await fetchDocs();
  return json({
    posts: allDocs
  });
};
