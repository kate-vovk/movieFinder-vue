import { AxiosPromise } from 'axios';
import { CLIENT_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpServices';
import { ILoginData } from '@/interfaces/authInterfaces';

export const loginAPI = async ({ password, email }: ILoginData): Promise<AxiosPromise> => {
  const data = await HTTPService.post(
    {
      password,
      email,
    },
    CLIENT_PATHS.signin,
  );
  return data;
};
