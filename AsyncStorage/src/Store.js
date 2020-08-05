import {dataReducer} from './reducer/DataReducer';
import {combineReducers,applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger/src';

const rootReducer = combineReducers({
    dataReducer : dataReducer,
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store
