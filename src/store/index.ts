import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { IAuth } from '@/interfaces/authInterfaces';
import { auth, AuthStore } from './modules/auth/auth';
import { userChat, UserChatStore } from './modules/userChat';
import { IChat } from '@/interfaces/userChatInterfaces';
import { movies, MoviesStore } from './modules/movies';
import { IMoviesState } from '@/interfaces/movieInterface';
import { error, ErrorStore } from './modules/error';
import { IErrorState } from '@/interfaces/errorInterfaces';

export type RootState = {
  auth: IAuth;
  userChat: IChat;
  movies: IMoviesState;
  error: IErrorState;
};

export type Store = AuthStore<Pick<RootState, 'auth'>> &
  UserChatStore<Pick<RootState, 'userChat'>> &
  MoviesStore<Pick<RootState, 'movies'>> &
  ErrorStore<Pick<RootState, 'error'>>;

export const store = createStore({
  modules: {
    auth,
    userChat,
    movies,
    error,
  },
  plugins: [createPersistedState({ paths: ['auth'] })],
});

export function useStore(): Store {
  return store as Store;
}
