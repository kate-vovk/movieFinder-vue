import { ILoginData, IAuth } from '@/interfaces/authInterfaces';
import { loginAPI } from '@/api/login';

export const getLoginData = async ({ password, email }: ILoginData): Promise<IAuth> => {
  console.warn('password, email', password, email, process.env.VUE_APP_API_URL);
  const { data } = await loginAPI({ password, email });
  console.warn('data', data);
  return data;
};
