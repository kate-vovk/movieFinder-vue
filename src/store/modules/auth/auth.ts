import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from 'vuex';

import { IAuth } from '@/interfaces/authInterfaces';
import { mutations, Mutations } from './mutations';
import { RootState } from '@/store';
import { actions, Actions } from './actions';
import { getters, Getters } from './getters';
import { state } from './state';

export type AuthStore<S = IAuth> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
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

export const auth: Module<IAuth, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
