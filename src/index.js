import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store  from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import {addNewMessageText, addPost} from './redux/state';
import {updateNewPostText} from './redux/state';*/
import {BrowserRouter} from 'react-router-dom';




let rerenderEntireTree = (state) => {
debugger;
    ReactDOM.render(
        <BrowserRouter>
        <App state={state} 
        dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));

}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
