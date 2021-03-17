import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Tags from "./tags";

import {compose} from "redux";
import {getTags} from "../../reducers/tags-reducer";

const TagsContainer = (props) => {
    useEffect(() => {
        props.getTags();
    },[]);
    return (
        <Tags tags={props.tags}/>
    )
}

let mapStateToProps = (state) => ({
    tags: state.tagsPage.tags
})

export default compose (
    connect(mapStateToProps, {
        getTags
    }),
) (TagsContainer);

