import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersPageReducer";

const UsersContainer = () => {
    return (
        <Users/>
    )
};

const mapStateToProps = (state) => {
    return {
users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);