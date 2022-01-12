import { ActionContext, ActionTree } from 'vuex';
import { IMoviesState, IFilter } from '@/interfaces/movieInterface';
import { MoviesActionTypes } from './action-types';
import { getMoviesByQuery } from '@/businessLogic/movies';
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
}

export const actions: ActionTree<IMoviesState, RootState> & Actions = {
  async [MoviesActionTypes.GET_MOVIES_BY_QUERY](
    { commit }, // { selectParam, searchQuery, filters }: IQuery,
  ) {
    const { selectParam, searchQuery, filters } = store.state.movies;
    console.warn('TODO: store.state.movies', selectParam, searchQuery);

    const path = createPath({ filters, selectParam, searchQuery });

    const movies = await getMoviesByQuery(path);
    commit(MoviesMutationTypes.SET_MOVIES, movies);
  },
  [MoviesActionTypes.ADD_FILTER_OPTION]({ commit }, { filterParam, filterOption }: IFilter) {
    commit(MoviesMutationTypes.SET_FILTERS, { filterParam, filterOption });
  },
};
