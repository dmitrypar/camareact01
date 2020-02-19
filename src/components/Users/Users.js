import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
    /*{userImageUrl, firstName, status, {city, country}} = props.users*/
    return (
        <div>
            {props.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.userAvaUrl}   className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button>Follow</button> : <button>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.firstName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
};

export default Users;