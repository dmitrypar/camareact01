import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (

        <div className={classes.content}>
            <div>
                My posts
                <div>
                    <textarea name="" id="" cols="50" rows="3"></textarea>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                   <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>

            <div className='item'>
                Main
            </div>
        </div>
    )
};

export default MyPosts;