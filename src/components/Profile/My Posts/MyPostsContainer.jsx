import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

/*let postsData = [
{id: 1, message: 'Hihu drug', likesCount: 35},
{id: 2, message: 'Clovoe soobshenie da', likesCount: 71}
]*/



let addPosts = () => {
    props.dispatch(addPostActionCreator());
};


let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));

};

    return (

        <MyPosts addPosts={addPosts}
                 updateNewPostText={onPostChange}
                 posts={props.posts}
                 newPostText={props.newPostText}/>
    )
};


export default MyPostsContainer;

