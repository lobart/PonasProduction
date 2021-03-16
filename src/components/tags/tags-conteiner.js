import React from "react";
import {connect} from "react-redux";
import Tags from "./tags";

import {compose} from "redux";
import {getTags} from "../../reducers/tags-reducer";

const TagsContainer = (props) => {
    props.getTags();
    return (
        <Tags props={props}/>
    )
}

let mapStateToProps = (state) => ({
    tags: state.tagsPage.tags,
    isAuth: state.tagsPage.isAuth
})

export default compose (
    connect(mapStateToProps, {
        getTags
    }),
) (TagsContainer);

