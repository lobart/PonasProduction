import {tagsAPI} from "../components/api/api";

const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const SETTAGS='SETTAGS';
const SETNAME='SETNAME';

let initialState = {
    tags: [],
    tagsOnPage: 4,
    isFetching: false,
    newName: null
}

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SETTAGS:
            return {...state, tags: action.tags};
        case SETNAME:
            return {...state, newName: action.name};
        default:
            return state;
    }
}



export let setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let setTags = (tags) => ({type: SETTAGS, tags});
export let setName = (name) => ({type: SETNAME, name});
export let getTags = () => { return async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    let data = await tagsAPI.getTags();
    dispatch(setToggleIsFetching(false));
    dispatch(setTags(data));
}}
export let postTag = (name) => { return async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    let response = await tagsAPI.postTag(name);
    console.log(response);
    let data = await tagsAPI.getTags();
    dispatch(setToggleIsFetching(false));
    dispatch(setTags(data));
}}

export let upTag = (name) => { return async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    let response = await tagsAPI.upTags(name);
    console.log(response);
    let data = await tagsAPI.getTags();
    dispatch(setToggleIsFetching(false));
    dispatch(setTags(data));
}}

export let downTag = (name) => { return async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    let response = await tagsAPI.downTags(name);
    console.log(response);
    let data = await tagsAPI.getTags();
    dispatch(setToggleIsFetching(false));
    dispatch(setTags(data));
}}

export default  tagsReducer;