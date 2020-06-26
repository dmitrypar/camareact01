import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_PROFILE_STATUS = 'GET_PROFILE_STATUS';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';
const ADD_OWNER_NAME = 'ADD_OWNER_NAME';
/*const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';*/

let initialState = {
    postsData: [
        {id: 1, message: 'Hihu drug', likesCount: 35},
        {id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
    ],
    newPostText: '',
    profile: null,
    followed: false,
    statusMessage: '',
    userId: '3',
    profileNameAdd: undefined,

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_POST':
        {
            let newPost = {
                id: 3,
                message: action.dialogsPostTextarea,
                likesCount: 40
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        }

        case 'SET_USER_PROFILE':

            const addName = () =>{
                if(state.profile===null){
                    return {
                        profileName: action.profile.name.first,
                        title: action.profile.name.title
                    }
                }
            }

        {


            return {...state,
                profileNameAdd: addName(),
                profile: action.profile ,
                userId:  action.profile.id


            }


        }

        case 'GET_PROFILE_STATUS':
        {

            return {...state,
                statusMessage: action.statusMessage }

        }

        case 'UPDATE_PROFILE_STATUS':
        {

            return {...state,
                statusMessage: action.statusMessage }

        }

        case 'ADD_OWNER_NAME':
        {

            return {...state,
                profileName: state.profile.profileName }

        }


        default:
            return state;
    }
};

export const setUserProfile = (userId) => {

    return (dispatch) => {


        /*    берет URS (которое формируется в navlink users)
        и испол ьзует id для навигации
         логика загрузки лежит в App Route path='/profile/:userId?'
         '?' означает что /profile/:userId не строе правило и вслучае
         отсутсвия рисуй id=1*/
// осторожно работает THUNK!
        profileAPI.getProfileUser(userId)

            .then(response => {
                //dispatch(toogleIsFetching(true));
                dispatch(forSetUserProfile(response.data, response.data.id));

                console.log(response)
            });

    }
};


export const updateStatusCreator= (userId,  statusMessage) =>
{
    return async (dispatch)=>{


        // асинхронный запрос ради которого создавался THUNK
       const response = await profileAPI.updateStatus(userId, statusMessage)

                if(response.status===200){

                    dispatch(updateStatusAC(userId,response.data.status))
                }
                    //console.log('profilePageRaducer - response',response)
    }
}

export const getStatusProfileCreator= (userId) =>
{
    return (dispatch)=>{


        // асинхронный запрос ради которого создавался THUNK
        profileAPI.getStatus(userId)
            .then(response => {

                    dispatch(getStatusProfileAC(response.data.status))

            });

    }

}
//debugger;





export const addPostActionCreator = (dialogsPostTextarea) => ({type: ADD_POST, dialogsPostTextarea});
export const forSetUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getStatusProfileAC = (statusMessage) => ({type: GET_PROFILE_STATUS, statusMessage});
export const updateStatusAC = ( userId, statusMessage) => ({type: UPDATE_PROFILE_STATUS, userId, statusMessage});
export const getOwnerNameAC = () => ({type: ADD_OWNER_NAME});
/*export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});*/

export default profileReducer;