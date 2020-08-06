import * as ActionType from './ActionType';
import axios from 'axios'
export const fetchDataStart = () => {
  return {
    type: ActionType.FETCH_DATA_START,
    isLoading: true,
  };
};
export const fetchDataSuccess = (data) => {
    return {
        type: ActionType.FETCH_DATA_SUCCESS,
        isLoading: false,
        data : data,
    };
};
export const fetchDataFailed = (error) => {
    return {
        type : ActionType.FETCH_DATA_FAILED,
        isLoading : false,
        error : error,
    };
};
export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataStart())
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => {
                dispatch(fetchDataSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchDataFailed(error))
            })
    };
};
export const postDataStart = () => {
    return {
        type:ActionType.POST_DATA_START,
        isLoading:true
    };
};
export const postDataSuccess = (data) => {
    return {
        type:ActionType.POST_DATA_SUCCESS,
        isLoading:false,
        postData : data,
    };
};
export const postDataFailed = (error) => {
    return {
        type : ActionType.POST_DATA_FAILED,
        isLoading: false,
        error : error,
    };
};
export const postData = (userId, title, body) => {
    return dispatch => {
        dispatch(postDataStart())
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title : title,
            body : body,
            userId : userId,},
            {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                dispatch(postDataSuccess(response.data))
                dispatch(postDataSuccess(response.status))
            })
            .catch(error => {
                dispatch(postDataFailed(error))
            })
    };
};
