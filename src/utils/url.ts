interface ICreatePath {
  filters?: { [key: string]: string[] };
  searchQuery?: string;
  searchParam?: string;
}
export const createPath = ({
  filters = {},
  searchParam = '',
  searchQuery = '',
}: ICreatePath): string => {
  const filtersPath = Object.keys(filters).reduce(
    (acc: string, filterParam) => `${acc}&${filterParam}=${filters[filterParam].join(',')}`,
    '',
  );
  const searchPath = `${searchParam}${searchQuery}`;
  const finalPath = `${searchPath}&${filtersPath}`;
  return finalPath;
};
