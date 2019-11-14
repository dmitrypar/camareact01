


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



   
let state = {
profilePage:
    {
    dialogsData: [
        {id: 1, name: 'Dooor'},
        {id: 2, name: 'Seryi'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Slala'},
        {id: 3, message: 'Eeee'},
        {id: 4, message: 'Oggooy'}
    ]
},
dialogsPage: {
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
        message: state.dialogsPage.newPostText,
        likesCount: 40

    }

    state.dialogsPage.postsData.push(newPost);
    state.dialogsPage.newPostText = '';
    rerenderEntireTree(state);

}


export let updateNewPostText = (newText) => {



    state.dialogsPage.newPostText = newText;
     
    rerenderEntireTree(state);

}

export default state;