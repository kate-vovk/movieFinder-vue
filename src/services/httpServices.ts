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
  static post(data: any, path = ''): Promise<AxiosResponse> {
    return apiClient.post(path, data);
  }

  static get(path = ''): Promise<AxiosResponse> {
    // return axios.get('https://run.mocky.io/v3/0168c5f8-68c7-4fd2-a570-b36dc7bc0b93');
    return apiClient.get(path);
    // .then((response: AxiosResponse) => {
    //   return response;
    // })
    // .catch((err: { response: { status: number }; message: string }) => {
    //   console.error(err);
    // });
  }
}
