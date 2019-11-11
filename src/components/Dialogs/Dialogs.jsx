import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem= (props) => {

let path="/dialogs/" + props.id;

return (

	 	<div className={classes.dialog + ' ' + classes.active}>
	 	<NavLink to={path}>{props.name}</NavLink> 
          
		</div>

)
};


const Message= (props) => {

let path="/dialogs/" + props.id;

return (

		<div className={classes.dialog}>
		{props.message}
		</div>

)
};



const Dialogs = (props) => {

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


let dialogsElements = dialogsData.map (
(dialog) => 
<DialogItem name={dialog.name} id={dialog.id}/>

);

let messagesElements = messagesData.map (
(message) => 
<Message message={message.message} id={message.id}/>
);





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

		{messagesElements}

		{/*<Message message={messagesData[0].message} id={messagesData[0].id}/>
		<Message message={messagesData[1].message} id={messagesData[1].id}/>
		<Message message={messagesData[2].message} id={messagesData[2].id}/>
		<Message message={messagesData[3].message} id={messagesData[3].id}/> */}
		
		
	</div>

</div>



)


};


export default Dialogs;


console.log(Dialogs);
