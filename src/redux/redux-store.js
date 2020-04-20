import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messagesReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";
import photosReducer from "./photosReducer";
import findUsersReducer from "./findUsersReducer";


let reducers = combineReducers({
	profilePage: postReducer,
	newsPage: newsReducer,
	dialogsPage: messageReducer,
	friendsPage: friendsReducer,
	photosPage: photosReducer,
	usersPage: findUsersReducer,

});

let store = createStore(reducers);

export default store;