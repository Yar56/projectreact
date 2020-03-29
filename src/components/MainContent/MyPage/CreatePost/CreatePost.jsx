import React from "react";
import CreatePostSass from './CreatePost.module.sass';
import Create from "./CreatePostComponent";

const CreatePost = (props) => {
    return(
            <div className={CreatePostSass.createPost}>
                <Create state={props.state} addPost={props.addPost} updateTextPost={props.updateTextPost}/>
            </div>




    )
};

export default CreatePost;