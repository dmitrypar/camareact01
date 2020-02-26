


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 38,
    currentPage: 3
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'FOLLOW':
      return   {
            ...state,
          users: state.users.map(user=>{
    if (user.id===action.userId) {
        return {...user, followed: true}
    }
    return user;
          })
        };

        case 'UNFOLLOW':
            return   {
                ...state,
                users: state.users.map(user=>{
                    if (user.id===action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case 'SET_USERS': {
            return {
                ...state, users: action.users
                /*...state, users: [...state.users, ...action.users]*/
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state, currentPage: action.currentPage
            }
        }

        default:
            return state;
    }



};


export default usersReducer;