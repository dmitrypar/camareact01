


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

let rerenderEntireTree = () => {

    console.log("state changed");
};

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

    rerenderEntireTree();

}


export let updateNewPostText = (newMessage) => {



    state.profilePage.newPostText = newMessage;
     
    rerenderEntireTree(state);

}


export const subscribe = (observer) => {
rerenderEntireTree = observer;

};

export default state;