import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

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


    return (
<StoreContext.Consumer>

{
    (store) =>{
        const state = store.getState();

        let onSendMessageClick = () => {
           store.dispatch(sendMessageActionCreator())
        };

        let newMessageBody = state.dialogsPage.newMessageBody;
        // (очищает вводимый текст)

        let onNewMessageChange = (value) => {
            // передаем значение из тексареа в импортированный акшн креатор (сортировочный пункт)
            // - бросаем вниз корзину c с открытой крышкой (скобки -реализация). импорт брок вниз -
            //пропс диспатч - веревка корзины -поднять наверх в стор
            // c балкона сторе с веревкой-пропс-диспатч сбросили корзину-с адресом апдейкреатор ,
            // в корзину кладем эвент-текущее значение текс-эреа чтобы отправить в стор
            store.dispatch(updateNewMessageBodyActionCreator(value))
        };


        return (
            <Dialogs dialogsData={state.dialogsPage.dialogsData}
                     messagesData={state.dialogsPage.messagesData}
                     onSendMessageClick={onSendMessageClick}
                     newMessageBody={newMessageBody}
                     onNewMessageChange={onNewMessageChange}/>
        )

    }
}

    </StoreContext.Consumer>
    )
};


export default DialogsContainer;



