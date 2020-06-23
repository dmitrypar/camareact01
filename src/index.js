import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNet from './App';








    ReactDOM.render(<SocialNet/>, document.getElementById('root'));



export default SocialNet


/*
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
*/





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
