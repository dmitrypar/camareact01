import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';

const Profile=()=> {
    return (
    
        <div>
<img src='http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg'/>
            <div className='item'>
                <MyPosts/>
            </div>
        </div>
    )
};

    export default Profile;