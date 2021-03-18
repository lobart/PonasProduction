import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Tags from "./tags";

import {compose} from "redux";
import {downTag, getTags, postTag, setName, upTag} from "../../reducers/tags-reducer";

const TagsContainer = (props) => {
    useEffect(() => {
        props.getTags();
    },[]);
    return (
        <Tags setName={props.setName}
              tags={props.tags}
              newName={props.newName}
              postTag={props.postTag}
              upTag={props.upTag}
              downTag={props.downTag}

        />
    )
}

let mapStateToProps = (state) => ({
    tags: state.tagsPage.tags,
    newName: state.tagsPage.newName
})

export default compose (
    connect(mapStateToProps, {
        getTags,
        setName,
        postTag,
        upTag,
        downTag
    }),
) (TagsContainer);

