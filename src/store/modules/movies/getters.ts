import { GetterTree } from 'vuex';
import { IMovie, IMoviesState } from '@/interfaces/movieInterface';
import { RootState } from '@/store';

export type Getters = {
  movieList(state: IMoviesState): IMovie[];
};

export const getters: GetterTree<IMoviesState, RootState> & Getters = {
  movieList: (state: IMoviesState) => state.movies,
};
