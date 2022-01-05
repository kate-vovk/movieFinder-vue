import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from 'vuex';

import { mutations, Mutations } from './mutations';
import { RootState } from '@/store';
import { actions, Actions } from './actions';
import { state } from './state';

import { IChat } from '@/interfaces/userChatInterfaces';

export type UserChatStore<S = IChat> = Omit<VuexStore<S>, 'commit' | 'dispatch'> & {
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
};

export const userChat: Module<IChat, RootState> = {
  state,
  mutations,
  actions,
};
