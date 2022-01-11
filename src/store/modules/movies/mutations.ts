import { MutationTree } from 'vuex';
import { IGetMovies, IMoviesState } from '@/interfaces/movieInterface';
import { MoviesMutationTypes } from './mutation-types';

export type Mutations<S = IMoviesState> = {
  [MoviesMutationTypes.SET_MOVIES](state: S, payload: IGetMovies): void;
};
export const mutations: MutationTree<IMoviesState> & Mutations = {
  [MoviesMutationTypes.SET_MOVIES](state: IMoviesState, { results, total }: IGetMovies) {
    state.movies = results;
    state.totalCount = total;
  },
};
