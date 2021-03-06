import { ActionTree, ActionContext } from 'vuex';
import { IAuth, ILoginData } from '@/interfaces/authInterfaces';
import { RootState } from '@/store';
import { Mutations } from './mutations';
import { AuthActionTypes } from './action-types';
import { getLoginData, logoutUser } from '@/user/businessLogic/auth';
import { AuthMutationTypes } from './auth-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IAuth, RootState>, 'commit'>;

export interface Actions {
  [AuthActionTypes.LOG_IN](
    { commit }: AugmentedActionContext,
    { email, password }: ILoginData,
  ): Promise<void>;
  [AuthActionTypes.LOG_OUT]({ commit }: AugmentedActionContext): Promise<void>;
}

export const actions: ActionTree<IAuth, RootState> & Actions = {
  async [AuthActionTypes.LOG_IN]({ commit }, { email, password }: ILoginData) {
    const userData = await getLoginData({ email, password });
    commit(AuthMutationTypes.SET_USER, userData);
  },
  async [AuthActionTypes.LOG_OUT]({ commit }) {
    await logoutUser();
    commit(AuthMutationTypes.LOG_OUT_USER);
  },
};
