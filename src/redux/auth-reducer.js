import {profileAPI} from "../api/api";


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const DELETE_AUTH_USER_DATA = 'DELETE_AUTH_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    emailPlusPass: null,
    status: null,
    token: null,
    isAuth: false,
    statusText: '',
    errorLogin: ''

};

//debugger;

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_AUTH_USER_DATA':
      return   {
            ...state,
          ...action.payload,
          isAuth: true,
          token: action.payload.data.access_token,
          email: action.formData.email,
          errorLogin: action.data

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


// делает запрос на сервер (API) и закидывает ответ диспатчем в стор
export function toLoginPostCreator (formData, props)  {

    return async (dispatch)=>{

        const response = await profileAPI.toLogin(formData.email, formData.password);

                if(response.statusText==='OK'){
                    dispatch({type:SET_AUTH_USER_DATA, payload: response, formData})

                } else {
                    console.log(response);
                    dispatch({type:SET_AUTH_USER_DATA, data: response.statusCode})
                    //dispatch(stopSubmit('email', {invalid: 'email is wrong'}))
                }
        //console.log('toLoginCreator', formData)
    }

};


export function toLogOutCreator ()  {

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
//export const setAuthUserData = ({config, data, status, statusText}, formData) => ({type: SET_AUTH_USER_DATA, payload: {config, data, status, statusText}, formData });



export default authReducer;