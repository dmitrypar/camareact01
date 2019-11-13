import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

/*let postsData = [
{id: 1, message: 'Hihu drug', likesCount: 35},
{id: 2, message: 'Clovoe soobshenie da', likesCount: 71}
]*/

let postsElements = props.postsData.map (
(posts) => 
<Post message={posts.message} likeCount={posts.likesCount}/>

);

let newPostElement = React.createRef();



let addPosts = () => {
debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
};

    return (

        <div className={classes.content}>
            <div className={classes.myPostBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea name="" id="" cols="50" rows="3" ref={newPostElement}></textarea>
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

