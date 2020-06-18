import {profileAPI} from "../api/api";
import * as axios from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const DELETE_AUTH_USER_DATA = 'DELETE_AUTH_USER_DATA';



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
          isAuth: true,
          token: action.payload.data.access_token,
          email: action.formData.email

        };


        case 'DELETE_AUTH_USER_DATA':
            return   {
                ...state,
                isAuth: false,
                token: null,
                email: null

            };

        default:
            return state;
    }

};



export function toLoginPostCreator (formData)  {

    // window.onunload = function() { debugger; }
    //console.log('toLoginCreator', formData)
    return (dispatch)=>{

        profileAPI.toLogin(formData.email, formData.password)

            .then((response) => {

                console.log('profileAPI.toLogin', formData)

                if(response.statusText==='OK'){
                    dispatch({type:SET_AUTH_USER_DATA, payload: response, formData})
                }


                console.log(response);
                console.log(response.statusText)
            })

        console.log('toLoginCreator', formData)
    }

};


export function toLogOutCreator ()  {

    // window.onunload = function() { debugger; }
    //console.log('toLoginCreator', formData)
    return (dispatch)=>{
        dispatch({type:DELETE_AUTH_USER_DATA})
        //profileAPI.toLogout()

      /*      .then((response) => {
                    dispatch({type:DELETE_AUTH_USER_DATA})
                console.log(response.config.method);
            })*/
    }

};


// action creators
export const setAuthUserData = ({config, data, status, statusText}, formData) => ({type: SET_AUTH_USER_DATA, payload: {config, data, status, statusText}, formData });



export default authReducer;