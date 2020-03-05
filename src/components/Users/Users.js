import React from 'react';
import styles from './users.module.css';
import preloader from "../../assets/images/lod.gif";
import {NavLink} from "react-router-dom";

const  Users  = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
  <>

          {props.isFetching ?  <img className={styles.preload} src={preloader} alt="kkk"/>  : null}

      <div>
          <div >
              {pages.map(p=>{
                  return <span onClick={(e)=>{props.onPageChanged(p)}} key={p.id} className={props.currentPage ===p && styles.selectedpages}>{p}</span>
              })}

          </div>
          <div>
              {props.users.map(user =>

                  <div >
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>

                            <img src={user.avatar} className={styles.photo} key={user.id}/>
                        </NavLink>
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
                        <div>{user.first_name}</div>
                        <div>{user.status}</div>
                        {/*<div>{user.name}</div>*/}
                    </span>
                    <span>
                        {/*<div>{user.location.city}</div>
                        <div>{user.location.state}</div>*/}
                        {/* <div>{user.address.city}</div>*/}
                    </span>
                </span>
              </div>)}
          </div>
      </div>
  </>
    )
};

export default Users;