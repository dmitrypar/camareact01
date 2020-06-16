const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageActionCreator = (dialogsTextarea) => ({type: SEND_MESSAGE, dialogsTextarea});

let InitialState = {
    dialogsData: [
        {id: 1, name: 'Dooor'},
        {id: 2, name: 'Seryi'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Saha'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Slala'},
        {id: 3, message: 'Eeee'},
        {id: 4, message: 'Oggooy'}

    ],

};

const dialogsReducer = (state = InitialState, action) => {

    /*stateCopy.dialogsData = [...state.dialogsData];*/

    switch (action.type) {

        case 'SEND_MESSAGE':
            /*  вытирание ячейки после нажатия отправить
             stateCopy.newMessageBody = "";
             stateCopy.messagesData = [...state.messagesData, {id: 5, message: body}];
            stateCopy.messagesData.push({id: 5, message: body});*/
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: action.dialogsTextarea}]
            };

        default:
            return state;
    }


}

export default dialogsReducer;