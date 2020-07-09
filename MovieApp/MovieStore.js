import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {movieReducer} from './src/recucer/MovieReducer';
import {detailMovieReducer} from './src/recucer/DetailMovieReducer';

const rootReducer = combineReducers({
  getMovieReducer: movieReducer,
  getDetailMovieReducer: detailMovieReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
