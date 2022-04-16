import { AxiosPromise } from 'axios';
import { ILoginData, IAuth } from '@/interfaces/authInterfaces';
import { loginAPI, logoutAPI } from '@/user/api/auth';
import { store } from '@/store';
import { ErrorActionTypes } from '@/store/modules/error/action-types';
import { CLIENT_PATHS } from '../constants/constants';

export const getLoginData = async ({ password, email }: ILoginData): Promise<IAuth> => {
  try {
    const { data } = await loginAPI({ password, email });
    return data;
  } catch ({ errorMessage, errorStatus }) {
    store.dispatch(ErrorActionTypes.SET_ERROR, {
      route: CLIENT_PATHS.signin,
      errorMessage,
      errorStatus,
    });
    throw errorMessage;
  }
};
export const logoutUser = async (): Promise<AxiosPromise> => {
  try {
    const data = await logoutAPI();
    return data;
  } catch ({ errorMessage, errorStatus }) {
    store.dispatch(ErrorActionTypes.SET_ERROR, {
      route: CLIENT_PATHS.signin,
      errorMessage,
      errorStatus,
    });
    throw errorMessage;
  }
};
