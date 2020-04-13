import React from "react";
import CreatePostSass from './CreatePost.module.sass';
import CreatePostComponent from "./CreatePostComponent";
import CreatePostCompContainer from "./CreatePostCompContainer";

const CreatePost = (props) => {
    return(
            <div className={CreatePostSass.createPost}>
                <CreatePostCompContainer store={props.store} />
            </div>




    )
};

export default CreatePost;