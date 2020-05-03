import React from "react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
		dataPost: [
			{id: 1, name:"nadya velitr", time: "16:24",
				avatar: <img src="https://img.icons8.com/emoji/40/000000/man-pilot.png" alt=""/>,
				img:<img src="https://img.icons8.com/emoji/80/000000/man-student.png" alt=""/>,
				text: "hiiii",
				likesCount: 12
			},
			{id: 2, name:"vladimir vev", time: "11:05",
				avatar: <img src="https://img.icons8.com/emoji/40/000000/man-student.png" alt=""/>,
				img:<img src="https://img.icons8.com/emoji/80/000000/man-student.png" alt=""/>,
				text: "daaaaaa",
				likesCount: 1
			},
			{id: 3, name:"jek shepard", time: "08:30",
				avatar: <img src="https://img.icons8.com/emoji/40/000000/man-technologyst.png" alt=""/>,
				img:<img src="https://img.icons8.com/emoji/80/000000/man-student.png" alt=""/>,
				text: "noooooooo gad noooo",
				likesCount: 120
			},
		],
		newPostText: '',
		friends: [
			{   id:1,
				img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>,
				name: "Andy",
			},
			{
				id:2,
				img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>,
				name: "Sam",
			},
			{
				id:3,
				img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>,
				name: "Саша",
			},
			{
				id:4,
				img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>,
				name: "Анастасия",
			},
			{
				id:5,
				img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>,
				name: "Роман",
			},
			{
				id: 6,
				img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>,
				name: "Фара"
			},
		],
		friendsCount: [{count: "212"}],
		profileInfo: [
			{
				city: "Orenburg",
				site: "www",
				friendsCount: 100,
				followersCount: 55,
				photosCount: 22,
				videosCount: 100,
				audioCount:22
			},
		],
		profile: null,
}


const profileReducer = (state = initialState, action) => {
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
			return {
				...state,
				dataPost: [...state.dataPost, newPost],
				newPostText: '',
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		case SET_USER_PROFILE:
			return {
				...state, profile: action.profile
			}
		default:
			return state;
	}
}


export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;