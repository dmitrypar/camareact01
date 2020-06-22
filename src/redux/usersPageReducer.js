import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IN_FOLLOW = 'TOOGLE_IN_FOLLOW';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
   // folowed: false
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {




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
        case 'TOOGLE_IS_FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }

        case 'TOOGLE_IN_FOLLOW': {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id !== action.userId)
            }
        }

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

        default:
            return state;
    }

};

export const getUsersThunkCreater= (currentPage, pageSize) =>
{
    return async (dispatch)=>{
        // асинхронный запрос ради которого создавался THUNK
   const data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toogleIsFetching(true));
            dispatch(setUsers(data));
            dispatch(toogleIsFetching(false));
}
};

export const follow= (userId) =>
{
    return async (dispatch)=>{

        dispatch(toogleFollowingIn(true, userId));
        // асинхронный запрос ради которого создавался THUNK
       const response = await usersAPI.toFollow(userId)
        /*const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTU5MTY0MTk4NywiZXhwIjoxNjMxNjQxNTg3fQ.bFaBG0qczYzsb1FuriPI_v_FRG4FULwk8waW8IhngZE';
        axios.patch(
            `http://localhost:8000/folowed/${user.id}`,
            {id: user.id,
                follow: "true"},

            {headers: {
                    Authorization: "Bearer "+access_token
                }}
        )*/

                if(response.status===200){
                    console.log(response.status)
                    dispatch(getUsersFollow(userId))
                }
                console.log(response);
                dispatch(toogleFollowingIn(false, userId));
    }
};

export const unfollow= (userId) =>
{
    return (dispatch)=>{

        dispatch(toogleFollowingIn(true, userId));
        // асинхронный запрос ради которого создавался THUNK
        usersAPI.toUnFollow(userId)
        /*const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTU5MTY0MTk4NywiZXhwIjoxNjMxNjQxNTg3fQ.bFaBG0qczYzsb1FuriPI_v_FRG4FULwk8waW8IhngZE';
        axios.patch(
            `http://localhost:8000/folowed/${user.id}`,
            {id: user.id,
                follow: "true"},

            {headers: {
                    Authorization: "Bearer "+access_token
                }}
        )*/
            .then(response => {
                if(response.status===200){
                    console.log(response.status)
                    dispatch( getUsersUnFollow(userId))
                }
                console.log('In dispatch',response);
                dispatch(toogleFollowingIn(false, userId));
            });
        console.log('out dispatch');
    }
};


/*export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toogleIsFetchingAC = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});*/
// action creators

export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const toogleFollowingIn = (isFetching, userId) => ({type: TOOGLE_IN_FOLLOW, isFetching, userId} );
export const getUsersFollow = (userId) => ({type: FOLLOW, userId});
export const getUsersUnFollow = (userId) => ({type: UNFOLLOW, userId});


export default usersReducer;