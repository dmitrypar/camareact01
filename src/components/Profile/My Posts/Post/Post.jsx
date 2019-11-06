import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://img.depo.ua/745xX/Sep2015/64911.jpg" alt=""/>
            {props.message}
            
            
        
            <div>
                <span>like</span>{props.likeCount}
            </div>

        </div>

    )
};

export default Post;