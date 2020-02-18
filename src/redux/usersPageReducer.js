const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

let initialState = {
    users: [
        {id: 1, followed: true, firstName: 'Dmitry', status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, followed: false, firstName: 'Karen', status: 'in think', location: {city: 'Smolensk', country: 'Russia'}},
        {id: 3, followed: true, firstName: 'Vadim', status: 'out', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 4, followed: false, firstName: 'Stas', status: 'return', location: {city: 'Kiev', country: 'Ukraine'}}

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

        default:
            return state;
    }



};


export default usersReducer;