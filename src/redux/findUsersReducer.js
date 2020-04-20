import React from "react";


let FOLLOW = 'FOLLOW';
let UN_FOLLOW = 'UN-FOLLOW';
let SET_USERS = 'SET-USERS';


let initialState = {
	users: [ ]
};




const findUsersReducer = (state = initialState, action) => {
		switch (action.type) {
			case FOLLOW:
				return {
					...state,
					users: state.users.map( u => {
						 if (u.id === action.userId) {
							return {...u, followed: true}
						}
						 return u;
					}) //  тоже самое что и глубокая копия [...state.users]
				}
			case UN_FOLLOW:
				return {
					...state,
					users: state.users.map( u => {
						if (u.id === action.userId) {
							return {...u, followed: false}
						}
						return u;
					}) //  тоже самое что и глубокая копия [...state.users]
				}
			case SET_USERS: {
				return {...state, users: [...state.users, ...action.users]}
			}
			default:
				return state;
		}
}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default findUsersReducer;