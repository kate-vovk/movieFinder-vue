import { IMoviesState } from '@/interfaces/movieInterface';
import { DataStatus } from '@/interfaces/status';

export const state: IMoviesState = {
  movies: [],
  totalCount: 0,
  currentPage: 0,
  moviesPerPage: 3,
  searchQuery: '',
  searchParam: 'initial',
  filters: {},
  status: DataStatus.initial,
  errorMessage: '',
  errorStatus: '',
};

export const initialState: IMoviesState = {
  movies: [],
  totalCount: 0,
  currentPage: 0,
  moviesPerPage: 3,
  searchQuery: '',
  searchParam: 'initial',
  filters: {},
  status: DataStatus.initial,
  errorMessage: '',
  errorStatus: '',
};
