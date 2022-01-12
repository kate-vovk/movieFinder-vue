import { AxiosPromise } from 'axios';
import { SERVER_PATHS } from '@/user/constants/constants';
import HTTPService from '@/services/httpServices';

export const getMoviesFromApi = async (path: string): Promise<AxiosPromise> => {
  const movies = await HTTPService.get(`${SERVER_PATHS.movies}?${path}`);
  return movies;
};
