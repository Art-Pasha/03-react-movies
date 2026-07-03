import axios, { type AxiosResponse } from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN as string;

interface MoviesHttpResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response: AxiosResponse<MoviesHttpResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    },
  );

  return response.data.results;
};

console.log(import.meta.env.VITE_TMDB_TOKEN);