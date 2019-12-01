const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';



let store = {


    _state: {
        dialogsPage:
            {
                dialogsData: [
                    {id: 1, name: 'Dooor'},
                    {id: 2, name: 'Seryi'},
                    {id: 3, name: 'Sveta'},
                    {id: 4, name: 'Sahya'}
                ],
                messagesData: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'Slala'},
                    {id: 3, message: 'Eeee'},
                    {id: 4, message: 'Oggooy'},
                ],

                newMessageText: ''
            },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hihu drug', likesCount: 35},
                {id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
            ],

            newPostText: ''
        }
    },

    _callSubscriber() {
        console.log('Satte changed');
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },


    dispatch(action) {
debugger;
        if (action.type === ADD_POST) {

            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 40
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newMessage;
            this._callSubscriber(this._state);
/*            let newMessageText = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.push(newMessageText);*/
        }

        else if (action.type === SEND_MESSAGE) {

            let newMessage = this._state.dialogsPage.newMessageText ;
            this._state.dialogsPage.newMessageText = '';

            this._state.dialogsPage.messagesData.push({id: 5, message: newMessage});
      /*                 let newMessageText = {
                            id: 5,
                            message: this._state.dialogsPage.newMessageText,
                        };*/


            this._callSubscriber(this._state);
        }

        else if (action.type === ADD_NEW_MESSAGE_TEXT) {

            this._state.dialogsPage.newMessageText = action.newMessage;

            this._callSubscriber(this._state);
        }
    },

    /*    rerenderEntireTree() {
        console.log("state changed");
    },*/

};

export const adPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newMessage: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type:  SEND_MESSAGE
    }
}

export const updateNewPostTextActionCreator  = (text) => {
    return {
    type: ADD_NEW_MESSAGE_TEXT, newMessage: text
    }
}

window.store = store;

export default store;

/*
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
let postsData = [
    {id: 1, message: 'Hihu drug', likesCount: 35},
    {id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
]
*/
/*import {rerenderEntireTree} from "../index";*/