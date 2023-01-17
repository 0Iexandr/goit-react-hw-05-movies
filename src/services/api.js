import axios from "axios";

const API_KEY = '4d1fe51ed84bccfd5906e94a2d193282';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesApi.get('/trending/all/day', {
    params: {
      page: 1
    },
  });
  return data;
};

export const getSearchedMovies = async (query) => {
  const { data } = await moviesApi.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await moviesApi.get(`/movie/${id}`);
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await moviesApi.get(`/movie/${id}/reviews`);
  return data;
};

export const getMovieCast = async (id) => {
  const { data } = await moviesApi.get(`/movie/${id}/credits`);
  return data;
};

// export function fetchGenresList() {
//   return moviesApi.get('genre/movie/list?language=en-US');
// }