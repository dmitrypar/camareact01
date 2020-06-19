import {toLoginPostCreator} from "./auth-reducer";


const INIT_APP = 'INIT_APP';




let initialState = {
    initApp: true


};

//debugger;

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INIT_APP':
      return   {
            ...state,
          initApp: true

        };

        default:
            return state;
    }

};


// делает запрос на сервер (API) и закидывает ответ диспатчем в стор
export function toInitApp (formData, props)  {

    return (dispatch)=>{


        dispatch(toLoginPostCreator(formData))

            .then(() => {

                dispatch({INIT_APP})
            })

    }

};







export default appReducer;