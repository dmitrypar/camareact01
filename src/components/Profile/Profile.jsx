import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';




const Profile=(props)=> {

/*    let postsData = [
{id: 1, message: 'Hihu drug', likesCount: 35},
{id: 2, message: 'Plovoe soobshenie da', likesCount: 71}
]*/


    return (
    	<div>
				<Profileinfo/>
                <MyPosts  
                posts={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch = {props.dispatch} />
          
        </div>
    		)
};

    export default Profile;

