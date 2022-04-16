/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import { IError } from '@/interfaces/errorInterfaces';
import CustomError from '@/utils/customError';

axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  // baseURL: 'https://run.mocky.io/v3/0168c5f8-68c7-4fd2-a570-b36dc7bc0b93',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default class HTTPService {
  static post(data: any, path = ''): Promise<AxiosResponse> {
    return apiClient
      .post(path, data)
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: IError) => {
        throw new CustomError(err);
      });
  }

  static get(path = ''): Promise<any> {
    return apiClient
      .get(path)
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: IError) => {
        throw new CustomError(err);
      });
  }
}
