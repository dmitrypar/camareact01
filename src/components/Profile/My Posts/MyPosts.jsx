import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

let postsElements = props.posts.map (
(post) =>
<Post message={post.message} likeCount={post.likesCount} key={post.id}/>
);


const DialogsPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={'textarea'} name={'dialogsPostTextarea'}/>
            <div>
                <button >Add post</button>
            </div>
        </form>
)
};

const onSubmitDialogsTextarea = (values) => {
    props.addPosts(values.dialogsPostTextarea)
    //console.log(values.dialogsPostTextarea)
};

const DialogsPostReduxForm = reduxForm({form: 'dialogsPostForm'})(DialogsPostForm);

    return (

        <div className={classes.content}>
            <div className={classes.myPostBlock}>
                <h3>My posts</h3>

                <DialogsPostReduxForm onSubmit={onSubmitDialogsTextarea}/>

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

