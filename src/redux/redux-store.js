import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messagesReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";
import photosReducer from "./photosReducer";


let reducers = combineReducers({
	profilePage: postReducer,
	dialogsPage: messageReducer,
	newsPage: newsReducer,
	friendsPage: friendsReducer,
	photosPage: photosReducer,

});

let store = createStore(reducers);

export default store;