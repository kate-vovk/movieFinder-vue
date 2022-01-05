import { MutationTree } from 'vuex';
import { UserChatMutationTypes } from './mutation-types';
import { IChat, IMessage } from '@/interfaces/userChatInterfaces';

export type Mutations<S = IChat> = {
  [UserChatMutationTypes.PUSH_NEW_MESSAGE](state: S, payload: IMessage): void;
};

export const mutations: MutationTree<IChat> & Mutations = {
  [UserChatMutationTypes.PUSH_NEW_MESSAGE](state: IChat, message: IMessage) {
    state.messages.push(message);
  },
};
