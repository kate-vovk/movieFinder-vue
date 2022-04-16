import { ActionContext, ActionTree } from 'vuex';
import { ErrorActionTypes } from './action-types';
import { Mutations } from './mutations';
import { ErrorMutationTypes } from './mutation-types';
import { RootState } from '@/store';
import { initialState } from './state';
import { IErrorState } from '@/interfaces/errorInterfaces';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IErrorState, RootState>, 'commit'>;

export interface Actions {
  [ErrorActionTypes.SET_ERROR](
    { commit }: AugmentedActionContext,
    { route, errorMessage, errorStatus }: IErrorState,
  ): void;
  [ErrorActionTypes.HIDE_ERROR]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<IErrorState, RootState> & Actions = {
  [ErrorActionTypes.SET_ERROR]({ commit }, { route, errorMessage, errorStatus }: IErrorState) {
    commit(ErrorMutationTypes.SET_ERROR_STATE, { route, errorMessage, errorStatus });
  },
  [ErrorActionTypes.HIDE_ERROR]({ commit }) {
    commit(ErrorMutationTypes.SET_ERROR_STATE, initialState);
  },
};
