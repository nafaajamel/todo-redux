import inputReducer from './reducer/inputREducer'
import todo from './reducer/todoReducer'
import {createStore,combineReducers}   from 'redux'



const store = createStore(combineReducers({
    todo,
    input:inputReducer
}))


export default store



