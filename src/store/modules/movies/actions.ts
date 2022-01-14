import { ActionContext, ActionTree } from 'vuex';
import { IMoviesState, IFilter } from '@/interfaces/movieInterface';
import { MoviesActionTypes } from './action-types';
import { getMoviesByQuery } from '@/user/businessLogic/movies';
import { Mutations } from './mutations';
import { MoviesMutationTypes } from './mutation-types';
import { RootState, store } from '@/store';
import { createPath } from '@/utils/url';

// interface IQuery {
//   selectParam: string;
//   searchQuery: string;
//   filters: { [key: string]: string[] };
// }

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IMoviesState, RootState>, 'commit'>;

export interface Actions {
  [MoviesActionTypes.GET_MOVIES_BY_QUERY]({
    commit,
  }: AugmentedActionContext): // { selectParam, searchQuery, filters }: IQuery,
  Promise<void>;
  [MoviesActionTypes.ADD_FILTER_OPTION](
    { commit }: AugmentedActionContext,
    { filterParam, filterOption }: IFilter,
  ): void;
  [MoviesActionTypes.SET_SEARCH_QUERY](
    { commit, dispatch }: AugmentedActionContext,
    { searchQuery }: { searchQuery: string },
  ): void;
  [MoviesActionTypes.SET_SEARCH_PARAM](
    { commit, dispatch }: AugmentedActionContext,
    { searchParam }: { searchParam: string },
  ): void;
  [MoviesActionTypes.SET_CURRENT_PAGE](
    { commit }: AugmentedActionContext,
    { pageValue }: { pageValue: number },
  ): void;
  [MoviesActionTypes.SET_MOVIES_PER_PAGE](
    { commit }: AugmentedActionContext,
    { moviesPerPage }: { moviesPerPage: number },
  ): void;
}
// const { searchParam, searchQuery, filters } = store.state.movies;

export const actions: ActionTree<IMoviesState, RootState> & Actions = {
  async [MoviesActionTypes.GET_MOVIES_BY_QUERY](
    { commit }, // { selectParam, searchQuery, filters }: IQuery,
  ) {
    const { searchParam, searchQuery, filters, currentPage, moviesPerPage } = store.state.movies;

    const path = createPath({ filters, searchParam, searchQuery, currentPage, moviesPerPage });

    const moviesByQuery = await getMoviesByQuery(path);
    console.warn('GET Movies', searchParam, searchQuery);
    commit(MoviesMutationTypes.SET_MOVIES, moviesByQuery);
  },

  [MoviesActionTypes.ADD_FILTER_OPTION]({ commit }, { filterParam, filterOption }: IFilter) {
    commit(MoviesMutationTypes.SET_FILTERS, { filterParam, filterOption });
  },

  [MoviesActionTypes.SET_SEARCH_QUERY]({ commit, dispatch }, payload: { searchQuery: string }) {
    const { searchParam } = store.state.movies;

    commit(MoviesMutationTypes.SET_SEARCH_QUERY, { searchQuery: payload.searchQuery });

    if (!searchParam) {
      dispatch(MoviesActionTypes.SET_SEARCH_PARAM, { searchParam: 'initial' });
    }
    dispatch(MoviesActionTypes.SET_CURRENT_PAGE, { pageValue: 0 });
    dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
  },

  [MoviesActionTypes.SET_SEARCH_PARAM]({ commit, dispatch }, payload: { searchParam: string }) {
    const { searchQuery } = store.state.movies;

    commit(MoviesMutationTypes.SET_SEARCH_PARAM, { searchParam: payload.searchParam });

    if (!payload.searchParam) {
      commit(MoviesMutationTypes.SET_SEARCH_PARAM, { searchParam: 'initial' });
    }
    // if searchQuery is not empty
    if (searchQuery) {
      dispatch(MoviesActionTypes.SET_CURRENT_PAGE, { pageValue: 0 });
      dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
    }
  },

  [MoviesActionTypes.SET_CURRENT_PAGE]({ commit, dispatch }, { pageValue }: { pageValue: number }) {
    commit(MoviesMutationTypes.SET_CURRENT_PAGE, { currentPage: pageValue });
    dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
  },
  [MoviesActionTypes.SET_MOVIES_PER_PAGE](
    { commit, dispatch },
    { moviesPerPage }: { moviesPerPage: number },
  ) {
    console.warn('moviesPerPage', moviesPerPage);
    commit(MoviesMutationTypes.SET_MOVIES_PER_PAGE, { moviesPerPage });
    dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
  },
};
