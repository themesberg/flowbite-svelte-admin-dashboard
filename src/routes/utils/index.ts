/**
 * Extracts the route name from a SvelteKit file path
 * @param {string} path - The file path (e.g. '/src/routes/builder/video/+page.svelte')
 * @returns {string} - The extracted route name (e.g. 'video')
 */
const extractRouteName = (path: string): string => {
  // Split the path by '/'
  const parts = path.split('/');

  // Find the index of the part containing '+page.svelte'
  const pageIndex = parts.findIndex((part) => part.includes('+page.svelte'));

  // Return the part before '+page.svelte', or empty string if not found
  return pageIndex > 0 ? parts[pageIndex - 1] : '';
};

export const fetchDocs = async () => {
  const docsFiles = import.meta.glob('/src/routes/**/docs/**/*.svelte');
  const iterableDocsFiles = Object.entries(docsFiles);
  const allDocs = await Promise.all(
    iterableDocsFiles.map(async ([path, _]) => {
      return {
        path: extractRouteName(path)
      };
    })
  );
  // console.log('allBuilders: ', allBuilders)
  return allDocs;
};
