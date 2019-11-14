import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessageText, addPost} from './redux/state';
import {updateNewPostText} from './redux/state';


export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addNewMessageText={addNewMessageText}/>, document.getElementById('root'));

}



