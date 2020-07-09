import * as ACTION_TYPES from '../actions/ActionTypes';

const initialState = {
  isLoading: false,
  recomended: null,
  similiar: null,
  detail: null,
  reviews: null,
  error: null,
};

export const detailMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
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

    case ACTION_TYPES.RECOMENDED_MOVIE_START:
      return {
        ...state,
        isLoading: actions.isLoading,
      };

    case ACTION_TYPES.RECOMENDED_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: actions.isLoading,
        recomended: actions.recomended,
      };

    case ACTION_TYPES.RECOMENDED_MOVIE_FAILED:
      return {
        ...state,
        isLoading: actions.isLoading,
        error: error,
      };

    case ACTION_TYPES.SIMILIAR_MOVIE_START:
      return {
        ...state,
        isLoading: actions.isLoading,
      };

    case ACTION_TYPES.SIMILIAR_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: actions.isLoading,
        similiar: actions.similiar,
      };

    case ACTION_TYPES.SIMILIAR_MOVIE_FAILED:
      return {
        ...state,
        isLoading: actions.isLoading,
        error: actions.error,
      };

    case ACTION_TYPES.REVIEW_START:
      return {
        ...state,
        isLoading : actions.isLoading
      };

    case ACTION_TYPES.REVIEW_SUCCESS:
        return {
            ...state,
            isLoading : actions.isLoading,
            reviews : actions.reviews
        }

    case ACTION_TYPES.REVIEW_FAILED:
        return {
            ...state,
            isLoading : actions.isLoading,
            error : actions.error
        }    

    default:
      return state;
  }
};
