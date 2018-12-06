import {createStore,combineReducers} from 'redux'
import todoReducer from './reducer/todoReducer'


import input from './reducer/inputReducer'
const store = createStore(combineReducers({
 todo: todoReducer,
input,
}))



store.dispatch({type:"ADD_TODO",todo:{id:1,txt:'ezez'}})

export default store