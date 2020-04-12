import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messagesReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";
import photosReducer from "./photosReducer";


let reducers = combineReducers({
	dialogsPage: messageReducer,
	profilePage: postReducer,
	newsPage: newsReducer,
	friendsPage: friendsReducer,
	photosPage: photosReducer,

});

let store = createStore(reducers);

export default store;