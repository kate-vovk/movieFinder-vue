import { getMoviesFromApi } from '@/api/movies';
import { IGetMovies } from '@/interfaces/movieInterface';

export const getMoviesByQuery = async (path: string): Promise<IGetMovies> => {
  try {
    const {
      data: { results, total },
    } = await getMoviesFromApi(path);
    return { results, total };
  } catch (err: any) {
    throw new Error(err.message);
  }
};
