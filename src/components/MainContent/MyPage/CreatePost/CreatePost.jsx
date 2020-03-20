import React from "react";
import CreatePostSass from './CreatePost.module.sass';
import Create from "./CreatePostComponent";

const CreatePost = () => {
    return(
            <div className={CreatePostSass.createPost}>
                <Create/>
            </div>




    )
};

export default CreatePost;