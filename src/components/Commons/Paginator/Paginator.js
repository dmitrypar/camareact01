import React from 'react';
import styles from './Paginator.module.css';
import preloader from "../../../assets/images/lod.gif";


const Paginator = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

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
            </div>
        </>
    )
};

export default Paginator;