interface ICreatePath {
  filters?: { [key: string]: string[] };
  searchQuery?: string;
  selectParam?: string;
}
export const createPath = ({
  filters = {},
  selectParam = '',
  searchQuery = '',
}: ICreatePath): string => {
  const filtersPath = Object.keys(filters).reduce(
    (acc: string, filterParam) => `${acc}&${filterParam}=${filters[filterParam].join(',')}`,
    '',
  );
  const searchPath = `${selectParam}${searchQuery}`;
  const finalPath = `${searchPath}&${filtersPath}`;
  return finalPath;
};
