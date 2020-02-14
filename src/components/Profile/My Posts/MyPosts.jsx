import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElements = props.posts.map (
(posts) => 
<Post message={posts.message} likeCount={posts.likesCount}/>
);

let newPostElement = React.createRef();
let addPosts = () => {
    props.addPosts();
};
let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    /*передает данные в state во время печати в поле отправки*/
};
    return (

        <div className={classes.content}>
            <div className={classes.myPostBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea  ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                   <div><button onClick={addPosts}>Add post</button></div> 
                </div>
                <div className={classes.posts}>
                   {/* <Post 
                   message={postsData[0].message} likeCount={postsData[0].likesCount}/>
                     <Post message={postsData[1].message} likeCount={postsData[1].likesCount}/> */}
                     {postsElements}
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

