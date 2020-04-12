import React from "react";


let initialState = {
	friends: [
		{
			name: "dsdfdfdf",
			descr: "fdfgd",
			img: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png" alt=""/>,
		}
	],
	friendsRequest: [
		{
			name: "ffff",
			descr: "fff",
			img: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png" alt=""/>,
			request: 232,
		}
	],
	countFriends: {allFriends: 232, onlineFriends: 222,}
}

const friendsReducer = (state = initialState, action) => {
	return state;
}

export default friendsReducer;