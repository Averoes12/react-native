import * as ACTION_TYPES from './ActionTypes';
import axios from 'axios';
import {API_KEY} from '../constans/constant';

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

export const getRecomendedMovieStart = () => {
  return {
    type: ACTION_TYPES.RECOMENDED_MOVIE_START,
    isLoading: true,
  };
};

export const getRecomendedMovieSuccess = recomended => {
  return {
    type: ACTION_TYPES.RECOMENDED_MOVIE_SUCCESS,
    isLoading: false,
    recomended: recomended,
  };
};

export const getRecomendedMovieFailed = error => {
  return {
    type: ACTION_TYPES.RECOMENDED_MOVIE_FAILED,
    isLoading: false,
    error: error,
  };
};

export const getSimiliarMovieStart = () => {
  return {
    type: ACTION_TYPES.SIMILIAR_MOVIE_START,
    isLoading: true,
  };
};

export const getSimiliarMovieSuccess = similiar => {
  return {
    type: ACTION_TYPES.SIMILIAR_MOVIE_SUCCESS,
    similiar: similiar,
    isLoading: false,
  };
};

export const getSimiliarMovieFailed = error => {
  return {
    type: ACTION_TYPES.SIMILIAR_MOVIE_FAILED,
    error: error,
    isLoading: false,
  };
};


export const getReviewsStart = () => {
    return{
        type : ACTION_TYPES.REVIEW_START,
        isLoading : true
    }
}

export const getReviewSuccess = reviews => {
    return{
        type : ACTION_TYPES.REVIEW_SUCCESS,
        isLoading : false,
        reviews : reviews
    }
}

export const getReviewFailed = error => {
    return{
        type : ACTION_TYPES.REVIEW_FAILED,
        isLoading : false,
        error : error
    }
}

export const getDetailMovie = movie_id => {
  return dispatch => {
    dispatch(getDetailStart());
    axios
      .get(
        'https://api.themoviedb.org/3/movie/' +
          movie_id +
          '?api_key=9428d1de175b89f3fba2af8d0b021de0',
      )
      .then(responose => {
        dispatch(getDetailSuccess(responose.data));
        console.log(getDetailSuccess('Detail Movie ' + responose.data));
      })
      .catch(error => {
        dispatch(getDetailFailed('Movie error ' + error));
      });
  };
};

export const getRecomended = movie_id => {
  return dispatch => {
    dispatch(getRecomendedMovieStart());
    axios
      .get(
        'https://api.themoviedb.org/3/movie/' +
          movie_id +
          '/recommendations?api_key=' +
          API_KEY,
      )
      .then(response => {
        dispatch(getRecomendedMovieSuccess(response.data.results));
      })
      .catch(error => {
        dispatch(getRecomendedMovieFailed(error));
      });
  };
};


export const getSimiliar = movie_id => {
  return dispatch => {
    dispatch(getSimiliarMovieStart());
    axios
      .get(
        'https://api.themoviedb.org/3/movie/' +
          movie_id +
          '/similar?api_key=' +
          API_KEY,
      )
      .then(response => {
        dispatch(getSimiliarMovieSuccess(response.data.results));
      })
      .catch(error => {
        dispatch(getSimiliarMovieFailed(error));
      });
  };
};

export const getReviews = movie_id => {
    return dispatch => {
        dispatch(getReviewsStart())
        axios.get(
            'https://api.themoviedb.org/3/movie/' + movie_id + '/reviews?api_key=' + API_KEY
        ).then(response => {
            dispatch(getSimiliarMovieSuccess(response.data.results))
        }).catch(error => {
            dispatch(getReviewFailed(error))
        })
    }
}
