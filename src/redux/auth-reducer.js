import {profileAPI} from "../api/api";
import * as axios from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    emailPlusPass: null,
    status: null,
    token: null,
    isAuth: false,
    statusText: ''

}

//debugger;

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_AUTH_USER_DATA':
      return   {
            ...state,
          ...action.payload,
          emailPlusPass: action.payload.config.data,
          isAuth: true,
          token: action.payload.data.access_token

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



export function toLoginPostCreator (formData)  {
    debugger;
    // window.onunload = function() { debugger; }
    //console.log('toLoginCreator', formData)
    return (dispatch)=>{

        profileAPI.toLogin(formData.email, formData.password)

            .then((response) => {

                console.log('profileAPI.toLogin', formData)


                dispatch({type:SET_AUTH_USER_DATA, payload: response})
                console.log(response)
            })
        debugger;
        console.log('toLoginCreator', formData)
    }

};


// action creators
export const setAuthUserData = ({config, data, status, statusText}) => ({type: SET_AUTH_USER_DATA, payload: {config, data, status, statusText} });



export default authReducer;