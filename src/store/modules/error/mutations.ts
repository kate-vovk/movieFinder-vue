import { MutationTree } from 'vuex';
import { ErrorMutationTypes } from './mutation-types';
import { IErrorState } from '@/interfaces/errorInterfaces';

export type Mutations<S = IErrorState> = {
  [ErrorMutationTypes.SET_ERROR_STATE](state: S, payload: IErrorState): void;
};
export const mutations: MutationTree<IErrorState> & Mutations = {
  [ErrorMutationTypes.SET_ERROR_STATE](
    state: IErrorState,
    { route, errorMessage, errorStatus }: IErrorState,
  ) {
    state.route = route;
    state.errorMessage = errorMessage;
    state.errorStatus = errorStatus;
  },
};
