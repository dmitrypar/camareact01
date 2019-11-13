import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {rerenderEntireTree} from "./render";

/*addPost('Rerere');*/

/* (!!!(1)!!!)
let dialogsData = [
    {id: 1, name: 'Dooor'},
    {id: 2, name: 'Seryi'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Slala'},
    {id: 3, message: 'Eeee'},
    {id: 4, message: 'Oggooy'}
]


let postsData = [
    {id: 1, message: 'Hihu drug', likesCount: 35},
    {id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
]
*/


/*ReactDOM.render(<App postsData={state.postsData}
                     dialogsData={state.dialogsData}
                     messagesData={state.messagesData}/>, document.getElementById('root'));*/




rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
