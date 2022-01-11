export interface IMovie {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  genre: string;
  duration: number;
  releaseDate: string;
  productionCompany: string;
  price: string;
  cast: string;
  producer: string;
  category: string;
  country: string;
  trailerUrl: string;

  genres?: string;
  categories?: string | number;
  categoryId?: string;
  countryId?: string;
  genreId?: string;
  productionCompanyId?: string;

  quality?: string;
  period?: number;
}

export interface IGetMovies {
  results: IMovie[];
  total: number;
}

export interface IMoviesState {
  movies: IMovie[];
  totalCount: number;
  searchQuery: string;
  selectParam: string;
  filters: { [key: string]: string[] };
  status: string;
}
