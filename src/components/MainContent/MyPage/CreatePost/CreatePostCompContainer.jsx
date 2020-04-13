
import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreator} from "../../../../redux/postReducer";
import CreatePostComponent from "./CreatePostComponent";


const CreatePostCompContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreate());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <CreatePostComponent addPost={addPost} updateNewPostChange={onPostChange}
                             posts={state.dataPost}
                            newPostText={state.newPostText}
        />
    )
};

export default CreatePostCompContainer;