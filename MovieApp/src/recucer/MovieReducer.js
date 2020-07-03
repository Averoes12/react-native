import * as ACTION_TYPES from '../actions/ActionTypes'
import { act } from 'react-test-renderer';

const initialState = {
    isLoading : false,
    data : null,
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
                data : actions.data
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