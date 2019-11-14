


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





import {rerenderEntireTree} from "../render";

debugger;

   
let state = {
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
}

window.state = state;

export let addPost = () => {

    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 40

    }

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

}

export let addNewMessageText = (newMessage) => {

    let newMessageTest = {

        newMessageText: newMessage,


    }

    state.dialogsPage.messagesData.push(newMessageTest);
/*    state.dialogsPage.messagesData.newMessageText = '';*/

    rerenderEntireTree(state);

}


export let updateNewPostText = (newMessage) => {



    state.profilePage.newPostText = newMessage;
     
    rerenderEntireTree(state);

}

export default state;