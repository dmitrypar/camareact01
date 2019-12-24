import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions'
import reducer from './reducer'

const store = createStore(reducer);
const {dispatch} = store;

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

const {inc,dec, rnd } = bindActionCreators (actions, dispatch);


document
.getElementById('inc')
.addEventListener('click',inc);


document
.getElementById('dec')
.addEventListener('click', dec);

document
    .getElementById('rnd')
    .addEventListener('click', ()=>{
    	const payload = Math.floor(Math.random()*10);
        rnd(payload);
    });

const update = ()  => {
document
.getElementById('counter')
.innerHTML= store.getState()
};

store.subscribe(update);




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
