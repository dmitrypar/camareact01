import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../Commons/FieldControls/Fieldcontrols";




const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(
        (dialog) =>
            <DialogsItem name={dialog.name} key={dialog.id}/>
    );

    let messagesElements = props.messagesData.map(
        (message) =>
            <Message message={message.message} id={message.id}/>
    );


    /*if (props.Auth===false)
    return <Redirect to={'/login'}/>*/
const maxLengthCreator100 = maxLengthCreator(100)

    const DialogsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={'dialogsTextarea'} validate={[required, maxLengthCreator100]} />
                <div>
                    <button >Sent</button>
                </div>
            </form>
        )
    };

    const DialogReduxForm = reduxForm({form: 'dialogsFormField'})(DialogsForm)

    const onSubmit = (data) => {
        props.onSendMessageClick(data.dialogsTextarea)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
		<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
		<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
		<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/> */}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <DialogReduxForm onSubmit={onSubmit}/>
                {/*<Message message={messagesData[0].message} id={messagesData[0].id}/>
		<Message message={messagesData[1].message} id={messagesData[1].id}/>
		<Message message={messagesData[2].message} id={messagesData[2].id}/>
		<Message message={messagesData[3].message} id={messagesData[3].id}/> */}
            </div>
        </div>
    )


};


export default Dialogs;


//console.log(Dialogs);
