import { GetterTree } from 'vuex';
import { IMoviesState } from '@/interfaces/movieInterface';
import { RootState } from '@/store';

export type Getters = {
  // movieList(state: IMoviesState): IMovie[];
};

export const getters: GetterTree<IMoviesState, RootState> & Getters = {
  // movieList: (state: IMoviesState) => state.movies,
  // totalCount: (state: IMoviesState) => state.totalCount,
  // moviesPerPage: (state: IMoviesState) => state.moviesPerPage,
  // currentPage: (state: IMoviesState) => state.currentPage,
};
