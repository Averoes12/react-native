import * as ACTION_TYPES from '../actions/ActionTypes';

const initialState = {
    isLoading: false,
    news: null,
    newsError: null,
}

export const getNewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_NEWS_START:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case ACTION_TYPES.GET_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: action.isLoading,
                news: action.news,
            }
        case ACTION_TYPES.GET_NEWS_FAILURE:
            return {
                ...state,
                isLoading: action.isLoading,
                newsError: action.newsError,
            }
        default:
            return state
    }
}