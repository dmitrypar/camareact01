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
        axios.get(`https://randomuser.me/api/?page=${this.props.currentPage}&results=${this.props.pageSize}`).then(response => {
            console.log(response.data);
            this.props.setUsers(response.data.results);
/*          console.log(response.data.results);
            props.setUsers();
            this.props.setUsers(response.data);
            https://fakedata.dev/users/v1/get_users?sp=0&av=f&sd=desc&is=256
            http://jsonplaceholder.typicode.com/users
            Pagination чтобы сформировать правильный запрос - нужно изучить какие есть запросы
            читать здесь https://randomuser.me/documentation#results
            например https://randomuser.me/api/?page=3&results=10
            getUsers = () => {
       if (this.props.users.length === 0) {
           //Error: Maximum update depth exceeded
       }
   };*/
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.results)

    });};

render () {

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
    <div>
        <div>
            {pages.map(p=>{


                return <span onClick={(e)=>{this.onPageChanged(p)}} key={p.id} className={this.props.currentPage ===p && styles.selectedpages}>{p}</span>
            })}

        </div>
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
                        {/*<div>{user.name}</div>*/}
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.state}</div>
                        {/* <div>{user.address.city}</div>*/}
                    </span>
                </span>
            </div>)}
        </div>
    </div>
    )
}
};

export default Users;