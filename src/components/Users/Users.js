import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios'

let Users = (props) => {


debugger;
    if (props.users.length === 0) {
        //Error: Maximum update depth exceeded

       axios.get("https://randomuser.me/api/?results=4").then(response => {
            /*props.setUsers();*/
           console.log(response.data.results);
           props.setUsers(response.data.results)
        })
 /*       props.setUsers(
            [
                // https://randomuser.me/api/?results=4
                {
                    id: 1,
                    picture: {
                        medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
                    },
                    followed: true,
                    name: {first: 'Dmitry', last: 'Firl'},
                    status: 'im fine',
                    location: {city: 'Moscow', state: 'Russia'}
                },
                    {
                        id: 2,
                        picture: {
                            medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
                            thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
                        },
                        followed: false,
                        name: {first: 'Ivan', last: 'Dulin'},
                        status: 'in think',
                        location: {city: 'Smolensk', state: 'Russia'}
                    },
                    {
                        id: 3,
                        picture: {
                            medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
                            thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
                        },
                        followed: true,
                        name: {first: 'Tobok', last: 'Lor'},
                        status: 'out',
                        location: {city: 'Minsk', state: 'Belarus'}
                    },
                    {
                        id: 4,
                        picture: {
                            medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
                            thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
                        },
                        followed: false,
                        name: {first: 'Tapak', last: 'Lorak'},
                        status: 'return',
                        location: {city: 'Kiev', state: 'Ukraine'}
                    }
                ]
        )*/

    }
    debugger;
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.picture.medium} className={styles.photo}/>
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
                        <div>{user.name.first}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.state}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
};

export default Users;