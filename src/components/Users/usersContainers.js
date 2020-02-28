import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from 'axios'
import {
    //  actioncreators
    follow,
    setCurrentPage,
    setUsers,
    toogleIsFetching,
    unfollow
} from "../../redux/usersPageReducer";


class UsersApiContainer extends React.Component {

    /*    constructor(props) {
            super(props);
        }*/

    componentDidMount() {
        // после создания в конструкторе объекта он получает JSX разметку в рендере
        // и только в componentDidMount он монтируется и становится видимым

        axios.get(`https://randomuser.me/api/?page=${this.props.currentPage}&results=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(true);
            // для отображения статуса прелодера перед загрузкой данных
            console.log(response.data.results.map((i)=>{return (i.login.username)}));
            this.props.setUsers(response.data.results);
            this.props.toogleIsFetching(false);
            console.log(response.data.results)
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
            this.props.toogleIsFetching(true);
            this.props.setUsers(response.data.results)
            this.props.toogleIsFetching(false);
        });
    };

    render() {

        return (<>

                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       isFetching={this.props.isFetching}
                       toogleIsFetching={this.props.toogleIsFetching}
                />
            </>
        )
    }
};

const UsersContainer = () => {
    return (
        <UsersApiContainer/>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toogleIsFetching: (isFetching) => {
            dispatch(toogleIsFetchingAC(isFetching))
        }

    }
};*/

export default connect(mapStateToProps,
    //action creators
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        toogleIsFetching
    }
)(UsersApiContainer);

/*
export default connect(mapStateToProps,
    mapDispatchToProps
)(UsersApiContainer);*/
