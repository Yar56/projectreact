import * as serviceWorker from "./serviceWorker";
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {addPost, updateTextPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateTextPost={updateTextPost}/>
		</BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);



serviceWorker.unregister();