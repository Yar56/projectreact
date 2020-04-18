import React from "react";
import {connect} from "react-redux";

import Posts from "./Posts";
import {addPostActionCreate, updateNewPostTextActionCreator} from "../../../../redux/postReducer";


let mapStateToProps = (state) => {
    return {
        dataPost: state.profilePage.dataPost,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {dispatch(updateNewPostTextActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreate())}
    }
}





const PostContainer = connect (mapStateToProps, mapDispatchToProps) (Posts);


export default PostContainer;