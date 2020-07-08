import * as ACTION_TYPES from '../actions/ActionTypes';

const initialState = {
  isLoading: false,
  movies: [],
  trending: null,
  discover: null,
  detail: null,
  errorMessage: null,
};

export const movieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTION_TYPES.GET_MOVIES_START:
      return {
        ...state,
        isLoading: actions.isLoading,
      };

    case ACTION_TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: actions.isLoading,
        movies: actions.movies,
      };

    case ACTION_TYPES.GET_MOVIES_FAILED:
      return {
        ...state,
        isLoading: actions.isLoading,
        errorMessage: actions.errorMessage,
      };

    case ACTION_TYPES.GET_TRENDING_START:
      return {
        ...state,
        isLoading: actions.isLoading,
      };

    case ACTION_TYPES.GET_TRENDING_SUCCESS:
      return {
        ...state,
        isLoading: actions.isLoading,
        trending: actions.trending,
      };

    case ACTION_TYPES.GET_TRENDING_FAILED:
      return {
        ...state,
        isLoading: actions.isLoading,
        errorMessage: actions.error,
      };

    case ACTION_TYPES.GET_DISCOVER_START:
      return {
        ...state,
        isLoading: actions.isLoading,
      };
    case ACTION_TYPES.GET_DISCOVER_SUCCESS:
      return {
        ...state,
        isLoading: actions.isLoading,
        discover: actions.discover,
      };
    case ACTION_TYPES.GET_DISCOVER_FAILED:
      return {
        ...state,
        isLoading: actions.isLoading,
        error: actions.error,
      };

    case ACTION_TYPES.GET_DETAIL_MOVIE_START:
      return {
        ...state,
        isLoading: actions.isLoading,
      };

    case ACTION_TYPES.GET_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: actions.isLoading,
        detail: actions.detail,
      };

    case ACTION_TYPES.GET_DETAIL_MOVIE_FAILED:
      return {
        ...state,
        isLoading: actions.isLoading,
        error: actions.error,
      };

    default:
      return state;
  }
};
