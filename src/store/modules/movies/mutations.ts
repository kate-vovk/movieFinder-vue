import { MutationTree } from 'vuex';
import { IGetMovies, IMoviesState, IFilter } from '@/interfaces/movieInterface';
import { MoviesMutationTypes } from './mutation-types';

export type Mutations<S = IMoviesState> = {
  [MoviesMutationTypes.SET_MOVIES](state: S, payload: IGetMovies): void;
  [MoviesMutationTypes.SET_FILTERS](state: S, payload: IFilter): void;
};
export const mutations: MutationTree<IMoviesState> & Mutations = {
  [MoviesMutationTypes.SET_MOVIES](state: IMoviesState, { results, total }: IGetMovies) {
    state.movies = results;
    state.totalCount = total;
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
};
