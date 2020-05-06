import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";
import photosReducer from "./photosReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
	profilePage: profileReducer,
	newsPage: newsReducer,
	dialogsPage: messageReducer,
	friendsPage: friendsReducer,
	photosPage: photosReducer,
	usersPage: findUsersReducer,
	auth: authReducer,

});

let store = createStore(reducers);

export default store;