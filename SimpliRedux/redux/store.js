import {createStore} from 'redux'
import {reducer} from './todoListReducer'

// create store

const store = createStore(reducer)

export default store