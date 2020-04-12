import React from "react";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
		dialogsItem: [
			{id: 1, name:"Anastas valkin", avatar: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>},
			{id: 2, name:"Anna block", avatar: <img src="https://img.icons8.com/emoji/48/000000/child-medium-skin-tone.png"/>},
			{id: 3, name:"Seo selkovich",  avatar: <img src="https://img.icons8.com/emoji/48/000000/girl-dark-skin-tone.png"/>},
			{id: 4, name:"Lorem valk23",  avatar: <img src="https://img.icons8.com/emoji/48/000000/man-gesturing-ok.png"/>},
			{id: 5, name:"Braha brafovich",  avatar: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>},
			{id: 6, name:"Anastff valunn",  avatar: <img src="https://img.icons8.com/emoji/48/000000/child-medium-skin-tone.png"/>},
			{id: 7, name:"Anasggtas vain",  avatar:  <img src="https://img.icons8.com/emoji/48/000000/man-gesturing-ok.png"/>},
			{id: 8, name:"lirastas jjlkin",  avatar: <img src="https://img.icons8.com/emoji/48/000000/girl-dark-skin-tone.png"/>},
			{id: 9, name:"Anareas gjgghn",  avatar: <img src="https://img.icons8.com/emoji/48/000000/child-medium-skin-tone.png"/> },
			{id: 10, name:"An va", avatar: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>},

		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How is your it-kamasutra?'},
			{id: 3, message: 'Yo'},
			{id: 4, message: 'Yo'},
			{id: 5, message: 'Yo'},
		],
		newMessageBody: "",
}

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.messages.push({id: 6, message: body});
			state.newMessageBody = '';
			return state;
		default:
			return state;
	}
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default messageReducer;