import {profileAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    password: null,
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
          email: action.response,
          password: action.response,
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

export const toLoginCreator= (email, password) => {
    debugger;
   // window.onunload = function() { debugger; }
    //console.log('toLoginCreator', formData)
    return (dispatch)=>{

        profileAPI.toLogin(email, password)
            .then(response => {

                console.log('profileAPI.toLogin', email, password)


                dispatch(setAuthUserData(response))
            })
        debugger;
        console.log('toLoginCreator', email, password)
    }

};


// action creators
export const setAuthUserData = (email, password) => ({type: SET_AUTH_USER_DATA, email, password });



export default authReducer;