import { CommitOptions, DispatchOptions, Module, Store } from 'vuex';
import { RootState } from '@/store';
import { Actions, actions } from './actions';
import { Mutations, mutations } from './mutations';
import { state } from './state';
import { getters, Getters } from './getters';
import { IErrorState } from '@/interfaces/errorInterfaces';

export type ErrorStore<S = IErrorState> = Omit<Store<S>, 'getters' | 'commit' | 'dispatch'> & {
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

export const error: Module<IErrorState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
