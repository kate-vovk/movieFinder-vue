import { AxiosPromise } from 'axios';
import { ILoginData, IAuth } from '@/interfaces/authInterfaces';
import { loginAPI, logoutAPI } from '@/user/api/auth';

export const getLoginData = async ({ password, email }: ILoginData): Promise<IAuth> => {
  try {
    const { data } = await loginAPI({ password, email });
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
export const logoutUser = async (): Promise<AxiosPromise> => {
  try {
    const data = await logoutAPI();
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
