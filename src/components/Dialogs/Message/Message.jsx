import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";





const Message= (props) => {

let path="/dialogs/" + props.id;

return (
		<div className={classes.dialog}>
		{props.message}
		</div>
)
};







export default Message;



