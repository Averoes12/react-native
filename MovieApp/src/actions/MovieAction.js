import * as ACTION_TYPES from './ActionTypes';
import axios from 'axios';
import {API_KEY} from '../constans/constant';

export const getMoviesStart = () => {
  return {
    type: ACTION_TYPES.GET_MOVIES_START,
    isLoading: true,
  };
};

export const getMovieSuccess = movies => {
  return {
    type: ACTION_TYPES.GET_MOVIES_SUCCESS,
    movies: movies,
    isLoading: false,
  };
};

export const getMoviesFailed = errorMessage => {
  return {
    type: ACTION_TYPES.GET_MOVIES_FAILED,
    error: errorMessage,
    isLoading: false,
  };
};

export const getTrendingStart = () => {
  return {
    type: ACTION_TYPES.GET_TRENDING_START,
    isLoading: true,
  };
};

export const getTrendingSucces = trending => {
  return {
    type: ACTION_TYPES.GET_TRENDING_SUCCESS,
    isLoading: false,
    trending: trending,
  };
};

export const getTrendingFailed = error => {
  return {
    type: ACTION_TYPES.GET_TRENDING_SUCCESS,
    isLoading: false,
    error: error,
  };
};

export const getDiscoverStart = () => {
  return {
    type: ACTION_TYPES.GET_DISCOVER_START,
    isLoading: true,
  };
};

export const getDiscoverSuccess = discover => {
  return {
    type: ACTION_TYPES.GET_DISCOVER_SUCCESS,
    isLoading: false,
    discover: discover,
  };
};

export const getDiscoverFailed = error => {
  return {
    type: ACTION_TYPES.GET_MOVIES_FAILED,
    isLoading: false,
    error: error,
  };
};

export const getDetailStart = () => {
  return {
    type: ACTION_TYPES.GET_DETAIL_MOVIE_START,
    isLoading: true,
  };
};

export const getDetailSuccess = detail => {
  return {
    type: ACTION_TYPES.GET_DETAIL_MOVIE_SUCCESS,
    isLoading: false,
    detail: detail,
  };
};

export const getDetailFailed = error => {
  return {
    type: ACTION_TYPES.GET_DETAIL_MOVIE_FAILED,
    isLoading: false,
    error: error,
  };
};

export const getMovies = () => {
  return dispatch => {
    dispatch(getMoviesStart());
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY)
      .then(response => {
        dispatch(getMovieSuccess(response.data.results));
        // console.log(response.data.results);
      })
      .catch(error => {
        dispatch(getMoviesFailed(error));
      });
  };
};

export const getTrending = () => {
  return dispatch => {
    dispatch(getTrendingStart());
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=' + API_KEY,
      )
      .then(responose => {
        dispatch(getTrendingSucces(responose.data.results));
      })
      .catch(error => {
        dispatch(getTrendingFailed(error));
      });
  };
};

export const getDiscover = () => {
  return dispatch => {
    dispatch(getDiscoverStart());
    axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY)
      .then(response => {
        dispatch(getDiscoverSuccess(response.data.results));
      })
      .catch(error => {
        dispatch(getDiscoverFailed(error));
      });
  };
};

export const getDetailMovie = (movie_id) => {
  return dispatch => {
    dispatch(getDetailStart);
    axios
      .get('https://api.themoviedb.org/3/movie/'+ movie_id + '?api_key=9428d1de175b89f3fba2af8d0b021de0')
      .then(responose => {
        dispatch(getDetailSuccess(responose.data));
        console.log(getDetailSuccess("Detail Movie " + responose.data))
      })
      .catch(error => {
        dispatch(getDetailFailed("Movie error " + error));
      });
  };
};
