import React from "react";
import {usersAPI} from "../api/api";


let FOLLOW = 'FOLLOW';
let UN_FOLLOW = 'UN-FOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_TOTAL_USERS_COUNT = ' SET-TOTAL-USERS-COUNT';
let TOGGLE_SET_FETCHING = 'TOGGLE-SET-FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
	users: [ ],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
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
			case SET_TOTAL_USERS_COUNT: {
				return {...state, totalUsersCount: action.count}
			}
			case TOGGLE_SET_FETCHING: {
				return {...state, isFetching: action.isFetching}
			}
			case TOGGLE_IS_FOLLOWING_PROGRESS: {
				return {...state,
					followingInProgress: action.isFetching
						? [...state.followingInProgress, action.userId]
						: state.followingInProgress.filter(id => id !== action.userId)
				}
			}
			default:
				return state;
		}
}


export const subscribeSuccessful = (userId) => ({type: FOLLOW, userId});
export const unsubscribeSuccessful = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_SET_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (pageSize,currentPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));

		usersAPI.getUsers(pageSize, currentPage).then(data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount/50));
			});
	}
}
export const getUsersAndPageChanged = (pageSize,pageNumber) => {
	return (dispatch) => {
		dispatch(setCurrentPage(pageNumber));
		dispatch(toggleIsFetching(true));

		usersAPI.getUsers(pageSize, pageNumber).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));

		});
	}
}
export const subscribe = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true,userId));
		usersAPI.follow(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(subscribeSuccessful(userId))
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
	}
}
export const unsubscribe = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.unfollow(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(unsubscribeSuccessful(userId))
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
	}
}

export default findUsersReducer;