import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { IAuth } from '@/interfaces/authInterfaces';
import { auth, AuthStore } from './modules/auth/auth';
import { userChat, UserChatStore } from './modules/userChat/index';
import { IChat } from '@/interfaces/userChatInterfaces';

export type RootState = {
  auth: IAuth;
  userChat: IChat;
};

export type Store = AuthStore<Pick<RootState, 'auth'>> & UserChatStore<Pick<RootState, 'userChat'>>;

export const store = createStore({
  modules: {
    auth,
    userChat,
  },
  plugins: [createPersistedState({ paths: ['auth', 'userChat'] })],
});

export function useStore(): Store {
  return store as Store;
}
