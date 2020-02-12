const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    postsData: [
        {id: 1, message: 'Hihu drug', likesCount: 35},
        {id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
    ],

    newPostText: ''
}



const profileReducer = (state = initialState, action) => {



    switch (action.type) {
        case 'UPDATE_NEW_POST_TEXT':
            debugger;
            state.newPostText = action.newText;
            return state;
        case 'ADD_POST':
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 40

            };

            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        default:
            return state;
    }
debugger;


};


export default profileReducer;