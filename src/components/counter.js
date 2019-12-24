import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import {bindActionCreators} from 'redux';

const Counter = ({counter, dec, inc, rnd}) => {
    return (
        <div id="root" className="jumbotron">
            <h2 >{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    )
};

const mapStateToProps = (state) =>{
    return {
        counter: state
    }
};

const mapDispatchToProps = (dispatch) =>{

    return (
        bindActionCreators(actions, dispatch)
    )
    }


export default connect(mapStateToProps,mapDispatchToProps)(Counter);