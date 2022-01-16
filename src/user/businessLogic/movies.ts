import { getMoviesFromApi } from '@/user/api/movies';
import { IGetMovies } from '@/interfaces/movieInterface';
import { store } from '@/store';
import { ErrorActionTypes } from '@/store/modules/error/action-types';

export const getMoviesByQuery = async (path: string): Promise<IGetMovies> => {
  try {
    const {
      data: { results, total },
    } = await getMoviesFromApi(path);
    return { results, total };
  } catch (err: any) {
    console.warn('err in bl', err);
    store.dispatch(ErrorActionTypes.SET_ERROR, {
      route: '/movies',
      errorMessage: 'errorMessage',
      errorStatus: 'errorStatus',
    });
    throw new Error(err);
  }
};
