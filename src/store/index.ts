import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { IAuth } from '@/interfaces/authInterfaces';
import { auth, AuthStore } from './modules/auth/auth';
import { userChat, UserChatStore } from './modules/userChat';
import { IChat } from '@/interfaces/userChatInterfaces';
import { movies, MoviesStore } from './modules/movies';
import { IMoviesState } from '@/interfaces/movieInterface';

export type RootState = {
  auth: IAuth;
  userChat: IChat;
  movies: IMoviesState;
};

export type Store = AuthStore<Pick<RootState, 'auth'>> &
  UserChatStore<Pick<RootState, 'userChat'>> &
  MoviesStore<Pick<RootState, 'movies'>>;

export const store = createStore({
  modules: {
    auth,
    userChat,
    movies,
  },
  plugins: [createPersistedState({ paths: ['auth'] })],
});

export function useStore(): Store {
  return store as Store;
}
