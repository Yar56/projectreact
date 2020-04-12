import React from "react";


let initialState = {
	sliderStory: [
		{
			imgStory: <img src="https://clck.ru/MZQw6" alt=""/>,
			iconProfile: <img  src="https://img.icons8.com/emoji/48/000000/girl-dark-skin-tone.png" alt=""/>,
			nameProfile: "Anna Karen"
		},
		{
			imgStory: <img  src="https://clck.ru/MZQw6" alt=""/>,
			iconProfile: <img  src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png" alt=""/>,
			nameProfile: "Kara radir"
		},
		{
			imgStory: <img  src="https://clck.ru/MZQw6" alt=""/>,
			iconProfile: <img  src="https://img.icons8.com/emoji/48/000000/child-medium-skin-tone.png" alt=""/>,
			nameProfile: "Ivan Rurikov"
		},
		{
			imgStory: <img  src="https://clck.ru/MZQw6" alt=""/>,
			iconProfile: <img  src="https://img.icons8.com/emoji/48/000000/man-gesturing-ok.png" alt=""/>,
			nameProfile: "Titan Anisov"
		},
	],
	dataNews: [
		{
			id: 1, name:"Vladimir Lem", time: "07:01",
			avatar: <img src="https://img.icons8.com/emoji/40/000000/girl-dark-skin-tone.png" alt=""/>,
			img: <img src="https://clck.ru/MZQw6" alt=""/>,
			text: "ice cream",
			likesCount: 120
		},
		{
			id: 1, name:"Vladimir Lem", time: "07:01",
			avatar: <img src="https://img.icons8.com/emoji/40/000000/girl-dark-skin-tone.png" alt=""/>,
			img: <img src="https://clck.ru/MZQw6" alt=""/>,
			text: "ice cream",
			likesCount: 120
		},
		{
			id: 1, name:"Vladimir Lem", time: "07:01",
			avatar: <img src="https://img.icons8.com/emoji/40/000000/girl-dark-skin-tone.png" alt=""/>,
			img: <img src="https://clck.ru/MZQw6" alt=""/>,
			text: "ice cream",
			likesCount: 120
		},
	],
}

const newsReducer = (state = initialState, action) => {
	return state;
}

export default newsReducer;