import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { IAuth } from '@/interfaces/authInterfaces';
import { auth, AuthStore } from './modules/auth';
// import { store as documents, DocumentsStore, State as DocumentsState } from '@/store/modules/auth';

export type RootState = {
  auth: IAuth;
};

export type Store = AuthStore<Pick<RootState, 'auth'>>;

export const store = createStore({
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});

export function useStore(): Store {
  return store as Store;
}
