import { getMoviesFromApi } from '@/user/api/movies';
import { IGetMovies } from '@/interfaces/movieInterface';
import { store } from '@/store';
import { ErrorActionTypes } from '@/store/modules/error/action-types';
import { CLIENT_PATHS } from '../constants/constants';

export const getMoviesByQuery = async (path: string): Promise<IGetMovies> => {
  try {
    const {
      data: { results, total },
    } = await getMoviesFromApi(path);
    return { results, total };
  } catch ({ errorMessage, errorStatus }) {
    store.dispatch(ErrorActionTypes.SET_ERROR, {
      route: CLIENT_PATHS.movies,
      errorMessage,
      errorStatus,
    });
    throw errorMessage;
  }
};
