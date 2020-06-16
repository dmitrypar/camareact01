import React from 'react';
import styles from './users.module.css';
import preloader from "../../assets/images/lod.gif";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

//console.log(props.users)
    //console.log(props.users.map(u=> u.picture.large))
//debugger;

    return (
        <>

            {props.isFetching ? <img className={styles.preload} src={preloader} alt="kkk"/> : null}

            <div>
                <div>
                    {pages.map((p) => {
                        return <span key={p.id} onClick={(e) => {
                            props.onPageChanged(p)
                        }} className={props.currentPage === p && styles.selectedpages}>{p}</span>
                    })}

                </div>
                <div>
                    {props.users.map(user =>

                        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/users/' + user.id}>

                            <img src={user.picture.medium} className={styles.photo} key={user.id} alt={'gg'}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                 onClick={() => {
//debugger;
                                                     props.unfollow(user.id)
                                                     /*            props.toogleFollowingIn(true, user.id);
                                                                     usersAPI.toUnFollow(user.id)
                                                                     /!*const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTU5MTY0MTk4NywiZXhwIjoxNjMxNjQxNTg3fQ.bFaBG0qczYzsb1FuriPI_v_FRG4FULwk8waW8IhngZE';
                                                                     axios.patch(
                                                                         `http://localhost:8000/folowed/${user.id}`,
                                                                         {id: user.id,
                                                                             follow: "false"},

                                                                         {headers: {
                                                                                 Authorization: "Bearer "+access_token
                                                                             }}
                                                                     )*!/
                                                                         .then(response => {
                                                                             if(response.status===200){
                                                                                 console.log(response.status)
                                                                                 props.unfollow(user.id)
                                                                             }
                                                                             console.log(response);
                                                                             props.toogleFollowingIn(false, user.id);
                                                                         });*/
                                                 }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          /* props.toogleFollowingIn(true, user.id);
                                           usersAPI.toFollow(user.id)
                                           /!*const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTU5MTY0MTk4NywiZXhwIjoxNjMxNjQxNTg3fQ.bFaBG0qczYzsb1FuriPI_v_FRG4FULwk8waW8IhngZE';
                                           axios.patch(
                                               `http://localhost:8000/folowed/${user.id}`,
                                               {id: user.id,
                                                   follow: "true"},

                                               {headers: {
                                                       Authorization: "Bearer "+access_token
                                                   }}
                                           )*!/
                                               .then(response => {
                                                   if(response.status===200){
                                                       console.log(response.status)
                                                       props.follow(user.id)
                                                   }
                                                   console.log(response);
                                                   props.toogleFollowingIn(false, user.id);
                                               });*/
                                          props.follow(user.id)
                                      }}>Follow</button>}
                    </div>

                </span>
                            <span>
                    <span>
                        <div>{user.name.first}</div>
                        <div>{user.name.last}</div>
                      

                    </span>
                    <span>


                    </span>
                </span>
                        </div>)}
                </div>
            </div>
        </>
    )
};

export default Users;