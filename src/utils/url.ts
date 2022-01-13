import { SearchOption } from '@/interfaces/movieInterface';

interface ICreatePath {
  filters?: { [key: string]: string[] };
  searchQuery?: string;
  searchParam?: string;
}

const searchParamsToBack: any = {
  [SearchOption.initial]: 'initial',
  [SearchOption.movie]: 'initial',
  [SearchOption.studio]: 'production_company',
  [SearchOption.actor]: 'actor',
};

export const createPath = ({
  filters = {},
  searchParam = SearchOption.initial,
  searchQuery = '',
}: ICreatePath): string => {
  const filtersPath = Object.keys(filters).reduce(
    (acc: string, filterParam) => `${acc}&${filterParam}=${filters[filterParam].join(',')}`,
    '',
  );
  const searchPath = searchQuery ? `${searchParamsToBack[searchParam]}=${searchQuery}` : '';
  console.warn('searchPath', searchPath);
  const finalPath = `${searchPath}${filtersPath}`;
  return finalPath;
};
