import React from "react";


let initialState = {
	dataAlbums: [
		{
			count: 4,
			img1: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
			img2: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
			img3: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
			img4: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
		}
	],
	dataPhotos: [
		{
			count: 4,
			img1: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
			img2: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
			img3: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
			img4: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>,
		}
	],
}

const photosReducer = (state = initialState, action) => {
	return state;
}

export default photosReducer;