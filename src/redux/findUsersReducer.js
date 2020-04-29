import React from "react";


let FOLLOW = 'FOLLOW';
let UN_FOLLOW = 'UN-FOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_USERS_TOTAL_COUNT = ' SET-USERS-TOTAL-COUNT';
let TOGGLE_SET_FETCHING = 'TOGGLE-SET-FETCHING';

let initialState = {
	users: [ ],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,

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
				return {...state, users: action.users}
			}
			case SET_CURRENT_PAGE: {
				return {...state, currentPage: action.currentPage}
			}
			case SET_USERS_TOTAL_COUNT: {
				return {...state, totalUsersCount: action.count}
			}
			case TOGGLE_SET_FETCHING: {
				return {...state, isFetching: action.isFetching}
			}
			default:
				return state;
		}
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_SET_FETCHING, isFetching})

export default findUsersReducer;