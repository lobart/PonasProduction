import {tagsAPI} from "../components/api/api";

const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const SETTAGS='SETTAGS';

let initialState = {
    tags: [],
    tagsOnPage: 4,
    isFetching: false
}

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SETTAGS:
            return {...state, tags: action.tags};
        default:
            return state;
    }
}



export let setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let setTags = (tags) => ({type: SETTAGS, tags});
export let getTags = () => { return async (dispatch) => {
    dispatch(setToggleIsFetching(true));

    let data = await tagsAPI.getTags();
    dispatch(setToggleIsFetching(false));
    dispatch(setTags(data.tags));
}}

export default  tagsReducer;