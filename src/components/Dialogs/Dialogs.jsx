import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsPageReducer";




const Dialogs = (props) => {

/*let dialogsData = [
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
]*/


let dialogsElements = props.dialogsData.map (
(dialog) => 
<DialogsItem name={dialog.name} id={dialog.id}/>

);

let messagesElements = props.messagesData.map (
(message) => 
<Message message={message.message} id={message.id} />
);




let onSendMessageClick = () => {
	props.dispatch(sendMessageActionCreator())

};

	let newMessageBody = props.newMessageBody;
	// (очищает вводимый текст)

	let onNewMessageChange = (event) => {
		// передаем значение из тексареа в импортированный акшн креатор (сортировочный пункт)
		// - бросаем вниз корзину c с открытой крышкой (скобки -реализация). импорт брок вниз -
		//пропс диспатч - веревка корзины -поднять наверх в стор
		// c балкона сторе с веревкой-пропс-диспатч сбросили корзину-с адресом апдейкреатор ,
		// в корзину кладем эвент-текущее значение текс-эреа чтобы отправить в стор
		props.dispatch(updateNewMessageBodyActionCreator(event.target.value))
	};


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
		<div>
			<div><textarea  onChange={onNewMessageChange} value = {newMessageBody}/></div>
			<div><button onClick={onSendMessageClick}>Sent</button></div>
		</div>

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
