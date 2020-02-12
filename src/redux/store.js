import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";

let store = {

    _state: {
        dialogsPage:
            {
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
            },
        profilePage:
            {
            postsData: [
                {id: 1, message: 'Hihu drug', likesCount: 35},
                {id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
            ],

            newPostText: ''
        },
        sidebar: 
            {}                        },

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar);
        this._callSubscriber (this._state)


/*        if (action.type === 'UPDATE_NEW_POST_TEXT') {
            debugger;
            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state)
        }
        else if (action.type === 'ADD_POST') {

            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 40

            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }

        else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber (this._state)}
        else if (action.type === 'SEND_MESSAGE') {
                let body = this._state.dialogsPage.newMessageBody ;
                // вытирание ячейки после нажатия отправить
            this._state.dialogsPage.newMessageBody = '';
                this._state.dialogsPage.messagesData.push( {id: 5, message: body});
            this._callSubscriber (this._state)
        }*/

    }
}

window.store = store;

export default store;
debugger;
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