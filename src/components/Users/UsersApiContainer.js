import React from 'react';
import * as axios from 'axios'
import Users from "./Users";

class UsersApiContainer  extends React.Component  {

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

    return (
    <Users totalUsersCount={this.props.totalUsersCount}
           pageSize = {this.props.pageSize}
           onPageChanged={this.onPageChanged}
           currentPage = {this.props.currentPage}
           users={this.props.users}
           follow={this.props.follow}
           unfollow={this.props.unfollow}
    />)
}
};

export default UsersApiContainer;