import React from "react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-TEXT-POST';

const postReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				name: "nadya abakan", time: "16:24",
				avatar: <img src="https://img.icons8.com/emoji/40/000000/man-pilot.png" alt=""/>,
				img: <img src="https://img.icons8.com/emoji/80/000000/man-student.png" alt=""/>,
				text: state.newPostText,
				likesCount: 0,
			};
			state.dataPost.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}


export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default postReducer;