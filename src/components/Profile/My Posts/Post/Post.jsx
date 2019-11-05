import React from 'react';
import classes from './Post.module.css';


const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://img.depo.ua/745xX/Sep2015/64911.jpg" alt=""/>
            post1
            <div>
                <span>like</span>
            </div>

        </div>

    )
};

export default Post;