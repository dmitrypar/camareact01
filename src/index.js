import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store  from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'


const SocialNet = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer  />
            </Provider>

        </BrowserRouter>
    )
}




    ReactDOM.render(<SocialNet/>, document.getElementById('root'));






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
