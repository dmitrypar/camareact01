import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import reducer from './reducer'

import {Provider} from 'react-redux';
import App from './components/app'

const store = createStore(reducer);



    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root'));

// Provider сам следит за обновлениями как состояния так и state


/*const inc = () => {
	return {type: 'INC'}
};*/

/*const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (payload) => dispatch(rnd(payload));*/

/*const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args))
};
// так работает функция bindActionCreators from redux


const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch =  bindActionCreator(rnd, dispatch);*/

/*const incDispatch = bindActionCreators(inc, dispatch);
const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch =  bindActionCreators(rnd, dispatch);*/








/*let state = reducer(undefined, {})

state = reducer(state, {type:'INC'});
console.log(state);

state = reducer(state, {type:'INC'});

console.log(state);*/



/*store.subscribe(()=>{
	console.log(store.getState());
})

console.log(store.getState())

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});*/
