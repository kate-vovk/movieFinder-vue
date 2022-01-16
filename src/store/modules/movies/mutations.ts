import { MutationTree } from 'vuex';
import { IGetMovies, IMoviesState, IFilter } from '@/interfaces/movieInterface';
import { MoviesMutationTypes } from './mutation-types';
import { DataStatus } from '@/interfaces/status';

export type Mutations<S = IMoviesState> = {
  [MoviesMutationTypes.FETCH_MOVIES_REQUEST](state: S): void;
  [MoviesMutationTypes.FETCH_MOVIES_SUCCESS](state: S, payload: IGetMovies): void;
  [MoviesMutationTypes.FETCH_MOVIES_FAIL](
    state: S,
    payload: { errorMessage: string; errorStatus: any },
  ): void;
  [MoviesMutationTypes.SET_FILTERS](state: S, payload: IFilter): void;
  [MoviesMutationTypes.SET_SEARCH_QUERY](state: S, payload: { searchQuery: string }): void;
  [MoviesMutationTypes.SET_SEARCH_PARAM](state: S, payload: { searchParam: string }): void;
  [MoviesMutationTypes.SET_CURRENT_PAGE](state: S, payload: { currentPage: number }): void;
  [MoviesMutationTypes.SET_MOVIES_PER_PAGE](state: S, payload: { moviesPerPage: number }): void;
  [MoviesMutationTypes.SET_INITIAL_STATE](state: S, payload: IMoviesState): void;
};
export const mutations: MutationTree<IMoviesState> & Mutations = {
  [MoviesMutationTypes.FETCH_MOVIES_REQUEST](state: IMoviesState) {
    state.status = DataStatus.loading;
    state.errorMessage = '';
    state.errorStatus = '';
  },
  [MoviesMutationTypes.FETCH_MOVIES_FAIL](
    state: IMoviesState,
    { errorMessage, errorStatus }: { errorMessage: string; errorStatus: any },
  ) {
    state.status = DataStatus.error;
    state.errorMessage = errorMessage;
    state.errorStatus = errorStatus;
  },
  [MoviesMutationTypes.FETCH_MOVIES_SUCCESS](state: IMoviesState, { results, total }: IGetMovies) {
    state.status = DataStatus.success;
    state.movies = results;
    state.totalCount = total;
    state.errorMessage = '';
    state.errorStatus = '';
  },
  [MoviesMutationTypes.SET_FILTERS](state: IMoviesState, { filterParam, filterOption }: IFilter) {
    if (state.filters[filterParam] && state.filters[filterParam].includes(filterOption)) {
      state.filters[filterParam] = state.filters[filterParam].filter(
        (option) => option !== filterOption,
      );
    } else {
      state.filters[filterParam] = [filterOption];
    }
  },
  [MoviesMutationTypes.SET_SEARCH_QUERY](
    state: IMoviesState,
    { searchQuery }: { searchQuery: string },
  ) {
    state.searchQuery = searchQuery;
  },
  [MoviesMutationTypes.SET_SEARCH_PARAM](
    state: IMoviesState,
    { searchParam }: { searchParam: string },
  ) {
    state.searchParam = searchParam;
  },
  [MoviesMutationTypes.SET_CURRENT_PAGE](
    state: IMoviesState,
    { currentPage }: { currentPage: number },
  ) {
    state.currentPage = currentPage;
  },
  [MoviesMutationTypes.SET_MOVIES_PER_PAGE](
    state: IMoviesState,
    { moviesPerPage }: { moviesPerPage: number },
  ) {
    state.moviesPerPage = moviesPerPage;
  },
  [MoviesMutationTypes.SET_INITIAL_STATE](state: IMoviesState, initialState: IMoviesState) {
    console.warn('initialState', initialState);
    state.totalCount = initialState.totalCount;
    state.currentPage = initialState.currentPage;
    state.moviesPerPage = initialState.moviesPerPage;
    state.searchQuery = initialState.searchQuery;
    state.searchParam = initialState.searchParam;
    state.filters = initialState.filters;
    state.status = initialState.status;
    console.warn('state', state);
  },
};
