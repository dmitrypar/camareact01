import {createSelector} from "reselect";

const getUsersPage = (state) =>{
    return state.usersPage.users
};

export const SuperSelectorUsersPage = createSelector(getUsersPage,(users)=>{
    return users
});

export const getpageSize = (state) =>{
    return state.usersPage.pageSize
};
export const gettotalUsersCount = (state) =>{
    return state.usersPage.totalUsersCount
};
export const getcurrentPage = (state) =>{
    return state.usersPage.currentPage
};
export const getisFetching = (state) =>{
    return state.usersPage.isFetching
};
export const getAccesToken = (state) =>{
    return state.auth.acces_token
};
export const getfollowingInProgress = (state) =>{
    return state.usersPage.followingInProgress
};

