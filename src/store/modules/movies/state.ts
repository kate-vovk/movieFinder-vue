import { IMoviesState } from '@/interfaces/movieInterface';
import { DataStatus } from '@/interfaces/status';

export const state: IMoviesState = {
  movies: [],
  totalCount: 0,
  searchQuery: '',
  selectParam: 'initial',
  filters: {},
  status: DataStatus.initial,
};
