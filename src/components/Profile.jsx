import React from 'react';
import classes from './Profile.module.css';


const Profile=()=> {
    return (
        <div className={classes.content}>

            <img src="http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg"/>
            <div className='item'>
                Main
            </div>
        </div>
    )
};

    export default Profile;