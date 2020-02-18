const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

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

    newMessageBody: ''
};

const dialogsReducer = (state = InitialState, action) => {

    /*stateCopy.dialogsData = [...state.dialogsData];*/

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {...state, newMessageBody: action.body};
        /*        stateCopy.newMessageBody = action.body;
                return stateCopy;*/
        case 'SEND_MESSAGE':
            /*  вытирание ячейки после нажатия отправить
             stateCopy.newMessageBody = "";
             stateCopy.messagesData = [...state.messagesData, {id: 5, message: body}];
            stateCopy.messagesData.push({id: 5, message: body});*/
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 5, message: body}]
            };

        default:
            return state;
    }


}

export default dialogsReducer;