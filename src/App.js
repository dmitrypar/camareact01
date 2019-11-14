import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";




const App = (props) => {




    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= {() =>
                        <Dialogs dialogsData={props.state.profilePage.dialogsData}
                                 messagesData={props.state.profilePage.messagesData} />}/>
                    <Route path='/profile' render={() =>
                        <Profile postsData={props.state.dialogsPage.postsData}
                        addPost={props.addPost} 
                        newPostText={props.state.dialogsPage.newPostText}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>

            </div>
        </BrowserRouter>

    );
};


export default App;

console.log ();