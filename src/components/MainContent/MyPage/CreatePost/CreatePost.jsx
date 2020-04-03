import React from "react";
import CreatePostSass from './CreatePost.module.sass';
import Create from "./CreatePostComponent";

const CreatePost = (props) => {
    return(
            <div className={CreatePostSass.createPost}>
                <Create state={props.state} dispatch={props.dispatch}/>
            </div>




    )
};

export default CreatePost;