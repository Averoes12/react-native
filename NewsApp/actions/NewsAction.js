import * as ACTION_TYPES from './ActionTypes';
import axios from 'axios';

export const getNewsStart = () => {
    return {
        type: ACTION_TYPES.GET_NEWS_START,
        isLoading: true,
    }
}

export const getNewsSuccess = (news) => {
    return {
        type: ACTION_TYPES.GET_NEWS_SUCCESS,
        isLoading: false,
        news: news,
    }
}

export const getNewsFailure = (newsError) => {
    return {
        type: ACTION_TYPES.GET_NEWS_FAILURE,
        isLoading: false,
        newsError: newsError,
    }
}

export const getNews = () => {
    return (dispatch) => {
        dispatch(getNewsStart());
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=b2756b165db84905923d652c88a44445')
        .then((resp) => {
            dispatch(getNewsSuccess(resp.data.articles));
            console.log(resp.data.articles)
        }).catch((error) => {
            dispatch(getNewsFailure(error));
        });
    }
}