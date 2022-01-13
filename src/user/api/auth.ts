import { AxiosPromise, AxiosResponse } from 'axios';
import { SERVER_PATHS } from '@/user/constants/constants';
import HTTPService from '@/services/httpServices';
import { ILoginData } from '@/interfaces/authInterfaces';

export const loginAPI = async ({ password, email }: ILoginData): Promise<AxiosResponse> => {
  const data = await HTTPService.post(
    {
      password,
      email,
    },
    SERVER_PATHS.signin,
  );
  return data;
};

export const logoutAPI = async (): Promise<AxiosPromise> => {
  const data = await HTTPService.get(SERVER_PATHS.logout);
  return data;
};
