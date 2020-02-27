import React from 'react';
import styles from './users.module.css';
import preloader from "../../assets/images/lod.gif";

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
          <div>
              {pages.map(p=>{
                  return <span onClick={(e)=>{props.onPageChanged(p)}} key={p.id} className={props.currentPage ===p && styles.selectedpages}>{p}</span>
              })}

          </div>
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
  </>
    )
};

export default Users;