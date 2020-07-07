import * as ACTION_TYPES from '../actions/ActionTypes'

const initialState = {
    isLoading : false,
    movies : [],
    errorMessage : null
}

export const movieReducer = (state = initialState , actions) => {
    
    switch (actions.type) {
        case ACTION_TYPES.GET_MOVIES_START:
            return{
                ...state,
                isLoading : actions.isLoading,
            };

        case ACTION_TYPES.GET_MOVIES_SUCCESS:
            return{
                ...state,
                isLoading: actions.isLoading,
                movies : actions.movies
            }

        case ACTION_TYPES.GET_MOVIES_FAILED:
            return{
                ...state,
                isLoading : actions.isLoading,
                errorMessage : actions.errorMessage
            }
    
        default:
            return state
    }
}