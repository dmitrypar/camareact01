import React from 'react';
import styles from './users.module.css';
/*import {followAC, unfollowAC} from "../../redux/usersPageReducer";*/

const Users = (props) => {

    props.setUsers(
        [
            {
                id: 1, userAvaUrl: 'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
                followed: true, firstName: 'Dmitry', status: 'im fine',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2, userAvaUrl: 'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
                followed: false, firstName: 'Karen', status: 'in think',
                location: {city: 'Smolensk', country: 'Russia'}
            },
            {
                id: 3, userAvaUrl: 'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
                followed: true, firstName: 'Vadim', status: 'out',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4, userAvaUrl: 'https://fanfics.me/images/fandoms_heroes/1151-1535527317.jpg',
                followed: false, firstName: 'Stas', status: 'return',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]
    )

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.userAvaUrl} className={styles.photo}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
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