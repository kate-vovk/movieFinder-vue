import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '@/store';
import { Mutations } from './mutations';
import { UserChatMutationTypes } from './mutation-types';
import { IChat, IMessage } from '@/interfaces/userChatInterfaces';
import { UserChatActionTypes } from './action-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IChat, RootState>, 'commit'>;

export interface Actions {
  [UserChatActionTypes.PUSH_NEW_MESSAGE](
    { commit }: AugmentedActionContext,
    message: IMessage,
  ): void;
}

export const actions: ActionTree<IChat, RootState> & Actions = {
  async [UserChatActionTypes.PUSH_NEW_MESSAGE]({ commit }, message: IMessage) {
    commit(UserChatMutationTypes.PUSH_NEW_MESSAGE, message);
  },
};
