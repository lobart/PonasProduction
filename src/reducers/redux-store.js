import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import tagsReducer from "./tags-reducer";

let reducers = combineReducers({
    tagsPage: tagsReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;