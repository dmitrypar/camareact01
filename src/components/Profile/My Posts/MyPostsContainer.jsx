import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




/*const MyPostsContainerr = (props) => {

/!*let postsData = [
{id: 1, message: 'Hihu drug', likesCount: 35},
{id: 2, message: 'Clovoe soobshenie da', likesCount: 71}
]*!/





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
                    const stateS =  store.getState();
                    return (
                        <MyPosts addPosts={addPosts}
                                 updateNewPostText={onPostChange}
                                 posts={stateS.profilePage.postsData}
                                 newPostText={stateS.profilePage.newPostText}/>
                    )
                }
            }
            </StoreContext.Consumer>
    );



    }*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text)) },
        addPosts: () => {
            dispatch(addPostActionCreator());
        }

    }
};


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer;

