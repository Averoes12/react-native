import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { movieReducer } from './src/recucer/MovieReducer'