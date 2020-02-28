import React from 'react';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from "./My Posts/MyPostsContainer";




const Profile=(props)=> {

/*    let postsData = [
{id: 1, message: 'Hihu drug', likesCount: 35},
{id: 2, message: 'Plovoe soobshenie da', likesCount: 71}
]*/


    return (
    	<div>
				<Profileinfo profile={props.profile}/>
                <MyPostsContainer
                /*       posts={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
               dispatch = {props.dispatch}*/            />
          
        </div>
    		)
};

    export default Profile;

