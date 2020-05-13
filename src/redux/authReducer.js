import React from "react";
import {authAPI} from "../api/api";

let SET_USERS_DATA = 'SET-USERS-DATA';

let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false

};




const authReducer = (state = initialState, action) => {
		switch (action.type) {
			case SET_USERS_DATA:
				return {
					...state,
					...action.data,
					isAuth: true
				}

			default:
				return state;
		}
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USERS_DATA, data:{userId, email, login} });
export const getAuthUserData = () => (dispatch) => {
	authAPI.authMe()
		.then(response => {
			if (response.data.resultCode === 0) {
				let {id, login, email} = response.data.data;
				dispatch(setAuthUserData(id, email, login));
			}

		});

}

export default authReducer;