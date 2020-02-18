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

        case 'ADD_POST':
        {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 40
            };
            //создаем поверхностную копию
            let stateCopy = {...state};
            /* state.postsData.push(newPost);*/
            //!!![...state.postsData]!!! {...state.postsData} - иначе ошибка push not function
            //создаем глубокую копию
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case 'UPDATE_NEW_POST_TEXT':
            {
                let stateCopy = {...state};
                stateCopy.newPostText = action.newText;
                return stateCopy;
                /*this._callSubscriber(this._state)*/
            }

        default:
            return state;
    }
debugger;


};


export default profileReducer;