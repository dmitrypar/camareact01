import React from 'react';
import classes from '../Dialogs.module.css';






const Message= (props) => {

    //let path="/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>

            {props.message}
            {props.newMessage}
            
        </div>
    )
};







export default Message;



