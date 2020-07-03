import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getNewsReducer } from './reducers/NewsReducers';

const rootReducer = combineReducers({
    getNewsReducer: getNewsReducer,
})

const store = createStore(
    rootReducer, 
    compose(applyMiddleware(thunk, logger)),
);

export default store;