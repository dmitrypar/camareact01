import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';


const Profile=()=> {
    return (
    	<div>
				<Profileinfo/>
                <MyPosts/>
          
        </div>
    		)
};

    export default Profile;