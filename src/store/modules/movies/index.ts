import { CommitOptions, DispatchOptions, Module, Store } from 'vuex';
import { IMoviesState } from '@/interfaces/movieInterface';
import { RootState } from '@/store';
import { Actions, actions } from './actions';
import { Mutations, mutations } from './mutations';
import { state } from './state';
import { getters, Getters } from './getters';

export type MoviesStore<S = IMoviesState> = Omit<Store<S>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const movies: Module<IMoviesState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
