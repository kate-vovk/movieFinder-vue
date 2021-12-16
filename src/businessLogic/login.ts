import { ILoginData, IAuth } from '@/interfaces/authInterfaces';
import { loginAPI } from '@/api/login';

export const getLoginData = async ({ password, email }: ILoginData): Promise<IAuth> => {
  try {
    const { data } = await loginAPI({ password, email });
    console.warn('data', data);
    return data;
  } catch (err: any) {
    console.error('Error:', err);
    throw new Error(err.message);
  }
};
