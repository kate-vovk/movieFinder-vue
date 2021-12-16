import { MutationTree } from 'vuex';
import { AuthMutationTypes } from './auth-types';
import { IAuth } from '@/interfaces/authInterfaces';
import { state as initialState } from './state';

export type Mutations<S = IAuth> = {
  [AuthMutationTypes.SET_USER](state: S, payload: IAuth): void;
  [AuthMutationTypes.LOG_OUT_USER](state: S): void;
};

export const mutations: MutationTree<IAuth> & Mutations = {
  [AuthMutationTypes.SET_USER](state: IAuth, { userId, userName, userEmail, userRole }: IAuth) {
    state.userId = userId;
    state.userName = userName;
    state.userEmail = userEmail;
    state.userRole = userRole;
  },
  [AuthMutationTypes.LOG_OUT_USER](state: IAuth) {
    console.warn('LOG_OUT mutation');
    state.userId = initialState.userId;
    state.userName = initialState.userName;
    state.userEmail = initialState.userEmail;
    state.userRole = initialState.userRole;
  },
};
