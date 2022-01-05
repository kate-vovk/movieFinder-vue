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
    return apiClient.get(path);
  }
}
