import { MutationTree } from 'vuex';
import { AuthMutationTypes } from './auth-types';
import { IAuth } from '@/interfaces/authInterfaces';

export type Mutations<S = IAuth> = {
  [AuthMutationTypes.SET_USER](state: S, payload: IAuth): void;
};

export const mutations: MutationTree<IAuth> & Mutations = {
  [AuthMutationTypes.SET_USER](state: IAuth, { userId, userName, userEmail, userRole }: IAuth) {
    console.warn(
      'mutations',
      AuthMutationTypes.SET_USER,
      state,
      userId,
      userName,
      userEmail,
      userRole,
    );
    state = { userId, userName, userEmail, userRole };
    state.userId = userId;
  },
};
