import React from 'react';
import styles from './users.module.css';
/*import {followAC, unfollowAC} from "../../redux/usersPageReducer";*/

const Users = (props) => {
    /*{userImageUrl, firstName, status, {city, country}} = props.users*/
    return (
        <div>
            {props.users.map(user=> <div key={user.id}>
                <span>
                    <div>
                        <img src={user.userAvaUrl}   className={styles.photo}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={()=>{props.unfollow(user.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.firstName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
};

export default Users;