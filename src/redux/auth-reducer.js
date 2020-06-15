import {profileAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    status: null,
    token: null,
    isAuth: false

}

//debugger;

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_AUTH_USER_DATA':
      return   {
            ...state,
          ...action.data,
          isAuth: true
        };

        default:
            return state;
    }

};

/*export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toogleIsFetchingAC = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});*/

export const toLoginCreator= () =>
{
    return (dispatch)=>{

        profileAPI.toLogin()
            .then(response => {

                // console.log(response.config.data)

                const {data} = response;
                dispatch(setAuthUserData(data))
            })

    }
};


// action creators
export const setAuthUserData = (token) => ({type: SET_AUTH_USER_DATA, data: token });



export default authReducer;