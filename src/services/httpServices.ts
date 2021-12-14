import axios, { AxiosResponse } from 'axios';

axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default class HTTPService {
  static post(data: any, path = ''): Promise<any> {
    return apiClient
      .post(path, data)
      .then((response: AxiosResponse) => {
        console.warn('response', response);
        return response;
      })
      .catch((err: any) => {
        console.warn('error', err);
        // throw new CustomError(err);
      });
  }
}
