import { GetterTree } from 'vuex';
import { RootState } from '@/store';

import { IAuth } from '@/interfaces/authInterfaces';

export type Getters = {
  isLoggedIn(state: IAuth): boolean;
};

export const getters: GetterTree<IAuth, RootState> & Getters = {
  isLoggedIn: (state: IAuth) => Boolean(state.userId),
  authStatus: (state: IAuth) => state.userId,
};
