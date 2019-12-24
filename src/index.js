import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions'
import reducer from './reducer'
import Counter from './counter'

const store = createStore(reducer);
const {dispatch} = store;


const {inc,dec, rnd } = bindActionCreators (actions, dispatch);




const update = ()  => {

    ReactDOM.render(<Counter
        inc={inc} dec={dec} rnd={
        ()=>{
            const value = Math.floor(Math.random()*10);
            rnd(value);
        }}
        counter={store.getState()}/>, document.getElementById('root'));
};

update();

store.subscribe(update);

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
