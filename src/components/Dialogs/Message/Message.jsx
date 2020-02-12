import React from 'react';
import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";





const Message= (props) => {

    let path="/dialogs/" + props.id;
    debugger;
    return (
        <div className={classes.dialog}>

            {props.message}
            {props.newMessage}
            
        </div>
    )
};







export default Message;



