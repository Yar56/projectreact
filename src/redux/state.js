import React from "react";


let store = {
    _state: {
        messagesData: [
            {
                id: 1,
                name:"Anastas valkin",
                time:"18:11",
                avatar: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>
            },
            {id: 2, name:"Anna block", time:"18:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/child-medium-skin-tone.png"/>},
            {id: 3, name:"Seo selkovich", time:"22:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/girl-dark-skin-tone.png"/>},
            {id: 4, name:"Lorem valk23", time:"14:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/man-gesturing-ok.png"/>},
            {id: 5, name:"Braha brafovich", time:"08:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>},
            {id: 6, name:"Anastff valunn", time:"28:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/child-medium-skin-tone.png"/>},
            {id: 7, name:"Anasggtas vain", time:"20:11", avatar:  <img src="https://img.icons8.com/emoji/48/000000/man-gesturing-ok.png"/>},
            {id: 8, name:"lirastas jjlkin", time:"18:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/girl-dark-skin-tone.png"/>},
            {id: 9, name:"Anareas gjgghn", time:"20:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/child-medium-skin-tone.png"/> },
            {id: 10, name:"An va", time:"18:11", avatar: <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png"/>},

        ],
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
        newPostText: "hahaha",
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
        friendsPage: [
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
        countFriends: {allFriends: 232, onlineFriends: 222,},
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

    },
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log("state changed");
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                name:"nadya abakan", time: "16:24",
                avatar: <img src="https://img.icons8.com/emoji/40/000000/man-pilot.png" alt=""/>,
                img:<img src="https://img.icons8.com/emoji/80/000000/man-student.png" alt=""/>,
                text: this._state.newPostText,
                likesCount: 0,
            };
            this._state.dataPost.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-TEXT-POST') {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};




export default store;
window.store = store;
