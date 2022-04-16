import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { IErrorState } from '@/interfaces/errorInterfaces';

export type Getters = {
  // movieList(state: IMoviesState): IMovie[];
};

export const getters: GetterTree<IErrorState, RootState> & Getters = {
  route: (state: IErrorState) => state.route,
  errorMessage: (state: IErrorState) => state.errorMessage,
  errorStatus: (state: IErrorState) => state.errorStatus,
};
