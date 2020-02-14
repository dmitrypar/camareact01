import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



const MyPostsContainer = (props) => {

/*let postsData = [
{id: 1, message: 'Hihu drug', likesCount: 35},
{id: 2, message: 'Clovoe soobshenie da', likesCount: 71}
]*/





    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let addPosts = () => {
                        store.dispatch(addPostActionCreator());
                    };


                    let onPostChange = (text) => {
                       store.dispatch(updateNewPostTextActionCreator(text));
                    };
                    const state =  store.getState();
                    return (
                        <MyPosts addPosts={addPosts}
                                 updateNewPostText={onPostChange}
                                 posts={state.profilePage.postsData}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
            </StoreContext.Consumer>
    )
};


export default MyPostsContainer;

