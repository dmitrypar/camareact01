import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios'

class Users  extends React.Component  {

/*    constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        // после создания в конструкторе объекта он получает JSX разметку в рендере
        // и только в componentDidMount он монтируется и становится видимым
        axios.get("https://randomuser.me/api/?results=4").then(response => {
            console.log(response.data.results);
            /*props.setUsers();*/
            this.props.setUsers(response.data.results);
        })
    }

    /*getUsers = () => {
        if (this.props.users.length === 0) {
            //Error: Maximum update depth exceeded
        }
    };*/

render () {
    return (
        <div>
            {this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.picture.medium} className={styles.photo}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
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
}
};

export default Users;