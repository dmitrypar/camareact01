


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

let initialState = {
    users: [
        {id: 1, userAvaUrl:'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
            followed: true, firstName: 'Dmitry', status: 'im fine',
            location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, userAvaUrl:'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
            followed: false, firstName: 'Karen', status: 'in think',
            location: {city: 'Smolensk', country: 'Russia'}},
        {id: 3, userAvaUrl:'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
            followed: true, firstName: 'Vadim', status: 'out',
            location: {city: 'Minsk', country: 'Belarus'}},
        {id: 4, userAvaUrl:'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
            followed: false, firstName: 'Stas', status: 'return',
            location: {city: 'Kiev', country: 'Ukraine'}}

    ],
    newPostText: ''
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'FOLLOW':
      return   {
            ...state,
          users: state.users.map(user=>{
    if (user===action.userId) {
        return {...user, followed: true}
    }
    return user;
          })
        };

        case 'UNFOLLOW':
            return   {
                ...state,
                users: state.users.map(user=>{
                    if (user===action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case 'SET_USERS': {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }



};


export default usersReducer;