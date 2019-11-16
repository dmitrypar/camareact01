




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
                    {id: 4, message: 'Oggooy'},
                    {newMessageText: 'gol ne zashol'}
                ],

            },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hihu drug', likesCount: 35},
                {id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
            ],

            newPostText: ''
        }
    },

    getState () {
        return this._state;
    },

    rerenderEntireTree() {
        console.log("state changed");
    },

    addPost() {

        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 40

        }

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);

    },

    updateNewPostText(newMessage){
        this._state.profilePage.newPostText = newMessage;
        this._rerenderEntireTree(this._state);},

    addNewMessageText(newMessage){

        let newMessageTest = {

            newMessageText: newMessage,
        }

        this._state.dialogsPage.messagesData.push(newMessageTest);
        /*    state.dialogsPage.messagesData.newMessageText = '';*/

        this._rerenderEntireTree();

    },

    subscribe (observer){
        this._rerenderEntireTree = observer;
    }
}













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


window.store = store;


export default store;