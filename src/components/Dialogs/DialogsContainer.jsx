//import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {withAuthRedirectHoc} from "../../hoc/withRedirectHoc";
import {compose} from "redux";



/*const DialogsContainerr = (props) => {




    return (
<StoreContext.Consumer>

{
    (store) =>{
        const stateS = store.getState();

        let onSendMessageClick = () => {
           store.dispatch(sendMessageActionCreator())
        };

        let newMessageBody = stateS.dialogsPage.newMessageBody;


        let onNewMessageChange = (value) => {

            store.dispatch(updateNewMessageBodyActionCreator(value))
        };


        return (
            <Dialogs dialogsData={stateS.dialogsPage.dialogsData}
                     messagesData={stateS.dialogsPage.messagesData}
                     onSendMessageClick={onSendMessageClick}
                     newMessageBody={newMessageBody}
                     onNewMessageChange={onNewMessageChange}/>
        )

    }
}

    </StoreContext.Consumer>
    )
};*/

let mapStateToProps = (state) => {

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
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
        Auth: state.auth.isAuth
        // (очищает вводимый текст)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        onSendMessageClick: (dialogsTextarea) => {
            dispatch(sendMessageActionCreator(dialogsTextarea))
        }

    }
};




export default compose(
    connect (mapStateToProps, mapDispatchToProps ),
    withAuthRedirectHoc
)(Dialogs);



