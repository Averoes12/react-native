import * as ActionType from '../action/ActionType'

const initialState = {
    data : null,
    postData : null,
    isLoading : false,
    error : null,
    statusCode : 0,
};
export const dataReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ActionType.FETCH_DATA_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }
        case ActionType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                data : actions.data,
            }
        case ActionType.FETCH_DATA_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error : actions.error,
            }
        case ActionType.POST_DATA_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }
        case ActionType.POST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                postData: actions.postData,
                statusCode : actions.statusCode
            }
        case ActionType.POST_DATA_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error : actions.error
            }
        default :
            return state
    }
}
